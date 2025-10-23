"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/index.php", label: "Home" },
  { href: "/about.php", label: "About Us" },
  { href: "/products.php", label: "Products" },
  { href: "/brands.php", label: "Brands" },
  { href: "/gallery.php", label: "Gallery" },
  { href: "/careers.php", label: "Join Our Team" },
  { href: "/contact.php", label: "Contact Us" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const sanitizedPathname = pathname === "/" ? "/index.php" : pathname;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-background transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-[90px] items-center justify-between">
        <Link href="/">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1760985306646.JPG"
            alt="RIM Digital Store Logo"
            width={180}
            height={60}
            priority
            className="h-auto"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = sanitizedPathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-sm font-semibold uppercase text-foreground transition-colors duration-300 hover:text-destructive ${
                      isActive ? "text-destructive" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="text-foreground"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-background transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container flex h-[90px] items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1760985306646.JPG"
              alt="RIM Digital Store Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-foreground"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map(({ href, label }) => {
              const isActive = sanitizedPathname === href;
              return (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-semibold uppercase text-foreground transition-colors duration-300 hover:text-destructive ${
                    isActive ? "text-destructive" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            )})}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;