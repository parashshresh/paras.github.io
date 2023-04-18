import React from 'react';
import heroImage from '../assets/a.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Home = () => {
    return (
        // name attribute chai react-smooth-scroll ko lagi
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
           
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Html NASA Hacker!
                    </h2>
                    <p className= "text-gray-500 py-4 max-w-md">
                    Why was the math book sad? Because it had too many problems.

Why don't scientists trust atoms? Because they make up everything.

What do you call an alligator in a vest? An investigator.

What do you call a fake noodle? An impasta.

Why did the tomato turn red? Because it saw the salad dressing.

What did the janitor say when he jumped out of the closet? "Supplies!"

                    </p>
                    <div>
                        <button className =  "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 t0-blue-500 cursor-pointer ">
                            Portfolio
                            {/* animation ko lagi icon lai span tag haleko */}
                            <span className = "group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />

                            </span>
                        </button>
                    </div>
         
                </div>

                <div>
                      <img className="rounded-2xl mx-auto  w-2/3 md:w-full" src={heroImage} alt="parash-portfolio" />

                    </div>

            </div>

        </div>
    )
}

export default Home