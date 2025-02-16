import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@nextui-org/button";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] mx-auto mb-20">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          width={999}
          height={999}
          alt="Agustina Martinelli"
          src="/AGUS.PNG"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <section className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Mejora tu&nbsp;</span>
          <span className={title({ color: "pink" })}>alimentación&nbsp;</span>
          <br />
          <span className={title()}>
            sin dietas restrictivas.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Cumplí tus objetivos de forma saludable y sostenible.
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="bg-white-100 w-40 rounded-large border-2 border-solid bg-white text-pink-600 shadow-lg"
            href={siteConfig.links.whatsapp}
          >
            Contacto
          </Button>
          <Button as={Link} radius="sm" href={siteConfig.links.instagram}
            className="bg-pink-500 w-40 rounded-large text-white shadow-lg">
            <FaInstagram className="mr-2" />
            Instagram
          </Button>
        </div>
      </section>

    </div>
  );
}
