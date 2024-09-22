import Link from 'next/link';
import { useRouter } from 'next/navigationr';
// import './header.css';

export default function Header() {
    const router = useRouter();
    return (
        <header className="header" style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",    
        }}>
            <a onClick={()=>router.push("./dashboard")}>

            </a>
            <Link style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    marginRight: "2rem",               
            }}
            className="navLink" href="/about">
                About
            </Link>
            <Link style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    marginRight: "2rem",               
            }}
            className="navLink"  href="/blog">Blog</Link>
            <Link style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    marginRight: "2rem",               
            }}
            className="navLink"  href="/contact">
                Contact
            </Link>
            <Link style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    marginRight: "2rem",               
            }}
            className="navLink"  href="/products">
                Products
            </Link>



        </header>
    )
}