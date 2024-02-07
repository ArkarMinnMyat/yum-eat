import React from 'react';
import { FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='mx-w-[1520px] m-auto px-4 py-2 bg-[#24262b] '>
        <div className='py-16 px-4 md:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deserunt corrupti ex, fuga corporis ducimus velit perspiciatis adipisci nobis natus reprehenderit? Doloribus quo eaque necessitatibus adipisci, autem dolor dignissimos libero!</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={28}></FaFacebookSquare>
                    <FaInstagramSquare size={28}></FaInstagramSquare>
                    <FaTwitterSquare size={28}></FaTwitterSquare>
                    <FaGithubSquare size={28}></FaGithubSquare>
                    <FaDribbbleSquare size={28}></FaDribbbleSquare>
                </div>
                <div className='md:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer