import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
}

export default function NavItem(props: NavItemInterface) {
    return(
        <li className="text-white hover:text-gray-300 hover:border-b-2">
            <Link href={props.url}>
                {props.label}
            </Link>
        </li>
    )
}