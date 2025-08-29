"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Players() {
  const players = [
    {
      image: "/players/1.svg",
      label: "Scoobie doo",
      url: "https://www.instagram.com/scooby_doo93v2/",
    },
    {
      image: "/players/2.svg",
      label: "HAVANA",
      url: "https://www.instagram.com/havana_pl/",
    },
    {
      image: "/players/3.svg",
      label: "LAFAMILIA.EU",
      url: "https://www.instagram.com/lafamilia.eu/",
    },
    {
      image: "/players/4.svg",
      label: "JULIAN PLVG",
      url: "https://www.instagram.com/julian.brand_/",
    },
    {
      image: "/players/5.svg",
      label: "HOKUS POCUS",
      url: "https://www.instagram.com/_hokuspocus_/",
    },
    {
      image: "/players/6.svg",
      label: "TREVORPHILIPSPSG2.0",
      url: "https://www.instagram.com/trevorphilipsg2.0/",
    },
    {
      image: "/players/7.svg",
      label: "KACPERVAPESTORE",
      url: "https://www.instagram.com/kacpervapestore/",
    },
  ];
  return (
    <section
      id="players"
      className="max-w-[1420px] mx-auto flex flex-col items-center justify-center text-center mt-[100px] px-4 md:px-0 lg:px-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-[24px]">Playerzy</h2>
        <p className="text-[#848484] text-[16px]">
          Polecajki które warto zobaczyć
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[40px]">
        {players.map((player, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-[15px] p-[2px] bg-gradient-to-b from-[#4C4C4C80] to-[#B2B2B2] duration-300 hover:scale-105">
              <div className="bg-[#030303] rounded-[13px] flex flex-col gap-3 items-center justify-center w-full h-full p-4">
                <Image
                  src={player.image}
                  alt="player_icon"
                  width={64}
                  height={64}
                  draggable="false"
                  className="pointer-events-none"
                />
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-[20px] font-semibold text-white">
                    {player.label}
                  </p>
                </div>
                <Link
                  href={player.url}
                  target="_blank"
                  className="flex items-center gap-2 bg-white duration-300 hover:bg-[#DEDEDE] text-[#020202] py-2 px-6 rounded-[10px]"
                >
                  <p>Przenieś</p>
                  <Image
                    src={"/icons/arrows/arrow_tr.svg"}
                    alt=""
                    width={24}
                    height={24}
                    draggable="false"
                    className="pointer-events-none"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
