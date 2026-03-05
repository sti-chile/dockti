import Head from 'next/head';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export default function About() {
  return (
    <>
      <Head>
        <title>Nosotros | STI Chile — Empresa de Tecnología en Chile</title>
        <meta
          name="description"
          content="Conoce a STI Chile y a Javier Ferreira, fundador y CEO. Empresa chilena de tecnología especializada en soluciones TI para PyMEs desde Santiago, Chile."
        />
        <link rel="canonical" href="https://dockti.cl/about" />
      </Head>
      <JsonLd />

      {/* ── HERO ABOUT ── */}
      <section
        className="py-24 bg-gradient-to-br from-blue-950 to-gray-900"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              STI Chile
            </span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Somos una empresa tecnológica chilena comprometida con acercar la tecnología
            de primer nivel a las PyMEs de nuestro país.
          </p>
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ── */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                En <strong>STI Chile</strong> creemos que la transformación digital no debe ser
                exclusiva de las grandes corporaciones. Nuestra misión es democratizar el acceso
                a tecnología de calidad enterprise para las pequeñas y medianas empresas chilenas.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ofrecemos <strong>desarrollo de software</strong>, soporte TI, infraestructura,
                cloud computing, ciberseguridad y automatización con estándares internacionales
                y precios adaptados al mercado local.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Ser el socio tecnológico de referencia para las PyMEs de Chile y Latinoamérica,
                impulsando su crecimiento y competitividad a través de soluciones innovadoras
                y acompañamiento continuo.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Queremos que cada empresa chilena, sin importar su tamaño, pueda competir
                con las herramientas digitales que necesita para crecer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Compromiso', desc: 'Nos involucramos de verdad con los objetivos de nuestros clientes.' },
              { icon: '💡', title: 'Innovación', desc: 'Siempre a la vanguardia tecnológica para entregar las mejores soluciones.' },
              { icon: '🔒', title: 'Confianza', desc: 'Transparencia total en cada proyecto, proceso y comunicación.' },
              { icon: '🇨🇱', title: 'Identidad Local', desc: 'Empresa chilena que entiende el mercado y la cultura de negocios local.' },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFIL FUNDADOR ── */}
      <section className="py-20 bg-white dark:bg-gray-950" aria-labelledby="fundador-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-6xl font-bold text-white shadow-xl">
                JF
              </div>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Fundador & CEO
              </span>
              <h2
                id="fundador-heading"
                className="text-3xl font-bold text-gray-900 dark:text-white mt-1 mb-4"
              >
                Javier Ferreira
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Estudiante de <strong>Ingeniería en Ejecución Informática</strong> (egreso 2026),
                Javier fundó STI Chile con una misión clara: que las pequeñas y medianas empresas
                chilenas puedan acceder a soluciones tecnológicas de calidad, sin el precio
                desproporcionado de las grandes consultoras.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Con experiencia práctica en desarrollo de software, infraestructura TI y gestión
                de proyectos, Javier lidera un equipo apasionado por la tecnología y comprometido
                con el crecimiento de sus clientes.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Desarrollo de Software', 'Cloud Computing', 'Ciberseguridad', 'Gestión TI', 'Liderazgo'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuestra Historia
          </h2>
          <div className="space-y-8">
            {[
              {
                year: '2024',
                title: 'Fundación de STI Chile',
                desc: 'Javier Ferreira funda STI Chile con el objetivo de acercar soluciones tecnológicas de calidad a las PyMEs chilenas.',
              },
              {
                year: '2025',
                title: 'Lanzamiento de DockTask',
                desc: 'Desarrollamos DockTask, nuestra plataforma SaaS de gestión de proyectos y tareas diseñada para equipos chilenos.',
              },
              {
                year: '2026',
                title: 'Expansión de servicios',
                desc: 'Ampliamos nuestra cartera de servicios con cloud computing avanzado, ciberseguridad y automatización de procesos.',
              },
            ].map((hito) => (
              <div key={hito.year} className="flex gap-6">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{hito.year}</span>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-0.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{hito.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{hito.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Quieres saber cómo podemos ayudarte?
          </h2>
          <p className="text-blue-100 mb-8">
            Conversemos sobre los desafíos tecnológicos de tu empresa. Sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
