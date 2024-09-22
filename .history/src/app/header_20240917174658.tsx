import Link from 'next/link'
export default function Header() {
    return (
        <header className="header" style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",    
        }}>
            <Link style={{
                color: "black",
                textDecoration: "none", 
                fontSize: "1.5rem",
                fontWeight: "bold",
            }} href="/about">About</Link>
            <Link href="/blog">Blog</Link>

        </header>
    )
}