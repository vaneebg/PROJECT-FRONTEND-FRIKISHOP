import { useContext,useEffect  } from "react";
import { ReviewsContext } from "../../../context/ReviewsContext/ReviewsState";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";


const CreateReviews = () => {

    const { reviews,createReviews } = useContext(ReviewsContext)
    const { products } = useContext(ProductsContext)

  return (
    <div>CreateReviews</div>
  )
}

export default CreateReviews