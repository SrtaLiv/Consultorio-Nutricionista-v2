import ContactoPage from "./contacto/page";
import HomePage from "./home/page";
import SobreMiPage from "./sobre mi/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomePage/>
      <SobreMiPage/>
      <ContactoPage />
    </div>
  );
}
