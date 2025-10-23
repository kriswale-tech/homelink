import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-ivory">
      {/* logo */}
      <div className="w-48 2xl:w-52">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="w-full h-auto"
          width={144}
          height={144}
        />
      </div>

      <div className="flex items-center gap-6">
        {/* navigation links */}
        <div className="flex items-center gap-4 ">
          <Link href="/">Home</Link>
          <Link href="/#">Services</Link>
          <Link href="/#">Coverage</Link>
          <Link href="/#">Download </Link>
        </div>
        {/* contact button */}
        <div className="">
          <Button>Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
