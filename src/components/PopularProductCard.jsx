import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-postgrotesk text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-bauerbodoni font-semibold ">{name}</h3>
        <p className="text-xl leading-normal font-postgrotesk font-semibold text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard