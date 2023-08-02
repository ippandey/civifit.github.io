import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube , FaArrowRight } from 'react-icons/fa';



export default function Footer(){
  return(
    // npm run dev
    // import react icons , react router dom 
    <div className=" bg-green-800 h-1/2 w-full flex flex-col items-start">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#1c1917" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,154.7C480,139,600,85,720,90.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      
      <div className="w-full h-full flex md:flex-row flex-col justify-around items-start p-20 font-signature text-xl">

        <div className="flex flex-col md:flex-row gap-8">
          <div className="p-5">
            <div className="bg-gray-500 bg-opacity-20 p-8 rounded-md flex flex-col justify-center items-center">
                <div className="sm:w-40 w-32 h-32 sm:h-32 relative shrink-0">
                  <Image
                    src={"/svg/logo-white.svg"}
                    className="mix-blend-screen"
                    alt={"logo"}
                    fill
                    priority
                  />
                </div>
                <div className="flex gap-6 pb-5 text-white">
                  <p>Building a Sustainable Future, <br /> One Reuse at a Time</p>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="p-5 ">
              <ul>
                <p className="text-slate-800 font-bold text-2xl pb-4">OFFICE
                <div className="w-1/4 h-1 bg-slate-800"></div>
                </p>
                  <p className="text-white dark:text-white">Abcd Road</p>
                  <p className="text-white dark:text-white">lorem, Banglore</p>
                  <p className="text-white dark:text-white">Karnataka, PIN 000000, India</p>
                  <br />
                  <p className="cursor-pointer text-white dark:text-white"><a href="#">email@gmail.com</a></p>
                  <h5 className="text-white dark:text-white">+91 - 0123456789</h5>
              </ul>
            </div>

            <div className="p-5">
              <ul>
                <p className="text-slate-800 font-bold text-2xl pb-4">COMPANY
                  <div className="w-2/4 h-1 bg-slate-800"></div>
                </p>
                <li className="text-white text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-white text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-white text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                  <Link href="/process">Process</Link>
                </li>
                <li className="text-white text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5">
          
            <p className="text-slate-800 font-bold text-2xl pb-4 flex flex-col mb-5">CONTACT US 
            <div className="w-2/4 h-1 bg-slate-800"></div>
            </p>
            <div className="mb-8">
              <form className="flex items-center pb-3 gap-2">
                <input className="w-full bg-transparent text-white border-0 outline-none border-b border-gray-300 focus:border-white" type="email" placeholder="Enter your email" />
                <button type="submit" className="bg-transparent border-0 outline-none cursor-pointer"><FaArrowRight/></button>
              </form>
            </div>
            <div className="flex gap-8 pb-5 text-white">
              <FaInstagram className="text-4xl cursor-pointer hover:text-pink-600"/>
              <FaTwitter className="text-4xl cursor-pointer hover:text-blue-500"/>
              <FaLinkedin className="text-4xl cursor-pointer hover:text-blue-500"/>
              <FaYoutube className="text-4xl cursor-pointer hover:text-red-600"/>
            </div>
          
        </div>
      </div>
      <hr className="w-4/5 mx-auto"/>

      <div className="w-full font-signature flex flex-row justify-center items-center gap-4 p-2">
        <div>
          <p>© 2023 CiviFit. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="text-gray-300">Terms of Service</p>
          <p className="text-gray-300">Privacy Policy</p>
          <p className="text-gray-300">Security</p>
        </div>          
      </div>
    </div>
  );
}
