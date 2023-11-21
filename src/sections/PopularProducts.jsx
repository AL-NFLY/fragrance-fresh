import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container pt-12 md:pt-28"
    >
      <div className="flex flex-col max-sm:items-center">
        <h2 className="text-4xl font-bauerbodoni font-bold">Our <span className="">Popular</span> Products</h2>
        <p className="lg:max-w-2xl mt-6 md:mt-8 font-postgrotesk text-slate-gray dark:text-white-400 text-lg leading-8">Maison Francis Kurdjian perfume complements his style with olfactory perfection to express the nuances of his personality and offer a glimpse into the depth of his soul. Reconnect with your inner self with our popular collections.</p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 md:mt-16 gap-4 md:gap-12">
          {products.map((product) =>(
            <PopularProductCard key={product.name} {...product}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default PopularProducts