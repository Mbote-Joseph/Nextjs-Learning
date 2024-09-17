export default function ProductReview({params}:{
    params: {productReviewId: string}
}){
    return <h1>Product Review - {params.productReviewId}</h1>
}