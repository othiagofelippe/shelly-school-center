import { Benefit } from '@/components/Benefit'
import Image from 'next/image'

export default function Home() {
  return (
    <Benefit
      title="Awesome Teachers"
      description="Vivamus interdum, mauris interdum quis curdum  sodales"
      image={
        <Image
          src="/icons/mortarboard.svg"
          alt="mortarboard"
          width={55}
          height={38}
          priority
        />
      }
    />
  )
}
