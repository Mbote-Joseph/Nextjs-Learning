import { notFound } from "next/navigation";

export default function ProductReview({params}:{
    params: {
        productId: string;
        reviewId: string;
    }
}){
    if(parseInt(params.reviewId) > 1000){
        return notFound
    }
    return <h1>Review {params.reviewId} for Product {params.productId}</h1>
}