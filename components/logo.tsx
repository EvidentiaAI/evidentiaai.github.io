import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <Image src="/images/logo.png" alt="TeamBrain Logo" fill className="object-contain" priority />
      </div>
      <span className="font-bold text-xl">TeamBrain</span>
    </Link>
  )
}
