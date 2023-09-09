import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center flex-col gap-6 max-sm:gap-4 border-t border-t-slate-gray ">
      <h3 className="text-4xl font-bauerbodoni font-semibold mt-16">
        Newsletter 
      </h3>
        <span className="text-lg sm:-mt-4 dark:text-white">Sign up to receive our latest news and updates</span>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-lg mt-6 max-sm:mt-2">
        <input 
          type="text"
          placeholder="almer.nfly@gmail.com"
          className="input rounded-lg dark:bg-neutral-900 dark:text-white"
        />

        <div className="flex items-center max-sm:justify-end max-sm:w-full">
        <Button 
          label="Sign Up"
          fullWidth
        />
        </div>
      </div>
    </section>
  )
}

export default Subscribe