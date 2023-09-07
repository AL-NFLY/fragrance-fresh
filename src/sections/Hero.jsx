import { useState } from "react";

import { arrowRight } from "../assets/icons"
import { bigAqua1 } from "../assets/images";
import Button from "../components/Button"
import { fragrances, statistics } from "../constants"
import AquaCard from "../components/ShoeCard";

const Hero = () => {
  const [bigAquaImg, setbigAquaImg] = useState(bigAqua1) 
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-bauerbodoni  font-bold text-8xl max-sm:text-4xl max-sm:leading-none">
          <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10">
            New Arrivals from 
          </span>
          <span className="text-coral-red xl:inline-block lg:mt-3"> MFK</span> 
          <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10"> Fragrances</span>
        </h1>

        <p className="font-postgrotesk text-slate-gray text-lg leading-8 mt-6 mb-12 sm:max-w-sm">An invitation to travel towards destinations steeped in light, colors and freshness. Freshness plays the leading role in these new creations of the Maison’s olfactory wardrobe.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) =>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin fontbol">{stat.value}</p>
              <p className="leading-6 font-montserrat text-slate-gray">{stat.label}</p> 
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img 
        src={bigAquaImg} 
        alt="aqua cologne forte collection"
        width={250}
        height={500}
        className="relative object-contain z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:-[10%] max-sm:px-6 ">
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