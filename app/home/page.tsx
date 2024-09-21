import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { IconBase } from "react-icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] mx-auto mb-20">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          width={999}
          height={999}
          alt="NextUI hero Image"
          src="/AGUS.PNG"
          className="w-full h-full object-cover"
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
          <Link
            isExternal
            className={buttonStyles({
              color: "danger",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.whatsapp}
          >
            Contacto
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href='/planes'
          >
            Planes
          </Link>
        </div>
      </section>

    </div>
  );
}
