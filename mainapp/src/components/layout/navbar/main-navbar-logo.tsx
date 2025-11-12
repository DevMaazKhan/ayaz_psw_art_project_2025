"use client";

import * as constants from "@/lib/constant/resources-en";
import { useEffect } from "react";

const NavbarLogo = () => {
  useEffect(() => {
    function onScrollHandler() {
      const main = document.querySelector("#main");

      if (!main) return;

      if (window.scrollY > 140) {
        main.classList.add("header-scrolled");
      } else if (window.scrollY < 140) {
        main.classList.remove("header-scrolled");
      }
    }

    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div className="absolute opacity-0 hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-[.header-scrolled]:animate-fade-in group-[.header-scrolled]:block">
      <h1 className="font-extrabold text-2xl animate-fade-in">
        {constants.HEADER_TITLE}
      </h1>
    </div>
  );
};

export default NavbarLogo;
