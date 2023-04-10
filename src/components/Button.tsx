import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
})

interface ButtonProps {
  value: string
}

export function Button({ value }: ButtonProps) {
  return (
    <button className="rounded-full py-2 px-16 bg-blue-500 flex items-center gap-5 hover:gap-6 transition-all">
      <p className={`text-white text-lg font-medium ${poppins.className}`}>
        {value}
      </p>
      <Image
        src="/icons/arrow-right.svg"
        alt="icon"
        width={28}
        height={28}
        priority
      />
    </button>
  )
}
