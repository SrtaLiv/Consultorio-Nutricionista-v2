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
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-current",
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
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
        {/* <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
          <IoLogoWhatsapp />
        </Link> */}
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

    </NextUINavbar>
  );
};
