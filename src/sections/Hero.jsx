import { useState } from "react";

import { arrowRight } from "../assets/icons"
import { bigAqua1 } from "../assets/images";
import Button from "../components/Button"
import { fragrances, statistics } from "../constants"
import AquaCard from "../components/AquaCard";

const Hero = () => {
  const [bigAquaImg, setbigAquaImg] = useState(bigAqua1) 
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-postgrotesk text-primary max-sm:mt-6">Our Summer Collection</p>
        <h1 className="mt-8 font-bauerbodoni  font-bold text-8xl max-sm:text-4xl">
          <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10">New Summer</span>
          <span className="text-primary xl:inline-block lg:mt-3"> MFK </span> 
          <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10"> Arrivals</span>
          {/* <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10"> Fragrances</span> */}
        </h1>

        <p className="font-postgrotesk text-slate-gray text-lg leading-8 mt-6 sm:max-w-lg">An invitation to travel towards destinations steeped in light, colors and freshness. Freshness plays the leading role in these new creations of the Maison’s olfactory wardrobe.</p>
        <div className="mt-12">
        <Button label="Shop now" iconURL={arrowRight} />
        </div>

        <div className="flex justify-start max-sm:justify-between items-start flex-wrap w-full mt-20 max-sm:mt-10 gap-16 max-sm:gap-8">
          {statistics.map((stat) =>(
            <div key={stat.label}>
              <p className="text-4xl max-sm:text-3xl font-postgrotesk font-bold">{stat.value}</p>
              <p className="leading-6 font-postgrotesk text-slate-gray">{stat.label}</p> 
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center"> */}
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 max-sm:mt-10 bg-gradient-to-br from-slate-300 via-amber-50 to-slate-300 dark:from-neutral-900 dark:via-neutral-900 dark:to-primary rounded-sm sm:ml-12 ">
        <img 
        src={bigAquaImg} 
        alt="aqua cologne forte collection"
        width={250}
        height={500}
        className="relative object-contain z-10 max-sm:w-52 max-sm:pb-12"
        />

        <div className="flex sm:gap-12 gap-4 absolute bottom-[5%] max-sm:bottom-8 max-sm:px-6  ">
          {fragrances.map((aqua) =>(
            <div key={aqua} className="hover:scale-[1.05] active:scale-[0.95] duration-300">
              <AquaCard
                imgURL={aqua} 
                changeBigAquaImage ={(aqua) => setbigAquaImg(aqua)}
                bigAquaImg={bigAquaImg}
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Hero