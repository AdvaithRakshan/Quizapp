import { DM_Serif_Display } from "next/font/google"
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
})

export default function QuizHeader() {
  return (
    <div className="text-center">
      <h1
  className={`${dmSerif.className} text-[90px] leading-[1] tracking-[-4px] text-center font-normal 
  bg-gradient-to-b from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent`}
>
  Test Your Knowledge
</h1>

      <div
  className="
    w-[422px] h-[45px]
    bg-white 
    rounded-[8px]
    flex items-center justify-center
    mx-auto
    px-[31px] py-[10px]
  "
>
  <p
    className="
      text-[#15313D]
      text-[20px]
      leading-[24px]
      font-medium
      tracking-[-0.31px]
      text-center
      w-[359px]
    "
  >
    Answer all questions to see your results
  </p>
</div>



    </div>
  )
}
