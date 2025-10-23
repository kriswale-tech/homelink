import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navbar;

const NavbarDesktop = () => {
  return (
    <nav className="flex items-center justify-between text-ivory">
      {/* logo */}
      <div className="w-48 lg:w-52">
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

const NavbarMobile = () => {
  const [open, setOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpen(false);
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <div className="w-48">
        <Image
          src="/images/logo.png"
          alt="Homelink Logo"
          width={110}
          height={44}
          className="w-full h-auto"
        />
      </div>

      {/* Hamburger Icon */}
      <button
        aria-label="Open Menu"
        className="p-2 rounded-full hover:bg-evergreen/10 focus:outline-none cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Simple Hamburger SVG */}
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
          <rect y="6" width="28" height="2.5" rx="1.25" fill="#EDE6D5" />
          <rect y="13" width="28" height="2.5" rx="1.25" fill="#EDE6D5" />
          <rect y="20" width="28" height="2.5" rx="1.25" fill="#EDE6D5" />
        </svg>
      </button>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/20 flex">
          <div
            className={`bg-white w-64 h-full shadow-lg flex flex-col p-6 gap-8 relative ${
              isAnimating ? "animate-slideOutLeft" : "animate-slideInLeft"
            }`}
          >
            <button
              aria-label="Close Menu"
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-evergreen/10 focus:outline-none"
              onClick={handleClose}
            >
              {/* Close (X) SVG */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="#234036"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="#234036"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-5 mt-8 text-evergreen text-lg">
              <Link href="/" onClick={handleClose}>
                Home
              </Link>
              <Link href="/#" onClick={handleClose}>
                Services
              </Link>
              <Link href="/#" onClick={handleClose}>
                Coverage
              </Link>
              <Link href="/#" onClick={handleClose}>
                Download
              </Link>
            </nav>
            <div className="mt-auto">
              <Button
                variant="primary"
                size="medium"
                className="w-full"
                onClick={handleClose}
              >
                Get a Quote
              </Button>
            </div>
          </div>
          {/* Overlay closes drawer */}
          <div
            className="flex-1"
            onClick={handleClose}
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
      )}
    </nav>
  );
};
