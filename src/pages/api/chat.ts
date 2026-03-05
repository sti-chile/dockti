// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

/**
 * Carga el contexto del chatbot desde los archivos de context_chat/.
 * Se ejecuta en el servidor, por lo que fs.readFileSync es seguro.
 */
function loadChatContext(): string {
    const contextDir = path.join(process.cwd(), 'context_chat');
    const files = [
        'sistema_prompt.md',
        'empresa.md',
        'servicios.md',
        'precios.md',
        'faq.md',
        'docktask.md',
    ];

    const sections: string[] = [];

    for (const file of files) {
        const filePath = path.join(contextDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            sections.push(`## [${file}]\n${content}`);
        } catch {
            // Si el archivo no existe, continuamos
            console.warn(`context_chat/${file} no encontrado, se omite.`);
        }
    }

    return sections.join('\n\n---\n\n');
}

// Cargamos el contexto una vez al inicializar el módulo (cache en memoria)
let cachedSystemPrompt: string | null = null;

function getSystemPrompt(): string {
    if (!cachedSystemPrompt) {
        const context = loadChatContext();
        cachedSystemPrompt = `Eres el asistente virtual de DockTI (STI Chile). Eres amable, profesional y directo.
Tu objetivo es ayudar a los visitantes a entender los servicios y agendar una consulta.
Responde siempre en español. Si no sabes algo, deriva al correo contacto@dockti.cl.
No inventes precios exactos; usa los rangos del contexto proporcionado.
Cuando alguien quiera contratar, anímalos a escribir al WhatsApp: +56 9 4946 9213.

A continuación tienes toda la información de la empresa, servicios, precios y FAQ:

${context}`;
    }
    return cachedSystemPrompt;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ message: 'El campo message es requerido.' });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: getSystemPrompt()
                },
                {
                    role: "user",
                    content: message
                }
            ],
        });

        res.status(200).json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error en chat API:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
