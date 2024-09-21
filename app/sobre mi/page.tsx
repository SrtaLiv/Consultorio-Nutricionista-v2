import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { IconBase } from "react-icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <div className="flex flex-col border-2 md:flex-row h-[70vh] rounded-lg bg-custom-pink mx-32 mb-20">
      <section className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full gap-4 py-4 md:py-10">
        <div className="inline-block max-w-xl text-start justify-start">
          <span className={title()}>Ana Agustina Martinelli&nbsp;</span>
          <br />
          <span className={title({ color: "pink" })}>Lic. en Nutricion&nbsp;</span>
          <div className={subtitle({ class: "mt-4" })}>
            Soy Ana Agustina Martinelli, Nutricionista con pasión por la salud y el bienestar. Graduada en 2013 de la Universidad de Belgrano, he dedicado mi carrera a la nutrición trabajando en hospitales y consultas privadas.

            Cada día, busco ser una guía para aquellos que desean mejorar su bienestar a través de la nutrición. La alimentación es una parte fundamental de nuestra vida, y estoy comprometida a ser una aliada en el camino hacia una salud óptima.
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/2 h-1/2 md:h-full">
      <Image
          width={999}
          height={999}
          alt="NextUI hero Image"
          src="/consultorio.PNG"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
