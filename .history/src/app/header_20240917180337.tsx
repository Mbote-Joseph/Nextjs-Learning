import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header className="header" style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",    
        }}>
            <Link className="navLink" href="/about">About</Link>
            <Link className="navLink"  href="/blog">Blog</Link>
            <Link className="navLink"  href="/contact">Contact</Link>


        </header>
    )
}