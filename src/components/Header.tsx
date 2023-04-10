import Link from 'next/link'
// eslint-disable-next-line camelcase
import { Poppins, Open_Sans } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export function Header() {
  return (
    <header className="max-w-6xl m-auto">
      <div className="flex items-center justify-between py-6">
        <Link href={'/'}>
          <Image src="/logo.svg" alt="Logo" width={162} height={55} priority />
        </Link>
        <ul
          className={`flex items-center gap-20 text-sm ${openSans.className}`}
        >
          <li className="flex gap-2">
            <Image
              src="/icons/phone.svg"
              alt="Phone"
              width={20}
              height={24}
              priority
            />
            <div>
              <p className="text-gray-700 font-semibold">Call</p>
              <span className="text-gray-400">+2 342 5446 67</span>
            </div>
          </li>
          <li className="flex gap-2">
            <Image
              src="/icons/clock.svg"
              alt="Phone"
              width={20}
              height={24}
              priority
            />
            <div>
              <p className="text-gray-700 font-semibold">Work Time</p>
              <span className="text-gray-400">Mon - Fri 8 AM - 5 PM</span>
            </div>
          </li>
          <li className="flex gap-2">
            <Image
              src="/icons/map-marker.svg"
              alt="Phone"
              width={15}
              height={24}
              priority
            />
            <div>
              <p className="text-gray-700 font-semibold">Address</p>
              <span className="text-gray-400">Franklin St, Greenpoint Ave</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-[1px] w-full bg-gray-200 " />
      <nav className="flex items-center justify-between mt-5">
        <ul
          className={`flex items-center gap-10 text-gray-700 text-xl font-medium font-sans ${poppins.className}`}
        >
          <li className="hover:text-gray-400">
            <Link href={'/'}>
              <p>Home</p>
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href={'/about'}>
              <p>About</p>
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href={'/classes'}>
              <p>Classes</p>
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href={'/teachers'}>
              <p>Teachers</p>
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href={'/blog'}>
              <p>Blog</p>
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href={'/contacts'}>
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            <Link href={''}>
              <Image
                src="/social/facebook.svg"
                alt="Facebook Logo"
                width={28}
                height={28}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={''}>
              <Image
                src="/social/linkedin.svg"
                alt="Linkedin Logo"
                width={28}
                height={28}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={''}>
              <Image
                src="/social/instagram.svg"
                alt="Instagram Logo"
                width={28}
                height={28}
                priority
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
