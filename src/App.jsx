import { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, Subscribe, Footer } from "./sections";
import Nav from "./components/Nav";

const App = () =>(
  <main className="relative dark:bg-neutral-900 dark:text-white">
    <Nav />

    <section className="xl:padding-l wide:padding-r sm:padding-b ">
      <Hero />
    </section>
    <section className="padding ">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 bg-gradient-to-t from-slate-200 via-slate-50 to-slate-200 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 ">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;