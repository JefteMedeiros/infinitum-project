import Image from "next/image"
import Link from "next/link"
import { BsChat } from "react-icons/bs"
import { SearchBar } from "../SearchBar"

export function Header() {
  return (
    <header
      className="
        grid 
        grid-cols-body-grid 
        gap-x-14 
        py-9 
        justify-between 
        items-center
      "
    >
      <div
        title="Logo"
        className="
          hidden
          md:block 
          text-[2rem] 
          tracking-[0.3rem] 
          text-gray-100 
          font-titillium
        "
      >
        Infinitum.
      </div>
      <Image
        className="rounded-full block md:hidden"
        width={32}
        height={32}
        src="https://github.com/JefteMedeiros.png"
        alt=""
      />
      <SearchBar />
      <Link
        href="#"
        className="
          hidden
          text-right 
          md:block 
          text-title-1 
          hover:underline 
          text-gray-100
        "
      >
        Sair
      </Link>
      <BsChat size={24} className="block ml-auto md:hidden text-gray-100" />
    </header>
  )
}
