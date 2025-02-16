import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { IoLogoWhatsapp } from "react-icons/io";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="flex justify-between w-full">
        <NavbarBrand as="li" className="flex gap-3">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>

        <div className="hidden lg:flex items-center gap-4">

        </div>
        <NavbarItem className="lg:flex hidden ">
          <Button
            isExternal
            as={Link}
            className="text-sm text-green-500 font-bold bg-default-100"
            href={siteConfig.links.whatsapp}
            startContent={<IoLogoWhatsapp />}
            variant="flat"
          >
            Whatsapp
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden flex !justify-end items-center gap-2">
        <Button
          isExternal
          as={Link}
          className="text-sm text-green-500 font-bold bg-default-100"
          href={siteConfig.links.whatsapp}
          startContent={<IoLogoWhatsapp />}
          variant="flat"
        >
          Whatsapp
        </Button>
      </NavbarContent>


    </NextUINavbar>
  );
};
