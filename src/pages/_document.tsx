import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <Head>
        {/* ── Charset & Viewport (next/head gestiona viewport, aquí solo charset) ── */}
        <meta charSet="utf-8" />

        {/* ── SEO Principal ── */}
        <meta
          name="description"
          content="STI Chile | Desarrollo de Software, Soporte TI, Cloud Computing y Ciberseguridad para PyMEs en Chile. Soluciones tecnológicas a medida desde Santiago."
        />
        <meta
          name="keywords"
          content="desarrollo de software Chile, soporte TI Santiago, cloud computing empresas, ciberseguridad PyMEs, infraestructura TI Chile, automatización procesos, DockTI, STI Chile"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Javier Ferreira — STI Chile" />
        <meta name="theme-color" content="#1d4ed8" />

        {/* ── Canonical ── */}
        <link rel="canonical" href="https://dockti.cl" />

        {/* ── Geo ── */}
        <meta name="geo.region" content="CL" />
        <meta name="geo.placename" content="Santiago, Chile" />
        <meta name="geo.position" content="-33.4569;-70.6483" />
        <meta name="ICBM" content="-33.4569, -70.6483" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CL" />
        <meta property="og:url" content="https://dockti.cl" />
        <meta
          property="og:title"
          content="DockTI | Desarrollo de Software y Servicios TI para PyMEs en Chile"
        />
        <meta
          property="og:description"
          content="STI Chile entrega soluciones tecnológicas a medida: desarrollo web, soporte TI, cloud, infraestructura, ciberseguridad y automatización. Tecnología enterprise al alcance de tu empresa."
        />
        <meta
          property="og:image"
          content="https://dockti.cl/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DockTI — Servicios TI para PyMEs en Chile" />
        <meta property="og:site_name" content="DockTI | STI Chile" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dockti_cl" />
        <meta
          name="twitter:title"
          content="DockTI | Desarrollo de Software y Servicios TI en Chile"
        />
        <meta
          name="twitter:description"
          content="Soluciones tecnológicas de nivel enterprise para PyMEs chilenas. Desarrollo, soporte, cloud, ciberseguridad y automatización."
        />
        <meta
          name="twitter:image"
          content="https://dockti.cl/images/og-image.jpg"
        />

        {/* ── Favicon / Icons ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Preconnect para performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── Dark mode hydration segura ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
