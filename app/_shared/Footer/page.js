import React from 'react'
import { FaFacebookSquare , FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaPinterestSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer className='header__footer__main__gapping bg-gradient-to-r from-red-400 via-pink-300 to-red-400 py-10 px-10 mt-10'>
       <div className="flex flex-col md:flex-col lg:flex-row justify-center lg:items-start gap-5 md:gap-12">
        <div className="w-1/4">
       <h2 className="text-xl text-white font-bold mb-4">Who are you?</h2>
        <p className="text-white">Who Are You is the eighth studio album by the English rock band the Who, released in 1978. It features songs about music, life and identity, and was the last album to feature drummer Keith Moon, who died three weeks after its release.</p>
        </div>
        <div className="w-1/4">
        <h2 className="text-xl text-white font-bold mb-4">Explore</h2>
        <div className="list-none space-y-2 text-white ">
        <li>About Usa</li>
        <li>Our Team</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
        </div>
        </div>
        <div className="w-1/4">
        <h2 className="text-xl text-white font-bold mb-4">Service</h2>
        <div className="list-none space-y-2 text-white ">
        <li>About Usa</li>
        <li>Our Team</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
        </div>
        </div>
        <div className="w-1/4">
        <h2 className="text-xl text-white font-bold mb-4">Contact Us</h2>
        <div className="list-none space-y-2 text-white ">
        <li>134 - New York, USA</li>
        <li>+11 9787 3761</li>
        <li>infoethestic@gmail.com</li>
        </div>
        <div className="flex items-center gap-5 mt-6 ">
        <FaFacebookSquare  className="w-7 h-7 rounded-md text-white"/>
        <FaInstagramSquare className="w-7 h-7 rounded-md text-white"/>
        <FaLinkedin className="w-7 h-7 rounded-md text-white"/>
        <FaTwitterSquare className="w-7 h-7 rounded-md text-white"/>
        <FaPinterestSquare className="w-7 h-7 rounded-md text-white"/>

        </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer
