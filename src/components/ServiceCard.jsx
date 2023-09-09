const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full  shadow-3xl px-10 py-16 bg-white dark:bg-neutral-800 bg-opacity-50 dark:border-b-8 border-primary rounded-2xl  ">
        <div className="w-10 h-10 flex justify-center items-center bg-primary rounded-xl">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-4 text-2xl leading-normal font-bold font-bauerbodoni">
            {label}
        </h3>
        <p className="mt-2 break-words font-postgrotesk text-lg leading-normal text-slate-gray dark:text-white-400">
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard