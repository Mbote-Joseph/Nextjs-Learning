type Props ={
    params: {
        productId: string
    };
}

export default function ProductDetails({params}: Props){
    return(
        <>
        <h1> Details about Product </h1>
        <h2>Product {params.productId}</h2>
        </>
    )
}