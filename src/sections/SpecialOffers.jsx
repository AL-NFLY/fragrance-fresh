import { discForHer, discForHim, discGold, discZinc, offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-row flex-1 flex-wrap items-center justify-center rounded-md pb-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 shadow-sm hover:border-b-4 border-b-primary duration-500">
        <img src={discForHim} alt="" width={330 } height={325} 
        className="object-contain hover:scale-[1.1] active:scale-[0.95]  duration-300"/>
        <img src={discForHer} alt="" width={330} height={325} 
        className="object-contain hover:scale-[1.1] active:scale-[0.95]  duration-300"  />
        <img src={discGold} alt="" width={200} height={200} 
        className="object-contain hover:scale-[1.2] active:scale-[0.95]  duration-300"  />
        <img src={discZinc} alt="" width={200} height={200} 
        className="object-contain hover:scale-[1.2] active:scale-[0.95]  duration-300"  />

      </div>

      <div className="flex flex-1 flex-col ">
        <h2 className="font-bauerbodoni font-bold text-4xl capitalize lg:max-w-lg ">
          Special Offer 
        </h2>

        <p className="mt-6 md:mt-8 text-lg text-slate-gray dark:text-white-400 lg:max-w-xl font-postgrotesk leading-8">Delve into the world of Maison Francis Kurkdjian with our discovery collections. Explore unique scents with perfume sets which will stir memories and dreams to aspire to the exceptional.</p>
        <p className="mt-4 md:mt-6 text-lg text-slate-gray dark:text-white-400 lg:max-w-xl font-postgrotesk leading-8">These olfactory wardrobes invite you to browse through the scents. A wonderful way of exploring the perfumes of the Maison and a perfect gift to give or receive.</p>

        <div className="mt-10 flex flex-wrap gap-6 max-sm:justify-center">
          <Button 
            label='View Details'
          />
          <Button 
            label="Learn More"
            backgroundColor="bg-white dark:bg-clip-text"
            borderColor="border-slate-gray"
            textColor="text-slate-gray dark:text-white-400"
          />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers