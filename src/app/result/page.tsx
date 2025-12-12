"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { DM_Serif_Display } from "next/font/google";
import RollingDigit from "../components/RollingDigit";
import { Manrope } from "next/font/google"

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function ResultPage() {
  const params = useSearchParams()
  const router = useRouter()

  const raw = params?.get("score") ?? "0"
  const numeric = Number(String(raw).replace(/[^\d.-]/g, "")) || 0
  const finalScore = Math.min(100, Math.max(0, Math.round(numeric)))

  const [displayScore, setDisplayScore] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    startRef.current = null
    setDisplayScore(0)

    const duration = 1400
    const startValue = 0
    const endValue = finalScore

    function step(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp
      const progress = Math.min(1, (timestamp - startRef.current) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(startValue + (endValue - startValue) * eased)

      setDisplayScore(current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        setDisplayScore(endValue)
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [finalScore])

  return (
    <div
      className="
        min-h-screen w-full
        bg-white
        flex flex-col items-center justify-center
        p-6
      "
    >

      {/* KEEP LEARNING */}
      <div
        className="
          bg-white
          rounded-[8px]
          px-[31px] py-[10px]
          flex items-center justify-center
          mx-auto
          mb-[40px]
          w-[239px] h-[45px]
        "
      >
        <span
          className={`
            ${manrope.className}
            text-[#15313D]
            font-medium
            text-[20px]
            leading-[24px]
            tracking-[-0.31px]
            text-center
          `}
        >
          Keep Learning!
        </span>
      </div>

      {/* HEADING */}
      <h1
        className={`
          ${dmSerif.className}
          text-[48px] leading-[1] tracking-[-2px] font-normal italic
          bg-gradient-to-r from-[#15313D] to-[#3CABDA]
          bg-clip-text text-transparent
          mb-10
        `}
      >
        Your Final Score Is
      </h1>

      {/* SCORE ROW */}
      <div className="flex items-start justify-center gap-2">
        {String(finalScore)
          .split("")
          .map((d, i) => (
            <RollingDigit digit={Number(d)} delay={i * 100} key={i} />
          ))}

        {/* FIXED % TEXT (same style as Keep Learning) */}
        <span
  className={`
    ${dmSerif.className}
    italic
    text-[64px]
    leading-[1]
    tracking-[-2px]
    bg-gradient-to-r from-[#15313D] to-[#3CABDA]
    bg-clip-text text-transparent
    mt-[40px]
  `}
>
  %
</span>

      </div>

      {/* START AGAIN BUTTON */}
      <button
        onClick={() => {
          const btn = document.getElementById("start-btn");
          btn?.classList.add("scale-95");

          setTimeout(() => {
            router.push("/");
          }, 1000);
        }}
        id="start-btn"
        className="
          w-[200px] h-[50px]
          rounded-[10px]
          border border-[#96E5FF]
          bg-[linear-gradient(180deg,#C6E9F7_0%,#E5F8FF_100%)]
          flex items-center justify-center gap-[10px]
          text-[#15313D] text-[20px] font-semibold

          transition-all duration-[1000ms] ease-out
          hover:scale-105
          mt-16
        "
      >
        Start Again
      </button>

    </div>
  )
}
