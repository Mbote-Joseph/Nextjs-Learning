import Link from 'next/link';
import '../header.css';

export default function Header() {
    return (
        <header className="header" style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",    
        }}>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>


        </header>
    )
}