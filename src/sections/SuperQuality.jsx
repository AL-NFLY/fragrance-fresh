import { heroShowerGel, shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-8 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-bauerbodoni font-bold text-4xl capitalize lg:max-w-lg">
            Our Philosophy
          </h2>
          <div className="font-postgrotesk text-slate-gray leading-8 text-lg lg:max-w-2xl">
            <p className="mt-8">Composed like a fragrance wardrobe, each Maison Francis Kurkdjian collection is like the olfactory signature of an emotion. The Maison is guided by enchanting, yet precise codes: purity, sophistication, timelessness and the boldness of a neo-classicism .</p>
            <p className="mt-6">Exceptional know-how come together and echo off each other. They are continually writing a number of sensory adventures, in which perfume is, naturally, the hero.</p>
            <p className="mt-6">Our dedication towards reaching that olfactory scent is paramount</p>
          </div>
          <div className="mt-10">
            <Button label="View Details" />
          </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={heroShowerGel} alt="shoe8" width={570} height={522} className="object-contain rounded-sm shadow-md"/>
      </div>

    </section>
  )
}

export default SuperQuality