import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"


interface Props {
  disablePrev: boolean
  disableNext: boolean
  onPrev: () => void
  onNext: () => void
  isSubmit: boolean
}

export default function NavButtons({
  disablePrev,
  disableNext,
  onPrev,
  onNext,
  isSubmit,
}: Props) {
  return (
    <div className="flex items-center gap-[10px]">

      {/* LEFT BUTTON */}
      <button
        disabled={disablePrev}
        onClick={onPrev}
        className={`
          w-[50px] h-[50px]
          bg-[#E2F3FC]
          rounded-[12px]
          flex items-center justify-center
          transition-all duration-200
          hover:scale-[1.05] hover:shadow-md
          ${disablePrev && "opacity-40 cursor-not-allowed hover:scale-100 hover:shadow-none"}
        `}
      >
        <HiChevronLeft size={28} color="#000000" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        disabled={disableNext}
        onClick={onNext}
        className={`
          w-[50px] h-[50px]
          bg-[#E2F3FC]
          rounded-[12px]
          flex items-center justify-center
          transition-all duration-200
          hover:scale-[1.05] hover:shadow-md
          ${disableNext && "opacity-40 cursor-not-allowed hover:scale-100 hover:shadow-none"}
        `}
      >
        <HiChevronRight size={28} color="#000000" />
      </button>

    </div>
  )
}
