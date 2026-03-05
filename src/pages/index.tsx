import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Servicios from '@/components/sections/Servicios';
import JsonLd from '@/components/seo/JsonLd';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>DockTI | Desarrollo de Software y Servicios TI para PyMEs en Chile</title>
        <meta
          name="description"
          content="STI Chile: desarrollo de software, soporte TI, cloud computing, ciberseguridad e infraestructura para empresas en Chile. Tecnología enterprise al alcance de tu PyME."
        />
        <link rel="canonical" href="https://dockti.cl" />
      </Head>

      {/* Structured Data */}
      <JsonLd />

      {/* ── HERO ── */}
      <Hero />

      {/* ── SERVICIOS ── */}
      <Servicios />

      {/* ── PROPUESTA DE VALOR ── */}
      <section
        id="por-que-nosotros"
        className="py-20 bg-white dark:bg-gray-950"
        aria-labelledby="valor-heading"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2
              id="valor-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              ¿Por qué elegir STI Chile?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Somos una empresa chilena 100% enfocada en que las PyMEs accedan a tecnología
              de primer nivel sin sacrificar presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🇨🇱',
                title: 'Empresa local, soporte real',
                desc: 'Somos chilenos, hablamos tu idioma y entendemos la realidad del mercado local. Sin soporte offshore ni barreras horarias.',
              },
              {
                icon: '⚡',
                title: 'Tecnología enterprise, precio PyME',
                desc: 'Las mismas herramientas y metodologías que usan las grandes corporaciones, adaptadas al tamaño y presupuesto de tu empresa.',
              },
              {
                icon: '🔒',
                title: 'Seguridad y confiabilidad',
                desc: 'Cada solución que implementamos sigue estándares de ciberseguridad. Tu información y la de tus clientes, siempre protegida.',
              },
              {
                icon: '🚀',
                title: 'Implementación ágil',
                desc: 'Metodologías ágiles para entregar valor rápido. Resultados en semanas, no en años.',
              },
              {
                icon: '🤝',
                title: 'Socio estratégico, no proveedor',
                desc: 'Nos involucramos con los objetivos de tu negocio. Tu éxito es nuestro éxito.',
              },
              {
                icon: '📊',
                title: 'DockTask — tu SaaS propio',
                desc: 'Nuestra plataforma propia de gestión de proyectos y tareas, diseñada para PyMEs chilenas.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCKTASK CTA ── */}
      <section
        id="docktask"
        className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900"
        aria-labelledby="docktask-heading"
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block bg-blue-500/30 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Producto SaaS
          </span>
          <h2
            id="docktask-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Conoce DockTask
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Nuestra plataforma de <strong>gestión de proyectos y tareas</strong> diseñada
            especialmente para equipos chilenos. Planifica, organiza y entrega proyectos
            a tiempo — sin complejidad innecesaria.
          </p>
          <Link
            href="/docktask"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl"
          >
            Ver DockTask
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── TECNOLOGÍAS ── */}
      <section
        className="py-16 bg-white dark:bg-gray-950"
        aria-label="Tecnologías que usamos"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200 mb-10">
            Tecnologías y Plataformas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React / Next.js', 'Node.js', 'Python', 'TypeScript',
              'AWS', 'Azure', 'Docker', 'Kubernetes',
              'PostgreSQL', 'MongoDB', 'Linux', 'CI/CD',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        id="contacto-cta"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            ¿Listo para digitalizar tu empresa?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Conversemos sin compromiso. Analizamos tu situación actual y te proponemos
            la solución más eficiente para tu presupuesto.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Hablar con un experto TI
          </Link>
        </div>
      </section>
    </>
  );
}
