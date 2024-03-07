"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { MdOutlineStorefront } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Bottombar = () => {
  const pathname = usePathname()

  return (
    <section className="bottom-bar-container">
      <div className="bottom-bar">
        {/* Home */}
        <Link
            href="/"
            className={`p-4 transition
                      ${pathname === "/" ? "[&_*]:text-primary-foreground": "[&_*]:text-primary-foreground/50"}`}
          >
            <MdOutlineStorefront className='text-[28px]'/>
        </Link>

        {/* Create */}
        <Link
            href="/services/create"
            className={`p-4 transition
                      ${pathname === "/services/create" ? " [&_*]:text-primary-foreground": " [&_*]:text-primary-foreground/50"}`}
          >
            <IoMdAdd className='text-[28px]'/>
        </Link>

        {/* Profile */}
        <Link
            href="/profile"
            className={`p-4 transition
                      ${pathname === "/profile" ? " [&_*]:text-primary-foreground": " [&_*]:text-primary-foreground/50"}`}
          >
            <CiUser className='text-[28px]'/>
        </Link>
      </div>

    </section>
  )
}

export default Bottombar