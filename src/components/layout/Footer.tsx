import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-950 text-gray-400"
      aria-label="Pie de página DockTI"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Grid principal ── */}
      <div className="container mx-auto px-4 py-14 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Columna 1 — Marca */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold text-white">
                Dock<span className="text-blue-500">TI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Soluciones tecnológicas de nivel enterprise para PyMEs en Chile.
              Desarrollo de software, soporte TI, cloud, ciberseguridad e infraestructura.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/sti-chile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn STI Chile"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/sti-chile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub STI Chile"
                className="hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://wa.me/56949469213"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp STI Chile"
                className="hover:text-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 — Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Desarrollo de Software', href: '/servicios/desarrollo-software' },
                { label: 'Soporte TI', href: '/servicios/soporte-ti' },
                { label: 'Infraestructura', href: '/servicios/infraestructura' },
                { label: 'Cloud Computing', href: '/servicios/cloud-computing' },
                { label: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
                { label: 'Automatización', href: '/servicios/automatizacion' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Nosotros', href: '/about' },
                { label: 'DockTask (SaaS)', href: '/docktask' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contacto', href: '/#contacto' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <address className="not-italic space-y-3 text-sm" itemScope itemType="https://schema.org/Organization">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span itemProp="address">Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+56949469213"
                  className="hover:text-blue-400 transition-colors"
                  itemProp="telephone"
                >
                  +56 9 4946 9213
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
                <a
                  href="https://dockti.cl"
                  className="hover:text-blue-400 transition-colors"
                  itemProp="url"
                >
                  dockti.cl
                </a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {currentYear}{' '}
            <span className="text-white font-semibold">STI Chile / DockTI</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
