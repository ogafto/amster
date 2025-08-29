"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Strona główna", href: "/" },
    { name: "Polecenia", href: "/#recommendations" },
    { name: "Playerzy", href: "/#players" },
    { name: "Kontakt", href: "/#contact" },
  ];

  const socials = [
    {
      imageUrl: "/icons/socials/ig.svg",
      href: "https://www.instagram.com/amsterwth_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      width: 27,
      height: 27,
    },
    {
      imageUrl: "/icons/socials/yt.svg",
      href: "https://www.youtube.com/channel/UCSxCfwkfZ2ob6M_Dc2EK0bw",
      width: 32,
      height: 32,
    },
    {
      imageUrl: "/icons/socials/spotify.svg",
      href: "https://open.spotify.com/artist/09yDJTGFIvWYKdU6apskTP?si=tDTJsZtFT8iOEqgsmSMQtQ",
      width: 27,
      height: 27,
    },
  ];

  return (
    <>
      <section className="w-full max-w-[1420px] mx-auto py-10 flex items-center justify-between  px-4 md:px-0 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={64}
            height={64}
            draggable="false"
            className="w-[64px] h-[64px] rounded-full bg-[#868686] duration-300 hover:scale-105"
          />
          <p className="text-[20px] text-white font-medium font-dublin">
            AMSTUFF.EU
          </p>
        </div>
        <button onClick={toggleMenu}>
          <Image
            src={isOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
            alt="navbar menu"
            width={36}
            height={24}
            draggable="false"
            className="duration-300 hover:scale-105 cursor-pointer"
          />
        </button>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            className="md:w-1/2 h-screen fixed top-0 left-0 bg-[#020202]/90 backdrop-blur-[30px] z-100 p-10 md:py-10"
          >
            <div className="flex flex-col justify-between md:ml-60 h-full">
              <div className="flex items-center gap-3">
                <Image
                  src={"/logo.svg"}
                  alt="logo"
                  width={64}
                  height={64}
                  draggable="false"
                  className="w-[64px] h-[64px] rounded-full bg-[#868686] duration-300 hover:scale-105"
                />
                <p className="text-[20px] text-white font-medium font-dublin">
                  AMSTUFF.EU
                </p>
              </div>
              <div className="flex flex-col gap-6 text-[32px] font-semibold">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="duration-300 hover:text-white/80"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socials.map((social, i) => (
                  <Link href={social.href} key={i} target="_blank">
                    <Image
                      src={social.imageUrl}
                      alt={social.href}
                      width={social.width}
                      height={social.height}
                      className="w-[26px] h-[25px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
