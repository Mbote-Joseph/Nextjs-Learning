'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation';

const navLink = [
    {name: "Register", href: "/register" },
    {name: "Login", href:"login"},
    {name: "Forgot Password", href: "/forgot-password"}
]
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}){
    const pathname = usePathname();
    return (
        <div>
            {navLink.map((link) => {
                return (
                    <Link href={link.href} key={link.name}>
                        {link.name}
                    </Link>
                );
            })}
            {/* <h2>Inner layout</h2> */}
            {children}
        </div>
    )
}