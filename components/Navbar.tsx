import Link from "next/link";
import { Search } from "lucide-react";


export default function Navbar() {
  return (
    <header className="fixed inset-x-6 top-6 z-20 flex h-16 items-center justify-between rounded-[24px] bg-neutral-800/90 px-8 text-white backdrop-blur-md">
      <Link href="/" className="text-2xl font-medium tracking-tight">
        Bigger
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="/signup" className="text-lg font-medium">
          Sign up
        </Link>
        <Link href="/login" className="text-lg font-medium">
          Login
        </Link>
        <Link href="/contact" className="text-lg font-medium">
          Contact
        </Link>

      </nav>
    </header>
  );
}