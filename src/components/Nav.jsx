import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { mfkLogo } from "../assets/images";
import { navLinks } from "../constants";
import { FaSun, FaMoon, FaHamburger, FaEthernet, FaBars } from 'react-icons/fa'

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
    <header className="padding-x py-6 fixed z-50 w-full border-b border-slate-300 dark:border-slate-gray bg-white/95 dark:bg-neutral-900/95">
        <nav className="flex justify-between items-center max-container ">
            <a href="">
                <img src={mfkLogo} 
                alt="Logo"
                width={150} 
                height={39}
                />
            </a>

            <ul className="flex flex-1 justify-end gap-16 max-lg:hidden items-center">
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
        <li className="px-3 py-2 duration-300 border border-slate-300 dark:bg-neutral-800 dark:border-none hover:bg-primary dark:hover:bg-primary rounded-md">
          <a
            href="#"
            className=""
            onClick={toggleDark}
          >
            {isDark ? <FaSun/> : <FaMoon/>}
          </a>
        </li>
      </ul>

            <div className="hidden max-lg:inline-flex max-lg:items-center max-lg:gap-5">
              <a
                href="#"
                className=" "
                onClick={toggleDark}
              >
                {isDark ? <FaSun/> : <FaMoon/>}
              </a>
            {/* <img 
              src={hamburger} 
              alt="hamburger" 
              width={25}
              height={25}
              className="dark:text-white"
              /> */}
                <FaBars className="w-5 h-auto dark:text-white" />
            </div>
        </nav>
    </header>
  )
}

export default Nav