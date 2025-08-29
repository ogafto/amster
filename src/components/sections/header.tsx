"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const socials = [
    {
      label: "Instagram",
      image: "/icons/socials/ig.svg",
      url: "https://www.instagram.com/amsterwth_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "6.9k",
      width: 26,
      height: 26,
    },
    {
      label: "YouTube",
      image: "/icons/socials/yt.svg",
      url: "https://www.youtube.com/channel/UCSxCfwkfZ2ob6M_Dc2EK0bw",
      followers: "6.25k",
      width: 32,
      height: 32,
    },
    {
      label: "Spotify",
      image: "/icons/socials/spotify.svg",
      url: "https://open.spotify.com/artist/09yDJTGFIvWYKdU6apskTP?si=tDTJsZtFT8iOEqgsmSMQtQ",
      followers: "201.6k",
      width: 27,
      height: 27,
    },
  ];

  return (
    <section className="max-w-[1420px] mx-auto flex flex-col items-center justify-center gap-4 mt-[50px] text-center  px-4 md:px-0 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[48px] md:text-[128px] lg:text-[96px] font-dublin"
      >
        AMSTUFF
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#848484] text-[14px] md:text-[20px] max-w-[950px]"
      >
        Lorem ipsum dolor sit amet consectetur. Tellus leo netus tellus risus
        leo sagittis aliquam. In sit euismod eu vitae nulla et feugiat amet
        pellentesque.
      </motion.p>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[700px] mt-[30px] gap-6">
        {socials.map((social, i) => (
          <motion.a
            href={social.url}
            target="_blank"
            key={`${social.label}-${i}`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card duration-300 hover:scale-105">
              <div className="text-white p-6 relative z-10 flex flex-col gap-2 items-center justify-center">
                <div className="w-[64px] h-[64px] bg-[#1B1A1A] rounded-full flex items-center justify-center">
                  <Image
                    src={social.image}
                    alt={social.label}
                    width={social.width}
                    height={social.height}
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[20px] font-medium">{social.label}</p>
                  <p className="text-[#818181]">{social.followers}</p>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <Link href={"/#recommendations"}>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          src={"/icons/arrows/arrow_down.svg"}
          alt="arrow down"
          width={32}
          height={32}
          draggable="false"
          className="mt-[30px]"
        />
      </Link>
    </section>
  );
}
