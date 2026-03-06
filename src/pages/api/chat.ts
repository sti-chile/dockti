// pages/api/chat.ts — powered by Google Gemini
import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? '' });

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
            console.warn(`context_chat/${file} no encontrado, se omite.`);
        }
    }

    return sections.join('\n\n---\n\n');
}

// Contexto cacheado en memoria (se carga una sola vez por instancia)
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
        const { message, history } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ message: 'El campo message es requerido.' });
        }

        // Historial de conversación (opcional, para contexto multi-turno)
        const conversationHistory = Array.isArray(history) ? history : [];

        const contents = [
            ...conversationHistory,
            { role: 'user', parts: [{ text: message }] },
        ];

        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents,
            config: {
                systemInstruction: getSystemPrompt(),
                temperature: 0.7,
                maxOutputTokens: 1024,
            },
        });

        const text = response.text ?? '';
        res.status(200).json({ response: text });
    } catch (error) {
        console.error('Error en chat API (Gemini):', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
