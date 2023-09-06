import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center flex-col gap-10">
      <h3 className="text-4xl font-palanquin font-bold leading-[68px]">
        Sign up for 
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded">
        <input 
          type="text"
          placeholder="almer.nfly@gmail.com"
          className="input"
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