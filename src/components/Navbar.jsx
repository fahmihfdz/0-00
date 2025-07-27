import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader"; // Import Preloader

const Navbar = () => {
  const [loading, setLoading] = useState(true); // Menyimpan state loading
  const [active, setActive] = useState(true); // Navbar tampil atau tidak
  const lastScrollY = useRef(0); // Untuk menyimpan posisi scroll terakhir

  useEffect(() => {
    // Simulasikan loading dengan setTimeout
    setTimeout(() => {
      setLoading(false); // Setelah 2 detik, selesai loading
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150) {
        if (currentScrollY < lastScrollY.current) {
          setActive(true); // Jika scroll ke atas, navbar muncul
        } else {
          setActive(false); // Jika scroll ke bawah, navbar sembunyi
        }
      } else {
        setActive(true); // Jika scroll mendekati atas, navbar tetap muncul
      }

      lastScrollY.current = currentScrollY; // Menyimpan nilai scroll terakhir
    };

    if (!loading) {
      window.addEventListener("scroll", handleScroll); // Pasang event scroll setelah loading selesai
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); // Bersihkan event listener saat komponen di-unmount
    };
  }, [loading]); // Efek ini hanya dijalankan setelah loading selesai

  if (loading) {
    return <Preloader />; // Tampilkan spinner loading selama loading
  }

  return (
    <div  className={`navbar fixed py-2 flex items-center justify-evenly z-50 w-full backdrop-blur-md transition-transform duration-300 ${active ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="logo flex-grow">
        <h1 className="text-3xl font-bold bg-black p-1 md:bg-transparent md:text-zinc-100 hidden sm:block ml-3">0:00</h1>
      </div>
      <ul className={`menu flex items-center justify-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-black/40 w-full backdrop-blur-md p-4  md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"} `}>
        <li>
          <a href="#void" className="group relative inline-block text-base font-medium text-white hover:text-amber-600">
            Void <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-600 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#senandika" className="group relative inline-block text-base font-medium text-white hover:text-amber-600">
            Senandika <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-600 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#ekspresi" className="group relative inline-block text-base font-medium text-white hover:text-amber-600">
            Ekspresi <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-600 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
        <li>
          <a href="#ruang" className="group relative inline-block text-base font-medium text-white hover:text-amber-600">
            Ruang <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-600 
               transition-all duration-500 origin-center 
               group-hover:w-full group-hover:left-0 group-hover:rotate-180"></span>
          </a>
        </li>
      </ul>
      <div className="hidden sm:block mr-3 py-2 px-5 bg-amber-600 text-white rounded-lg hover:bg-zinc-800 border border-amber-600 transition cursor-pointer hover:text-amber-600">
          <a className="cursor-pointer">
            <i class="ri-login-box-line mr-2"></i>Login
          </a>
      </div>
    </div>
  );
};

export default Navbar;
