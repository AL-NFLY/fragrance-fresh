import { copyrightSign } from "../assets/icons"
import { footerLogo, mfkLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap max-lg:flex-col justify-between items-start gap-20 text-coral-red">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={mfkLogo} alt="footer logo" width={200} height={50}  />
          </a>

          <p className="mt-6 text-base font-postgrotesk leading-6 text-white-400 sm:max-w-sm">
            Order now while still in stock. <br /> Every order above $250 will receive free 5ml sample of Maison Francis Kurkdjian. 
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-white hover:bg-primary from-cyan-300 to-red-300">
                <a href={icon.link} target="_blank">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>


        </div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section) =>(
            <div key={section}>
              <h4 className="text-primary font-bauerbodoni text-2xl leading-normal font-medium">{section.title}</h4>
              <ul className="mt-4">
                {section.links.map((link) =>(
                  <li 
                    className="mt-2 text-slate-gray cursor-pointer font-postgrotesk"
                    key={link.name}
                    >
                    <a href={link.link} className="active`:text-white">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-postgrotesk cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-postgrotesk cursor-pointer">Terms & Conditions</p>  
      </div>

    </footer>
  )
}

export default Footer