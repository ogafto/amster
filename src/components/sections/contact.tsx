"use client";

import Image from "next/image";
import ContactForm from "../forms/contactForm";

export default function Contact() {
  const contact = [
    {
      label: "Numer telefonu",
      image: "/icons/socials/phone.svg",
      descript: "+48 505 215 810",
    },
    {
      label: "Adres e-mail",
      image: "/icons/socials/email.svg",
      descript: "amstuffeu@proton.me",
    },
    {
      label: "Instagram",
      image: "/icons/socials/ig.svg",
      descript: "amsterwth_",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-[1420px] mx-auto flex flex-col items-center justify-center text-center mt-[100px] px-4 md:px-0 lg:px-8"
    >
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-[24px]">
          Skontaktuj się ze mną
        </p>
        <p className="text-[#848484] text-[16px]">
          Masz pomysł, chcesz zorganizować koncert albo podjąć współpracę napisz
          do mnie!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-[40px] gap-6">
        <ContactForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {contact.map((contact, i) => (
            <div
              key={i}
              className="md:w-[190px] rounded-[15px] p-[2px] bg-gradient-to-b from-[#4C4C4C80] to-[#B2B2B2] duration-300 hover:scale-105"
            >
              <div className="bg-[#030303] rounded-[13px] flex flex-col gap-3 items-center justify-center w-full h-full p-4">
                <div className="w-[64px] h-[64px] bg-[#1B1A1A] rounded-full flex items-center justify-center">
                  <Image
                    src={contact.image}
                    alt="contact_icon"
                    width={32}
                    height={32}
                    draggable="false"
                    className="pointer-events-none"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-[20px] font-semibold text-white">
                    {contact.label}
                  </p>
                  <p className="text-[#848484]">{contact.descript}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
