"use client";

import Image from "next/image";

export default function BestOfLuck() {
  return (
    <div
      className="
        absolute 
        bottom-[35px] 
        left-[80px] 
        w-[260px] 
        h-[140px] 
        pointer-events-none
      "
    >
      {/* --- WHITE BUBBLE BG --- */}
      <div className="absolute top-[20px] left-[0px] w-[195px]">
        <svg
          width="195"
          height="92"
          viewBox="0 0 195 92"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2273 8.18178L2.86364 18L0.409092 27V40.0909L2.86364 60.1363L4.5 74.4545L10.2273 82.2272L18 85.5L35.5909 83.8636L70.7727 79.7727L109.227 75.6818L132.955 74.4545L148.5 75.6818L157.091 90.8181L161.591 79.7727L164.455 76.9091L181.636 75.6818L191.045 70.7727L192.273 55.2272L193.909 24.9545L192.273 5.31815L187.773 0.409058H179.591H144.409H107.591H70.7727L25.3636 2.04542L10.2273 8.18178Z"
            fill="white"
            stroke="#77C7E3"
            strokeWidth="2"
          />
        </svg>

        {/* --- TEXT INSIDE THE BUBBLE --- */}
        <p
          className="
            absolute 
            top-[30px] 
            left-[28px]
            text-[#15313D]
            font-medium
            text-[20px]
            leading-[24px]
          "
        >
          Best of Luck!
        </p>
      </div>

      {/* --- PAW GIF --- */}
      <img
        src="/paw.gif"
        alt="Paw"
        width={110}
        height={110}
        className="
          absolute 
          left-[135px] 
          top-[0px]
        "
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}
