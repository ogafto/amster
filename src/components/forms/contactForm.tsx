"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, description }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setDescription("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-auto md:max-w-[940px] bg-gradient-to-b from-[#4C4C4C80] to-[#B2B2B2] p-[2px] rounded-[15px]"
    >
      <div className="bg-[#020202] flex flex-col items-end gap-12 rounded-[15px] p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[#767677]">
                Imię lub nazwa użytkownika *
              </label>
              <input
                placeholder="np. Jan Kowalski"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                className="bg-[#161616] placeholder:text-[#464646] w-full md:w-[430px] px-6 py-2 rounded-[10px] focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[#767677]">Adres e-mail *</label>
              <input
                placeholder="np. kontakt@amster.pl"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#161616] placeholder:text-[#464646] w-full md:w-[430px] px-6 py-2 rounded-[10px] focus:outline-none"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="text-[#767677]">Wiadomość *</label>
            <textarea
              placeholder="Treść"
              required
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#161616] placeholder:text-[#464646] w-full min-h-[100px] px-6 py-2 rounded-[10px] focus:outline-none max-h-[170px]"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`
              rounded-[10px] px-6 py-2 w-fit flex items-center gap-2 duration-300 font-semibold
              ${
                status === "idle"
                  ? "bg-white text-[#020202] hover:bg-[#DEDEDE] cursor-pointer"
                  : ""
              }
              ${
                status === "loading"
                  ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                  : ""
              }
              ${
                status === "success"
                  ? "bg-green-500 text-[#020202] hover:bg-green-600"
                  : ""
              }
              ${
                status === "error"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : ""
              }
            `}
        >
          {status === "loading"
            ? "Wysyłanie..."
            : status === "success"
            ? "Wysłano wiadomość "
            : status === "error"
            ? "Wystąpił błąd"
            : "Wyślij wiadomość"}
          <Image
            src={"/icons/arrows/arrow_tr.svg"}
            alt="arrow_top_right"
            width={24}
            height={24}
          />
        </button>
      </div>
    </form>
  );
}
