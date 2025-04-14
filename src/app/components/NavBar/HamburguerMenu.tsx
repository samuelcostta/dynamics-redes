"use client"

import { useState} from "react";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";

interface Props{
    navItems: NavItemInterface[]
}

export default function HamburguerMenu({navItems}: Props){
    {/* Estado para o menu hamburguer */}
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="relative md:hidden">
            <button
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Image
                    src={"/hamburguer.svg"}
                    alt="Menu"
                    width={30}
                    height={30}
                />
            </button>

            <div 
                className={`absolute right-0 top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 origin-top transform ${
                    isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
                <ul className="md:hidden">
                    {navItems.map((item, index) => (
                        <NavItem 
                            key={index}
                            url={item.url}
                            label={item.label}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}