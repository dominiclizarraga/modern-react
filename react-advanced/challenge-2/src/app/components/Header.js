'use client'

import { useState } from 'react'
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white flex justify-center items-center my-2 py-4">

        <p className="mr-4">Rick and Morty Wiki</p>
        <img
          alt=""
          src="https://variety.com/wp-content/uploads/2024/10/image002-e1729182384298.jpg?w=862&h=575&crop=1"
          className="h-16 w-auto rounded-md"
        />
    </header>
  )
}
