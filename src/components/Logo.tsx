import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500 text-white rounded-lg text-xl font-bold">
        LT
      </span>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-cyan-500">
        Loydtech
      </span>
    </Link>
  )
}