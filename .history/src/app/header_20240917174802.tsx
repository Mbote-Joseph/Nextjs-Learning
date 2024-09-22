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
                fontSize: "1rem",
                
            }} href="/about">About</Link>
            <Link style={{
                color: "black",
                textDecoration: "none",
                fontSize: "1rem",
            }}
             href="/blog">Blog</Link>

        </header>
    )
}