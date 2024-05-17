const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl 
        p-5 rounded-[20px] px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt="icon" width={30} height={30}/>
        </div>
        <h3 className="font-palanquin font-bold text-3xl leading-normal mt-5">{label}</h3>
        <p className="break-words font-montserrat text-lg leading-normal text-slate-gray mt-3">{subtext}</p>
        
    </div>
  )
}

export default ServiceCard