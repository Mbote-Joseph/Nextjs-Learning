export default function ProductReview({params}:{
    params: {reviewId: string}
}){
    return <h1>Product Review {params.reviewId}</h1>
}