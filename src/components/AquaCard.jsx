const AquaCard = ({imgURL, changeBigAquaImage, bigAquaImg}) => {
  const handleClick = () =>{
    if(bigAquaImg !== imgURL.bigAqua){
        changeBigAquaImage(imgURL.bigAqua)
    }

  }
    return (
    <div className={`border-2 rounded-lg
    ${bigAquaImg == imgURL.bigAqua
        ? 'border-l-slate-400 border-b-slate-400 border-slate-300 '
        : 'border-transparent'
    } cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-neutral-900  dark:via-neutral-900 dark:to-neutral-800 rounded-lg bg-center bg-cover sm:w-44 sm:h-44">
            <img 
            src={imgURL.thumbnail} 
            alt="shoe collection"
            width={200}
            height={200}
            className="object-fill"
            />
        </div>

    </div>
  )
}

export default AquaCard