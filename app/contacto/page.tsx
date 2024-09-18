import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function ContactoPage() {
  return (
    <div className="px-8 sm:px-16 mb-12">
      <h1 className={title()}>Contacto</h1>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          className="flex flex-col w-full md:w-1/2 gap-4 needs-validation text-start"
        >
          <input
            type="text"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 mb-2"
            name="email"
          />
          <input
            type="text"
            placeholder="Nombre completo"
            required
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 mb-2"
            name="name"
          />
          <textarea
            name="message"
            required
            placeholder="Tu mensaje"
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-56 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 mb-2"
          ></textarea>
          <Button type="submit" className="bg-pink-500 w-32 text-white">Enviar consulta</Button>
          <input type="hidden" name="apikey" value="c0fc130b-87e3-4d0a-b17d-28e396fb18af" />
          <input type="checkbox" className="hidden" name="botcheck" />
        </form>

        <div className="relative w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.727493513305!2d-60.32298012341066!3d-36.8968668821963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445ced08374b1%3A0x2e2912fe370e432c!2sGral.%20Paz%203150%2C%20B7400%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1726679686875!5m2!1sen!2sar" 
              height={400}
              width={200}
              className="top-0 left-0 w-full h-300 border-0"
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
}
