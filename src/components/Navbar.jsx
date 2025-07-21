import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) {
      if (currentScrollY < lastScrollY) {
        setActive(true);  // Scroll ke ATAS → MUNCULKAN navbar
      } else {
        setActive(false); // Scroll ke BAWAH → SEMBUNYIKAN navbar
      }
    } else {
      setActive(true); // Saat dekat atas halaman, tampilkan navbar
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div  className={`navbar fixed py-2 flex items-center justify-evenly z-50 w-full backdrop-blur-md transition-transform duration-300 ${active ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="logo">
        <h1 className="text-3xl font-bold bg-black p-1 md:bg-transparent md:text-zinc-100">0:00</h1>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li>
          <a href="#void" className="group relative inline-block text-base font-medium text-white hover:text-amber-500">
            Void <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#senandika" className="group relative inline-block text-base font-medium text-white hover:text-amber-500">
            Senandika <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#ekspresi" className="group relative inline-block text-base font-medium text-white hover:text-amber-500">
            Ekspresi <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#ruang" className="group relative inline-block text-base font-medium text-white hover:text-amber-500">
            Ruang <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
      </ul>
      <div>
          <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
