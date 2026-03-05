// components/sections/Hero.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 overflow-hidden"
      aria-label="Sección principal DockTI"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Image
          src="/images/tech-background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>
      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-gray-900/90" />

      {/* Círculos decorativos */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">
              Tecnología enterprise al alcance de tu empresa
            </span>
          </motion.div>

          {/* H1 Principal — keyword principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Desarrollo de Software y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Servicios TI
            </span>{' '}
            para PyMEs en Chile
          </motion.h1>

          {/* Subtítulo con propuesta de valor */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            En <strong className="text-white">STI Chile</strong> transformamos tu empresa con soluciones de{' '}
            <strong className="text-cyan-300">desarrollo de software</strong>, soporte TI, cloud computing,
            ciberseguridad e infraestructura — sin el precio enterprise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Solicitar Cotización Gratis
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver Servicios
            </Link>
          </motion.div>

          {/* Stats rápidas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
          >
            {[
              { value: '6', label: 'Áreas de Servicio' },
              { value: '24/7', label: 'Soporte Disponible' },
              { value: '100%', label: 'Enfoque en PyMEs' },
              { value: 'CL', label: 'Empresa Chilena' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
