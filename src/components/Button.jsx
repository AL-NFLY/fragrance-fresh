const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-6 py-3 border text-lg leading-none font-montserrat bg-coral-red rounded-md text-white">
        {label}
        {iconURL && <img 
        src={iconURL} 
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button