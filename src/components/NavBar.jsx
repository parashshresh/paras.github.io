import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
function NavBar() {
    // state to flip hamburger
    const [nav, setNav] = useState(false);
    console.log("nav ko value", nav);
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'Experiance',
        },
        {
            id: 5,
            link: 'contact',
        },
    ];

    return (

        <div className="flex justify-between items-center w-full h-20 text-white  bg-black px-4 fixed">
            <div>
                <h1 className="text-5xl  font-bold font-parash ml2 ">Parash</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="text-1xl px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>

            {/* using icon for hamburger */}
            <div
                onClick={() => setNav(!nav)} className="cursor-pointer
             pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                
            <ul
            className='flex flex-col justify-center items-center absolute top-0 left-0 w-full
        h-screen bg-gradient-to-b from-black to-gray-800
         text-gray-500'>
            <li>Home</li>
            <li>about</li>
            <li>Portfolio</li>
            <li>Experiance</li>
            <li>Contact</li>

        </ul>
            )}


        </div>
    );
};

export default NavBar