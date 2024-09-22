import { Metadata } from "next"

export const metadata: Metadata = {
    // title: {
        // absolute: "Blog" // The template in layout.tsx will be ignored
    // }
    title: "Blog",  
}

export default function Blog(){
    return(<>
    <h1>My Blogs page</h1>
    </>)
}