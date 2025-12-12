"use client"

import { useState } from "react"
import QuizHeader from "@/app/components/QuizHeader"
import ProgressBar from "@/app/components/ProgressBar"
import QuestionCard from "@/app/components/QuestionCard"
import NavButtons from "@/app/components/NavButtons"
import { useRouter } from "next/navigation"
import BestOfLuck from "./components/BestofLuck"

const quiz = [
  {
    question: "1. What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correct: 1,
  },
  {
    question: "2. What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correct: 1,
  },
  {
    question: "3. What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correct: 1,
  },
  {
    question: "4. How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correct: 1,
  },
]

export default function QuizPage() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const router = useRouter()

  const handleSelect = (i: number) => {
    const newAns = [...answers]
    newAns[index] = i
    setAnswers(newAns)
  }

  const next = () => {
    if (index < quiz.length - 1) setIndex(index + 1)
    else router.push(`/result?score=${calculateScore()}%`)
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
  }

  const calculateScore = () => {
    let score = 0
    quiz.forEach((q, i) => {
      if (answers[i] === q.correct) score++
    })
    return Math.round((score / quiz.length) * 100)
  }

  return (
    <div
      className="
        min-h-screen w-full 
        bg-[linear-gradient(90deg,#BECFEE_0%,#71C6E2_35%,#D9F4FA_70%,#BECFEE_100%)] 
        backdrop-blur-[200px] 
        flex items-center justify-center
        px-6 py-10
        relative
      "
    >

      {/* ⭐ SHOW ONLY ON FIRST QUESTION */}
      {/* BEST OF LUCK anchored to the centered card — only show on first question */}
{index === 0 && (
  <div
    style={{
      position: "absolute",

      // SHIFT RIGHT ➜ +160px
      left: `calc(50% - ${1625 / 2}px + 160px)`,

      // SHIFT UP ➜ from 48px → 80px
      bottom: "80px",

      zIndex: 50,
      pointerEvents: "none",
    }}
  >
    <BestOfLuck />
  </div>
)}




      {/* ========= MAIN CONTENT CARD ========= */}
      <div
        className="
          w-[1625px] 
          h-[920px]
          rounded-[50px]
          border border-white/70
          bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,1)_100%)]
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          p-10 
          flex items-center justify-center
        "
      >

        {/* INNER CONTENT RECTANGLE */}
        <div
          className="
            w-[1542px]
            h-[856px]
            rounded-[42px]
            bg-[#F4FDFF]
            flex flex-col
            p-16
          "
        >
          <QuizHeader />

          <div className="mt-10">
            <ProgressBar total={quiz.length} current={index} />
          </div>

          <div className="mt-12">
            <QuestionCard
              question={quiz[index].question}
              options={quiz[index].options}
              selected={answers[index]}
              onSelect={handleSelect}
            />
          </div>

          <div className="mt-auto flex justify-end pt-10">
            <NavButtons
              disablePrev={index === 0}
              disableNext={answers[index] === undefined}
              onPrev={prev}
              onNext={next}
              isSubmit={index === quiz.length - 1}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
