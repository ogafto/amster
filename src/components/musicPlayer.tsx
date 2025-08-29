"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [hovered, setHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute bottom-16 mb-3"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-full rotate-[-90deg] accent-white cursor-pointer bg-black"
          />
        </div>

        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full duration-300 cursor-pointer shadow-[15px]"
        >
          <Image
            src={isPlaying ? "/icons/volume_max.svg" : "/icons/volume_off.svg"}
            alt="volume off"
            width={24}
            height={24}
          ></Image>
        </button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mpeg" />
        Twoja przeglądarka nie wspiera odtwarzania audio.
      </audio>
    </div>
  );
}
