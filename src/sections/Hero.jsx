import { useState } from "react";

import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1) 
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72] max-sm:leading-[82]">
          <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10 pr-10">
            New Arrivals from 
            </span>
          <br />
          <span className="text-coral-red inline-block mt-3">MFK </span> <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10">Fragrances</span>
          
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-12 sm:max-w-sm">Composed like a fragrance wardrobe, each Maison Francis Kurkdjian collection is like the olfactory signature of an emotion.</p>
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
        src={bigShoeImg} 
        alt="shoe collection"
        width={610}
        height={500}
        className="relative object-contain z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:-[10%] max-sm:px-6">
          {shoes.map((shoe) =>(
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe} 
                changeBigShoeImage ={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg = {bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Hero