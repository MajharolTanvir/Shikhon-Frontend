'use client'
import { useRef, useState } from 'react'

type Button = {
    title: string;
}

const PrimaryButton = ({title}: Button) => {

    const divRef = useRef<HTMLButtonElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
   
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!divRef.current || isFocused) return
   
      const div = divRef.current
      const rect = div.getBoundingClientRect()
   
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
   
    const handleFocus = () => {
      setIsFocused(true)
      setOpacity(1)
    }
   
    const handleBlur = () => {
      setIsFocused(false)
      setOpacity(0)
    }
   
    const handleMouseEnter = () => {
      setOpacity(1)
    }
   
    const handleMouseLeave = () => {
      setOpacity(0)
    }

  return (
    <>
      <button
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative inline-flex w-fit mx-auto h-10 2xl:h-12 items-center justify-center overflow-hidden rounded-md border-2 border-secondary bg-gradient-to-r from-accent to-secondary px-6 font-medium text-text shadow-2xl transition-colors focus:outline-none my-2"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, #1A1A1A, #00000026)`,
          }}
        />
        <span className="relative z-20 font-san text-[10px] md:text-md 2xl:text-lg">{title}</span>
      </button>
    </>
  )
}

export default PrimaryButton