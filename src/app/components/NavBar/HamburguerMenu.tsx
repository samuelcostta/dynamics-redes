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
        <>
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
            </div>

            {isMenuOpen && (
                <div className="absolute left-0 w-full bg-gray-800 z-50 md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {navItems.map((item, index) => (
                            <NavItem 
                                key={index}
                                url={item.url}
                                label={item.label}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}