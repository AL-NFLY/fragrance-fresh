import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { mfkLogo } from "../assets/images";
import { navLinks } from "../constants";


const Nav = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleDark = () =>{
    setIsDark(!isDark)
  }
  document.body.classList.toggle('dark', !isDark)

  useEffect(()=>{
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <header className="padding-x py-6 absolute z-10 w-full border-b border-slate-300 dark:border-slate-gray bg-white dark:bg-neutral-900 bg-opacity-75">
        <nav className="flex justify-between items-center max-container ">
            <a href="">
                <img src={mfkLogo} 
                alt="Logo"
                width={150} 
                height={39}
                />
            </a>

            <ul className="flex flex-1 justify-end gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-postgrotesk leading-none text-base text-slate-gray dark:text-white-400 hover:text-primary dark:hover:text-primary  hover:underline hover:underline-offset-4 duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
        {/* Insert the dark mode toggle anchor tag here */}
        <li>
          <a
            href="#"
            className="font-postgrotesk leading-none text-base text-slate-gray hover:text-primary hover:underline hover:underline-offset-4 duration-300"
            onClick={toggleDark}
          >
            Toggle Dark Mode
          </a>
        </li>
      </ul>

            <div className="hidden max-lg:block">
              <img 
              src={hamburger} 
              alt="hamburger" 
              width={25}
              height={25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav