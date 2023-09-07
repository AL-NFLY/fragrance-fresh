const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  const handleClick = () =>{
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }

  }
    return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg == imgURL.bigShoe
        ? 'border-zinc-500 '
        : 'border-transparent'
    } cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-44 sm:h-44  max-sm:p-4">
            <img 
            src={imgURL.thumbnail} 
            alt="shoe collection"
            width={200}
            height={200}
            className="object-contain"
            />
        </div>

    </div>
  )
}

export default ShoeCard