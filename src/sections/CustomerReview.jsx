import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <div className="max-container">
      <h3 className="font-bold text-4xl text-center font-palanquin">
        What Our<span className="text-coral-red"> Customers</span> say ?
      </h3>
      <p className="m-auto text-center info-text mt-4 max-w-lg ">
        Here genuine stories from out satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex-1 justify-evenly items-center max-lg:flex-col flex gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
