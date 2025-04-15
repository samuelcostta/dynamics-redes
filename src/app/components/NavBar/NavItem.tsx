import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
}

interface Props extends NavItemInterface{
    onClick?: () => void;
}

export default function NavItem({ url, label, onClick}: Props) {
    return(
        // Cria a lista para o menu dropdown
        <li className="text-white hover:text-gray-300 hover:border-b-2">
            <Link href={url} onClick={onClick}>
                {label}
            </Link>
        </li>
    )
}