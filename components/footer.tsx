import { Logo } from './icons';
import { FaPhone, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from '@nextui-org/button';
import { siteConfig } from '@/config/site';
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row h-auto px-16 py-12 bg-custom-footer">
            <div className="flex-1 mb-8 flex flex-col">
                <Logo />
                <p className='mt-2'>Agustina Martinelli, Licenciada en Nutrición.</p>
                <Button as={Link} radius="sm" href={siteConfig.links.whatsapp}
                    className="bg-pink-500 w-40 mt-4 text-white shadow-lg">
                    Pedir turno
                </Button>
            </div>

            <div className="flex-1 mb-8 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Contáctame</h2>
                <ul className="list-none p-0">
                    <li className='flex items-center mb-2'>
                        <a href="tel:+542284307606" className="text-pink-500 hover:underline flex items-center">
                            <FaPhone className="mr-2" />
                            +54 9 2284 21-8463
                        </a>
                    </li>
                    <li className='flex items-center mb-2'>
                        <a href="mailto:anaagustina@gmail.com" className="text-pink-500 hover:underline flex items-center">
                            <CgMail className="mr-2" />
                            agusmartineli@hotmail.com
                        </a>
                    </li>
                    <li className='flex items-center'>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Olavarria+General+Paz+3150"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:underline flex items-center"
                        >
                            <FaMapMarkerAlt className="mr-2" />
                            General Paz 3150
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Redes</h2>
                <Button as={Link} radius="sm" href={siteConfig.links.instagram}
                    className="bg-pink-500 w-40 text-white shadow-lg">
                    <FaInstagram className="mr-2" />
                    Instagram
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
