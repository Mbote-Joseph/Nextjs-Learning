import { Metadata } from "next"

type Props ={
    params: {
        productId: string
    };
}

export const generateMetadata = ({params}: Props) : Metadata => {
    return {
        title: `product ${params.productId}`
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