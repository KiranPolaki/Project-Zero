"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Navbar() {
  const path = usePathname();

  return (
    <div className="stciky py-4 px-20 flex justify-between items-center bg-secondary text-foreground shadow-sm">
      <div>
        <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
      </div>
      <div>
        <ul className="hidden md:flex gap-5">
          <li
            className={`hover:text-red-600 hover:font-bold transition-all cursor-pointer ${
              path == "/zero" && "text-red-600 font-bold"
            }`}
          >
            Zero
          </li>
          <li
            className={`hover:text-red-600 hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-red-600 font-bold"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-red-600 hover:font-bold transition-all cursor-pointer ${
              path == "/demo" && "text-red-600 font-bold"
            }`}
          >
            Demo
          </li>
          {/* <li
            className={`hover:text-red-600 hover:font-bold transition-all cursor-pointer ${
              path == "/price" && "text-red-600 font-bold"
            }`}
          >
            Price
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
