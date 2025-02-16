export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ana Agustina Martinelli",
  description: "Nutricion.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre mi",
      href: "https://www.instagram.com/nutricion.martinelli/",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/inicio",
    },
    {
      label: "Sobre mi",
      href: "/",
    },
    {
      label: "Contacto",
      href: "/",
    },
    {
      label: "Whatsapp",
      href: "/",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/nutricion.martinelli/",
    whatsapp: "https://api.whatsapp.com/send?phone=542284218463",
  },
};
