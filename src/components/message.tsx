"use client";

import { useEffect } from "react";

export default function Message() {
  useEffect(() => {
    console.log(
      "%c-------------------------------------------------------------",
      "color: gray;"
    );

    console.log(
      "%c🎨 Website designed & created by Motywo",
      "font-size: 24px; font-weight: bold; color: #34D399; background: rgba(52,211,153,0.1); padding: 6px 12px; border-radius: 6px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);"
    );

    console.log(
      "%c💡 Check out our site: %chttps://motywo.pl",
      "font-size: 18px; color: #34D399; font-weight: 500;",
      "font-size: 18px; color: #34D399; font-weight: bold; text-decoration: underline;"
    );

    console.log(
      "%c-------------------------------------------------------------",
      "color: gray;"
    );
  }, []);

  return <></>;
}
