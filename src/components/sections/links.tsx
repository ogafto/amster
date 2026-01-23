"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Links() {
  const links = [
    {
      label: "DR-JOINT.PL",
      descript:
        "Sklep konopny z szerokim wyborem legalnych produktów CBD i CBG. Oferuje olejki, susz, pre-rollsy, żelki, shoty oraz akcesoria do palenia. Wszystkie produkty są certyfikowane i bezpieczne w użytkowaniu.",
      url: "https://dr-joint.pl/",
      imgurl: "/images/dr-joint.png",
    },
    {
      label: "TIWSHOP.PL",
      descript:
        "Oficjalny sklep marki TiW, oferujący odzież streetwear inspirowaną kulturą hip-hop. W asortymencie znajdziesz bluzy, koszulki, spodnie i akcesoria. Wszystkie produkty projektowane i szyte są w Polsce.",
      url: "https://tiwshop.pl/#mailpoet-popup",
      imgurl: "/images/tiw-shop.png",
    },
    {
      label: "GROWSHOP71.PL",
      descript:
        "Miejsce, gdzie znajdziesz wszystko, czego potrzebujesz do efektywnej i ekologicznej uprawy roślin. Oferujemy najwyższej jakości sprzęt i akcesoria dla początkujących oraz zaawansowanych ogrodników.",
      url: "https://growshop71.pl/",
      imgurl: "/images/grow-shop.png",
    },
    {
      label: "OLAVOGA.PL",
      descript:
        "Sklep Olavoga Styl Dla Ciebie — U nas znajdziesz szeroki wybór ubrań, które idealnie uzupełnią Twoją garderobę. Modne komplety O'la Voga idealne na co dzień i specjalne okazje. Sklep Partnerski Oryginał.",
      url: "https://www.olavoga.pl/",
      imgurl: "/images/olavoga.png",
    },
  ];
  return (
    <section
      id="recommendations"
      className="max-w-[1420px] mx-auto flex flex-col items-center justify-center text-center mt-[100px] px-4 md:px-0 lg:px-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-[24px]">
          Miejsca warte kliknięcia
        </h2>
        <p className="text-[#848484] text-[16px]">
          To nie reklamy, to moje własne polecajki. Warto zajrzeć.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[40px]">
        {links.map((link, i) => (
          <motion.div
            key={`${link.label}-${i}`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-[2px] rounded-[15px] bg-gradient-to-b from-[#4C4C4C80] to-[#B2B2B2] group"
          >
            <div className="relative w-full min-h-[340px] rounded-[12px] overflow-hidden flex flex-col">
              <Image
                src={link.imgurl}
                alt=""
                fill
                draggable="false"
                className="object-cover pointer-events-none absolute inset-0 z-0 duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/75 z-5"></div>
              <div className="relative z-10 flex flex-col items-start text-left gap-3 p-6 md:px-12 md:py-16 flex-1">
                <div className="flex flex-col items-start text-left gap-3">
                  <p className="text-[24px] font-bold">{link.label}</p>
                  <p className="text-[#848484] max-w-[600px] font-semibold text-[16px]">
                    {link.descript}
                  </p>
                </div>
                <Link
                  href={link.url}
                  target="q_blank"
                  className="text-[#020202] bg-white flex items-center gap-3 px-6 py-2 rounded-[10px] duration-300 hover:bg-[#DEDEDE] font-semibold mt-auto"
                >
                  Wejdź teraz
                  <Image
                    src={"icons/arrows/arrow_tr.svg"}
                    alt="arrow_top_right"
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
