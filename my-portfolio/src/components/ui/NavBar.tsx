'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-md py-4 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="text-xl font-bold">
                        <span className="text-blue-600">Fabio Tales Victorino </span> 
                    </Link>
                    <div className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-800">
                        DevOps
                    </div>
                </div>
                {/* dektop navegation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/experience" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Experience
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Projects
          </Link>
          <Link href="/notes" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Notes
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
            About
          </Link>
                </div>
        {/* Mobile menu button  */}

         <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/experience" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/notes" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Notes
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
            </div>
      )}
        </nav>
    )
};

export default Navbar;
