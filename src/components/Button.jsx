const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button 
      className={`flex justify-center items-center gap-2 px-6 py-3 border text-lg rounded-md leading-none font-montserrat 
        ${
          backgroundColor
            ? `${backgroundColor} ${borderColor} ${textColor} `
            : 'bg-coral-red border-coral-red text-white'
        } ${fullWidth && 'w-full'}
      `}>

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