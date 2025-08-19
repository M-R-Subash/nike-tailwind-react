import { copyrightSign } from "../assets/assets/icons";
import { footerLogo } from "../assets/assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46} />
          </a>
          <p className="mt-6 text-sm text-white-400 font-montserrat sm:max-w-sm leading-7">
            {" "}
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Reward
          </p>
          <div className="flex items-center gap-4 mt-6">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-8 h-8 bg-white hover:bg-slate-gray transition-all rounded-full">
                <img src={icon.src} alt={icon.alt} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap ">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-lg leading-normal font-medium mb-6 cursor-pointer">
                {section.title}
              </h4>
              <ul className="text-white">
                {section.links.map((link) => (
                  <li
                    className="mt-1 font-montserrat text-sm leading-normal hover:text-slate-gray cursor-pointer transition-all"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:items-center mt-10 max-sm:flex-col text-white">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyRightSign" width={15} height={15} className="rounded-full m-0" />
          <p className="text-sm " >Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer text-sm hover:text-slate-gray transition-all">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
