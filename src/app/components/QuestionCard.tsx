interface Props {
  question: string
  options: string[]
  selected?: number
  onSelect: (i: number) => void
}

export default function QuestionCard({ question, options, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">

      {/* QUESTION BOX */}
      <div
        className="
          w-full max-w-[896px]
          h-[78px]
          rounded-[10px]
          border border-[#96E5FF]
          bg-[linear-gradient(89.72deg,rgba(198,233,247,1)_0.09%,rgba(229,248,255,1)_99.91%)]
          flex items-center justify-center
        "
      >
        <p
          className="
            text-[#15313D]
            text-[22px]
            font-semibold
            tracking-[-0.31px]
            text-center
            whitespace-nowrap
          "
        >
          {question}
        </p>
      </div>

      {/* ANSWER OPTIONS */}
      <div className="w-full max-w-[896px] flex flex-col gap-4">
        {options.map((opt, i) => (
          <button
  key={i}
  onClick={() => onSelect(i)}
  className={`
    w-full
    h-[78px]
    rounded-[10px]

    border border-[#96E5FF]/50
    bg-[linear-gradient(89.72deg,rgba(198,233,247,0.1)_0.09%,rgba(229,248,255,0.1)_99.91%)]

    flex items-center justify-center
    px-6 whitespace-nowrap

    text-[#15313D]
    text-[20px] font-medium tracking-[-0.31px]

    transition-all duration-200
    hover:shadow-[0_4px_15px_rgba(0,0,0,0.12)]
    hover:border-[#96E5FF]/80

    ${selected === i ? "border-[#96E5FF] shadow-[0_0_20px_rgba(0,0,0,0.18)]" : ""}
  `}
>
  {opt}
</button>

        ))}
      </div>
    </div>
  )
}
