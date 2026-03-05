/**
 * JsonLd.tsx — Structured Data / Schema.org para DockTI / STI Chile
 * Incluye: Organization, WebSite, LocalBusiness, Service (×6), Person
 */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://dockti.cl/#organization",
  name: "STI Chile",
  alternateName: "DockTI",
  url: "https://dockti.cl",
  logo: {
    "@type": "ImageObject",
    url: "https://dockti.cl/images/logo.png",
    width: 300,
    height: 60,
  },
  image: "https://dockti.cl/images/og-image.jpg",
  description:
    "STI Chile es una empresa tecnológica chilena que ofrece Desarrollo de Software, Soporte TI, Infraestructura, Cloud Computing, Ciberseguridad y Automatización para PyMEs en Chile.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+56949469213",
      availableLanguage: "Spanish",
      areaServed: "CL",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/sti-chile",
    "https://www.instagram.com/dockti_cl",
    "https://github.com/sti-chile",
  ],
  founder: {
    "@type": "Person",
    name: "Javier Ferreira",
    url: "https://dockti.cl/about",
  },
  foundingDate: "2024",
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dockti.cl/#website",
  url: "https://dockti.cl",
  name: "DockTI | STI Chile",
  description:
    "Soluciones tecnológicas de nivel enterprise para PyMEs chilenas. Desarrollo, soporte TI, cloud, infraestructura, ciberseguridad y automatización.",
  publisher: {
    "@id": "https://dockti.cl/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://dockti.cl/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "es-CL",
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo de Software a Medida",
    description:
      "Desarrollo de aplicaciones web y móviles personalizadas con tecnologías modernas para empresas chilenas. APIs RESTful, integraciones de pago y sistemas escalables.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Desarrollo de Software",
    url: "https://dockti.cl/servicios/desarrollo-software",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Desarrollo",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicaciones Web Responsivas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Frontend y Backend" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "APIs RESTful" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integraciones de Pago" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soporte TI Empresarial",
    description:
      "Servicios de soporte técnico y mantenimiento nivel 1, 2 y 3 para empresas en Chile. Monitoreo 24/7 y resolución rápida de incidencias.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Soporte TI",
    url: "https://dockti.cl/servicios/soporte-ti",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Infraestructura TI",
    description:
      "Diseño e implementación de infraestructura tecnológica escalable para empresas chilenas: servidores, redes, virtualización, almacenamiento y recuperación ante desastres.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Infraestructura TI",
    url: "https://dockti.cl/servicios/infraestructura",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Computing para Empresas",
    description:
      "Migración y gestión de servicios en la nube (AWS, Azure) para optimizar operaciones y reducir costos en empresas chilenas.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Cloud Computing",
    url: "https://dockti.cl/servicios/cloud-computing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ciberseguridad Empresarial",
    description:
      "Protección integral para activos digitales: auditorías de seguridad, gestión de accesos, implementación de políticas y monitoreo continuo para empresas en Chile.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Ciberseguridad",
    url: "https://dockti.cl/servicios/ciberseguridad",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatización de Procesos",
    description:
      "Optimización e integración de procesos empresariales mediante automatización inteligente, RPA y Business Intelligence para empresas chilenas.",
    provider: { "@id": "https://dockti.cl/#organization" },
    areaServed: "CL",
    serviceType: "Automatización",
    url: "https://dockti.cl/servicios/automatizacion",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dockti.cl/#javier-ferreira",
  name: "Javier Ferreira",
  jobTitle: "CEO & Fundador",
  worksFor: { "@id": "https://dockti.cl/#organization" },
  url: "https://dockti.cl/about",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institución de Educación Superior — Ingeniería en Ejecución Informática (egreso 2026)",
  },
  knowsAbout: [
    "Desarrollo de Software",
    "Infraestructura TI",
    "Cloud Computing",
    "Ciberseguridad",
    "Gestión de Proyectos",
  ],
  nationality: {
    "@type": "Country",
    name: "Chile",
  },
  sameAs: ["https://github.com/javaferso"],
};

const schemas = [organizationSchema, websiteSchema, ...serviceSchemas, personSchema];

export default function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
