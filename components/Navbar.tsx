"use client"
import Link from "next/link";
import {Menu,X} from "lucide-react"
import React,{useState} from "react";
import Image from "next/image";
function Navbar(){
    const  [menuFlg,setMenuFlg]=useState(false)
    function handleChange(){
        setMenuFlg(!menuFlg);
    }
    return(
        <div>
            <nav className="bg-[#81ad73] font-roboto px-4 py-2 flex justify-between md:justify-evenly items-center">
                <Link href="/">
                <div className="flex justify-center space-x-2 items-center">
                <Image
                 src="/logo.png"
                 alt="logo"
                 width={60}
                 height={60}
                />
                <h1 className="font-semibold w-[100px] md:w-[300px] md:text-2xl">MotherEarth India Foundation</h1>
                </div>
                </Link>
               <ul className="hidden md:flex space-x-8 text-xl px-3">
                    <Link href="/"><li className="hover:bg-[#FBFFE4] hover:opacity-75 transition duration-300 ease-in-out p-2 rounded" >Home</li></Link>
                    <Link href="/about"><li className="hover:bg-[#FBFFE4] hover:opacity-75 transition duration-300 ease-in-out p-2 rounded" >About Us</li></Link>
                    <Link href="/events"><li className="hover:bg-[#FBFFE4] hover:opacity-75 transition duration-300 ease-in-out p-2 rounded" >Events</li></Link>
                    <Link href="/contact"><li className="hover:bg-[#FBFFE4] hover:opacity-75 transition duration-300 ease-in-out p-2 rounded" >Contact</li></Link>
                </ul>
                <div className="md:hidden">
                <button className="text-4xl px-2" onClick={handleChange}>
                    {menuFlg ? <X /> : <Menu />}
                </button>
                {menuFlg && (
                    <ul className="bg-[#81ad73] w-full absolute z-10 top-21 left-0 text-2xl text-center flex-col">
                    <Link href="/"><li className="py-4" >Home</li></Link>
                    <Link href="/about"><li className="py-4" >About Us</li></Link>
                    <Link href="/events"><li className="py-4" >Events</li></Link>
                    <Link href="/contact"><li className="py-4" >Contact</li></Link>
                    </ul>
                )}
                </div>
            </nav>
        </div>
    );
}
export default Navbar;