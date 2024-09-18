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
      label: "Consultorio",
      href: "/consultorio",
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
      label: "Planes",
      href: "/planes",
    },
  ],
  links: {
    instagram: "https://github.com/nextui-org/nextui",
    whatsapp: "https://twitter.com/getnextui",
  },
};
