import { star } from "../assets/icons"

const CustomerCard = ({ imgURL, customerName, rating, feedback}) => {
  return (
    
    <div className="flex flex-col justify-center items-center">
    <img src={imgURL} alt="Picture of a customer" width={120} height={120}
    className="rounded-full object-contain"/>
    <p className="mt-6 max-w-sm text-center info-text">
        {feedback}
    </p>
    <div className="flex justify-center items-center gap-2 mt-3">
        <img src={star} width={24} height={24} alt="Rating from customer" 
        className="object-contain m-0"
        />
    <p className="font-montserrat text-xl text-slate-gray leading-normal">({rating})</p>
    </div>
    <h4 className="font-bold text-xl mt-1">{customerName}</h4>
  </div>
  
  )
}

export default CustomerCard