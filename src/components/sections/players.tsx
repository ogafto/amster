"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Players() {
  const players = [
    {
      image: "/players/Scooby_doo93V2.jpg",
      label: "Scoobie Doo",
      url: "https://www.instagram.com/scooby_doo93v2/",
    },
    {
      image: "/players/Socod3in3.jpg",
      label: "Socod3in3",
      url: "https://www.instagram.com/socod3in3/",
    },
    {
      image: "/players/exoticexotic.jpg",
      label: "Exoticgod2",
      url: "https://www.instagram.com/exoticgod2/",
    },
    {
      image: "/players/pepe.jpg",
      label: "bigpepepl",
      url: "https://www.instagram.com/bigpepepl/",
    },
    {
      image: "/players/gustaf.jpg",
      label: "gustaff.exo",
      url: "https://www.instagram.com/gustaff.exo/",
    },
    {
      image: "/players/aqua.jpg",
      label: "aqua_worldwide420",
      url: "https://www.instagram.com/aqua_worldwide420/",
    },
    {
      image: "/players/zalze.jpg",
      label: "zalze1312",
      url: "https://www.instagram.com/zalze1312/",
    },
    {
      image: "/players/dokubka.jpg",
      label: "dokubkka",
      url: "https://www.instagram.com/dokubkka/",
    },
    {
      image: "/players/dispatch.jpg",
      label: "district.dispatch",
      url: "https://www.instagram.com/district.dispatch/",
    },
    {
      image: "/players/lafamiliaaa.jpg",
      label: "Lafamilia_drop",
      url: "https://www.instagram.com/lafamilia_drop/",
    },
    {
      image: "/players/greenbrothers.jpg",
      label: "Green Brothers",
      url: "https://www.instagram.com/zieloniwtemacie01/",
    },
    {
      image: "/players/ssplug.jpg",
      label: "SSplug83",
      url: "https://www.instagram.com/ssplug83/",
    },
    {
      image: "/players/marocc.jpg",
      label: "Maroccinopl",
      url: "https://www.instagram.com/maroccinopl/",
    },
    {
      image: "/players/papaj.jpg",
      label: "Maroccinopl",
      url: "https://www.instagram.com/papaj_topshelf2.0/",
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
                  className="pointer-events-none rounded-full object-cover"
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
