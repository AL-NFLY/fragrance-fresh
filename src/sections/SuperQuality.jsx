import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-8 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
            We Provide You 
            <span className="text-coral-red"> Super</span>              
            <span className="text-coral-red"> Quality</span>              
            <span className="xl:bg-clip-text xl:whitespace-nowrap relative z-10"> Fragrances</span>
          </h2>

          <p className="mt-10 lg:max-w-lg info-text">Composed like a fragrance wardrobe, each Maison Francis Kurkdjian collection is like the olfactory signature of an emotion.</p>
          <p className="mt-6 info-text">Our dedication towards reaching that olfactory scent is paramount</p>
          <div className="mt-10">
            <Button label="View Details" />
          </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality