import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import FooterSection from "../components/FooterSection";
import IconCard from "../components/IconCard";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <Footer className="flex max-lg:flex-col gap-5">
      <img src={footerLogo} alt="" width={150} height={46}/>
      <p className="sm:max-w-sm text-base mt-6 font-montserrat">
        Get shoes ready for the new term at your nearest Nike store.
        Find your perfect size in store. Get rewards.
      </p>
      <div className="flex items-center gap-5 mt-8">
        {socialMedia.map((logo) => (
          <div key={logo.src} className="flex justify-center items-center
            w-12 h-12 bg-white rounded-full">
            <IconCard logo={logo} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className="mt-3 text-white-400 
                  font-montserrat text-base leading-normal
                hover:text-slate-gray cursor-pointer">
                  <a href="">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        
        <div className="flex justify-between text-white-400 mt-24
          max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center 
              gap-2 font-montserrat cursor-pointer">
                <img src={copyrightSign} alt="copy right sign" width={20} height={20}
                  className="rounded-full m-0"
                />
                <p>Copyright. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer">
              Terms & Conditions
            </p>
        </div>
    </Footer>
  )
}

export default Footer;