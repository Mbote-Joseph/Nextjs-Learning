import { useRouter } from "next/navigation"

export default function ProductList(){
    const router = useRouter();

    return (
        <>
        <button onClick={()=>router.push('/dashboard')}>Dashboard</button>
        <h1>Product List</h1>
        <p>Product 1</p>
        <p>Product 2</p>
        <p>Product 3</p>
        </>
    )
}