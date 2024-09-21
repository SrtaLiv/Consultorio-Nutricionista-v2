import { title } from "@/components/primitives";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg sm:flex-row md:flex-row sm:h-auto sm:mx-16 md:mx-32 mb-12">
      <section className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full gap-4 p-4 md:py-10">
        <div className="inline-block max-w-xl text-start justify-start">
          <span className={title()}>Ana Agustina Martinelli&nbsp;</span>
          <br />
          <span className={title({ color: "pink" })}>Lic. en Nutricion&nbsp;</span>
          <div className="mt-4">
            Soy Ana Agustina Martinelli, Nutricionista con pasión por la salud y el bienestar. Graduada en 2013 de la Universidad de Belgrano, he dedicado mi carrera a la nutrición trabajando en hospitales y consultas privadas.
          <br /> <br />
            Cada día, busco ser una guía para aquellos que desean mejorar su bienestar a través de la nutrición. La alimentación es una parte fundamental de nuestra vida, y estoy comprometida a ser una aliada en el camino hacia una salud óptima.
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          width={500}  // Ajustar el ancho máximo
          height={500} // Ajustar la altura máxima
          alt="Consultorio"
          src="/consultorio.PNG"
          className="max-w-full max-h-[250px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
