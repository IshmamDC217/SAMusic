import React from 'react'
import { FaSpotify, FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiNeteasecloudmusic } from "react-icons/si";

const navbar = () => {
    return (
        <section>
            <nav className="navbar border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiNeteasecloudmusic className='text-[#923c4a] text-4xl'/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SAM</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href='https://open.spotify.com/artist/4Jfp6SJxwJQUBdvVHW9Hhm?si=mlkPpYLHQTCAmYRXJw2L9g'><FaSpotify className='text-[#923c4a] text-4xl p-1'/></a>
                    <a href='https://www.youtube.com/@14DaysChannel' ><FaYoutube className='text-[#923c4a] text-4xl p-1'/></a>
                    <a href='https://www.facebook.com/SaminAhmedMusic/' ><FaFacebook className='text-[#923c4a] text-4xl p-1'/></a>
                    <a href='https://www.instagram.com/saminahmedmusic/' ><FaInstagram className='text-[#923c4a] text-4xl p-1'/></a>
                    <a href='https://www.tiktok.com/@mynameissaminalsabah?_t=8meWZFbj4cK&_r=1' ><FaTiktok className='text-[#923c4a] text-4xl p-1'/></a>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#0000009c] md:bg-[#0000009c] border-[#0000009c]">
                            <li>
                                <a href="#" className="block font-bold py-2 px-3 md:p-0 text-white bg-[#923c4a] rounded md:bg-transparent md:text-[#923c4a] md:dark:text-[#923c4a]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#923c4a] md:dark:hover:text-[#923c4a] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#923c4a] md:dark:hover:text-[#923c4a] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#923c4a] md:dark:hover:text-[#923c4a] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default navbar
