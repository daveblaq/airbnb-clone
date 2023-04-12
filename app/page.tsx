import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <div className="text-rose-500 font-extrabold">Hello Airbnb</div>
    </main>
  )
}
