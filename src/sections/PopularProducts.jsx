import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-10">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Like an elegant fashion accessory, a Maison Francis Kurdjian perfume for men complements his style with olfactory perfection to express the nuances of his personality and offer a glimpse into the depth of his soul. Reconnect with your inner self with our popular collections.</p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 sm:gap-4 gap-12">
          {products.map((product) =>(
            <PopularProductCard key={product.name} {...product}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default PopularProducts