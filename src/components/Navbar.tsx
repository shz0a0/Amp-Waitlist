import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
              <Image
                src={logoImage}
                alt="Saas logo"
                className="h-12 w-40 relative"
              />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="text-white sm:flex gap-6 items-center hidden">
            
            <a
              href="https://www.linkedin.com/company/falconx-ai/"
              className="text-opacity-60 text-white hover:opacity-100 transition"
            >
              Linkedin
            </a>
            <a
              href="mailto:falconx.ai@protonmail.com"
              className="text-opacity-60 text-white hover:opacity-100 transition"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
