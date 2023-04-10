// eslint-disable-next-line camelcase
import { Poppins, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['italic'],
})

interface ClassProps {
  title: string
  time: string
  image?: ReactNode
  teacher: string
  value: string
}

export function Class({ title, time, image, teacher, value }: ClassProps) {
  return (
    <div className="rounded-xl shadow-xl w-72 bg-white relative">
      <div className="w-full h-40 bg-white rounded-xl" />
      <div className="h-1 w-full bg-blue-500" />
      <div className="py-8 px-4">
        <div className="flex flex-col gap-5 w-48">
          <h4
            className={`text-gray-700 text-sm font-medium  ${poppins.className}`}
          >
            {title}
          </h4>
          <p className={`text-gray-400 text-sm italic ${openSans.className} `}>
            {time}
          </p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            {/* <Image
              className="rounded-full"
              src={`${image}`}
              alt="teacher"
              width={24}
              height={24}
              priority
            /> */}
            <p className={`text-gray-400 text-sm italic ${openSans.className}`}>
              {teacher}
            </p>
          </div>
          <span
            className={`text-blue-500 text-lg font-bold ${poppins.className}`}
          >
            R${value}
          </span>
        </div>
      </div>
      <Link href={'/'} className="animate-bounce">
        <Image
          className="absolute top-36 right-5 hover:scale-125 transition-all"
          src="/icons/cart.svg"
          alt="cart"
          width={42}
          height={42}
          priority
        />
      </Link>
    </div>
  )
}
