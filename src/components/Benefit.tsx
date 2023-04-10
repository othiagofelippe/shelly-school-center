// eslint-disable-next-line camelcase
import { Poppins, Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
})
interface BenefitProps {
  title: string
  description: string
  image: ReactNode
}

export function Benefit({ title, description, image }: BenefitProps) {
  return (
    <div className="flex flex-col gap-3 bg-white py-5 px-4 w-72 rounded-xl shadow-xl">
      {image}
      <div className="flex flex-col gap-2">
        <h4
          className={`text-gray-700 text-lg font-medium ${poppins.className}`}
        >
          {title}
        </h4>
        <p className={`text-gray-400 text-sm ${openSans.className}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
