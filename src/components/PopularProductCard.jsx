import { useState } from "react"

const PopularProductCard = ({imgURL, imgTopURL, name, consentration, price}) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () =>{
    setIsHovered(true)
  }
  const handleMouseLeave = () =>{
    setIsHovered(false)
  }

  return (
    <div className="flex flex-1 flex-col w-full  hover:scale-[1.05] active:[0.95] duration-300 group">
      <div className="group">
        {/* <img src={imgURL} alt={name} className="w-[280px] h-[280px] bg-gradient-to-r from-slate-200 to-slate-50 rounded-lg group-hover:border-b-4 border-b-primary duration-200 group-hover:hidden" /> */}
        <img 
          src={isHovered ? imgTopURL : imgURL} 
          alt={name} 
          className="w-64 h-64 bg-gradient-to-r from-slate-200 to-slate-50 rounded-lg group-hover:border-b-4 border-b-primary duration-500 ease-in-out" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}  
        />
      </div>
        <div className="px-8 py-2">
          <h3 className="mt-2 text-2xl leading-normal font-bauerbodoni font-semibold ">{name}</h3>
          <p className="text-base leading-normal font-postgrotesk text-slate-gray">{consentration}</p>
          <p className="text-base leading-normal font-postgrotesk text-slate-gray">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard