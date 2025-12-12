"use client"
import { DM_Serif_Display } from "next/font/google";

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
import { useEffect, useState } from "react"

const DIGIT_HEIGHT = 162.63 // exact Figma height

type RollingDigitProps = {
  digit: number
  delay?: number
}

export default function RollingDigit({ digit, delay = 0 }: RollingDigitProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const target = -digit * DIGIT_HEIGHT

    const t = setTimeout(() => {
      setOffset(target)
    }, delay)

    return () => clearTimeout(t)
  }, [digit, delay])

  return (
    <div
      className="
        overflow-hidden
        h-[162.63px]
        w-[110px]
      "
    >
      <div
        className={`
          ${dmSerif.className}
          not-italic
          text-[162.63px]
          leading-[1]
          tracking-[-0.02em]
          text-[#266580]
          font-normal
          transition-transform duration-[1000ms] ease-out
        `}
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ height: `${DIGIT_HEIGHT}px` }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}
