import { Metadata } from "next"

type Props ={
    params: {
        productId: string
    };
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const title = await new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `product ${title}`
    }
}



export default function ProductDetails({params}: Props){
    return(
        <>
        <h1> Details about Product </h1>
        <h2>Product {params.productId}</h2>
        </>
    )
}