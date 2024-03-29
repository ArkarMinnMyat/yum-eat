import React from 'react'

const NewsLetter = () => {
  return (
    <div className='mx-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='mx-auto grid md:grid-cols-3 '>
            <div className='md:col-span-2 my-4'>
                <h1>Need Advice on how to improve your flow?</h1>
                <p>Sign up ti join our newsletter and stay up to date.</p>
            </div>
            <div className='mt-6'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='Email' className='p-3 flex w-full rounded-md text-black' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-3 px-4 my-3 py-3' >Notify Me</button>
                </div>
                <p className='mt-7'>We are concerned about security of your data,Read
                    <span className='text-[#00df9a]'>Privacy Policy</span>
                </p>
            </div>
            <hr className='my-8 bg-gray-700' />
        </div>
    </div>
  )
}

export default NewsLetter