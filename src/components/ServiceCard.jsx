const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-xl shadow-3xl px-10 py-16">
        <div className="w-10 h-10 flex justify-center items-center bg-coral-red rounded-xl">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-4 text-2xl leading-normal font-bold">
            {label}
        </h3>
        <p className="mt-2 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard