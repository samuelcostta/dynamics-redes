import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";
import HamburguerMenu from "./HamburguerMenu";

export default function NavBar() {
    {/* Itens de navegação */}
    const navItems : NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/sobre",
            label: "Sobre"
        },
        {
            url: "/servicos",
            label: "Serviços"
        },
        {
            url: "/contato",
            label: "Contato"
        }
    ]

    return(
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-2">
                {/* Logo */}
                <Link href="/">
                    <Image 
                        src="/logoBranca.png" 
                        alt="Logo"
                        width={170} 
                        height={170} 
                    />
                </Link>

                {/* Itens de navegação */}
                <ul className="hidden md:flex  flex-1 justify-center gap-6 items-center">
                    {navItems.map((item, index) => (
                        <NavItem 
                            key={index}
                            url={item.url}
                            label={item.label}
                        />
                    ))}
                </ul>
                
                <div className="md:hidden justify-center">
                    {/* Botão hamburguer */}
                    <HamburguerMenu navItems={ navItems }/>
                </div>
            </div>

            
        </nav>
    );
}