import Image from "next/image";
import Link from 'next/link';



export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col bg-black">
     <header className="fixed inset-x-6 top-6 z-20 flex h-16 items-center justify-between rounded-[24px] bg-neutral-800 px-8 text-white">
      <Link href="/" className="text-2xl font-medium tracking-tight">
        Biggger
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="/contact" className="text-lg font-medium">
          Contact
        </Link>

        <Link href="/contact" className="text-lg font-medium">
          Sign up
        </Link>     

        <Link href="/contact" className="text-lg font-medium">
          Login
        </Link>   
      </nav>
    </header>

    </div>
  );
}
