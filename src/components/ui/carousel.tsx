import React from "react"

interface CarouselProps {
  children: React.ReactNode[]
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="flex overflow-x-auto gap-2 snap-x snap-mandatory scrollbar-hide">
      {children.map((child, index) => (
        <div
          key={index}
          className="min-w-full snap-start rounded-md overflow-hidden shadow"
        >
          {child}
        </div>
      ))}
    </div>
  )
}
