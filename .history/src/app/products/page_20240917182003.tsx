'use client'
import { useRouter } from "next/navigation"

export default function ProductList(){
    const router = useRouter();

    return (
        <>
        <button type='button' onClick={()=>router.push('/dashboard')}>Dashboard</button>
        <h1>Product List</h1>
        <p onClick={()=>router.push("./products/1")}>Product 1</p>
        <p onClick={()=>router.push("./products/2")}>Product 2</p>
        <p onClick={()=>router.push("./products/3")}>Product 3</p>
        </>
    )
}