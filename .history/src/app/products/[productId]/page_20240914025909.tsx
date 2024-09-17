export default function ProductDetails({params}){
    return(
        <>
        <h1> Details about Product </h1>
        <h2>Product {params.productId}</h2>
        </>
    )
}