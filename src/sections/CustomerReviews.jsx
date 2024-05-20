import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
        <p className="text-center max-w-lg info-text mt-4 m-auto">
          Hear genuine stories from our customers about their exceptional
          experiences with us.
        </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CustomerCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;