import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";

const menuList = [
  {
    key: 1,
    label: "Home",
    href: "/",
  },
  {
    key: 2,
    label: "Sign In",
    href: "/sign-in",
  },
];

const Navbar = () => {
  return (
    <div className="bg-secondary py-2">
      <div className="flex justify-between items-center w-[95%] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1440px] mx-auto">
        <Image
          className="w-14 md:w-20"
          quality={100}
          src={logo}
          alt="Logo"
          width={100}
          height={100}
        />
        <div>
          {menuList.map((item) => (
            <Link
              className="px-3 font-bold text-text font-serif text-md md:text-xl"
              key={item.key}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
