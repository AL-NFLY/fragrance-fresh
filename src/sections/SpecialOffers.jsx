import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} 
        className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer! 
        </h2>

        <p className="mt-10 info-text lg:max-w-2xl">Delve into the world of Maison Francis Kurkdjian with our discovery collections. Explore unique scents with perfume sets which will stir memories and dreams to aspire to the exceptional.</p>
        <p className="mt-6 info-text lg:max-w-2xl">These olfactory wardrobes invite you to browse through the scents. A wonderful way of exploring the perfumes of the Maison and a perfect gift to give or receive.</p>

        <div className="mt-10 flex flex-wrap gap-6">
          <Button 
            label='View Details'
          />
          <Button 
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers