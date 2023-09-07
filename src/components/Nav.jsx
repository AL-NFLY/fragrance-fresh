import { hamburger } from "../assets/icons";
import { mfkLogo } from "../assets/images";
import { navLinks } from "../constants";


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full border-b bgwhi">
        <nav className="flex justify-between items-center max-container">
            <a href="">
                <img src={mfkLogo} 
                alt="Logo"
                width={150} 
                height={39}
                />
            </a>

            <ul className="flex flex-1 justify-center gap-16 max-lg:hidden">
                {navLinks.map((item) =>(
                    <li key={item.label}>
                      <a 
                      href={item.href}
                      className="font-montserrat leading-none text-lg text-slate-gray"
                      >
                        {item.label}
                      </a>
                    </li>
                ))}
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