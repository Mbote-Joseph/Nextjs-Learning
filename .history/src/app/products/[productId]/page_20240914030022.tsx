export default function ProductDetails({params}: {
    params: {productId: string}
}){
    return(
        <>
        <h1> Details about Product </h1>
        <h2>Product {params.productId}</h2>
        </>
    )
}