interface Props {
  total: number
  current: number
}

export default function ProgressBar({ total, current }: Props) {
  return (
    <div className="w-[896px] flex justify-between mx-auto mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            h-[4px]
            w-[180px] 
            rounded-full
            transition-all 
            duration-300
            ${i <= current ? "bg-[#15313D]" : "bg-[#DADFE4]"
}
          `}
        />
      ))}
    </div>
  )
}
