import React, { useState } from 'react'
import { mealData } from '../data/data';
import { BsArrowRight } from "react-icons/bs"

const Meal = () => {
    const [foods,setFoods] = useState(mealData);
    const filterCategory = category => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'> 
            Our Meal
        </h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center my-5'>
                <button className='mx-10 py-1 px-10 rounded-2xl border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 '
                                    onClick={() => setFoods(mealData)}>All</button>
                <button className='mx-10 py-1 px-10 rounded-2xl border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 ' 
                                    onClick={() => filterCategory("pizza")}>Pizza</button>
                <button className='mx-10 py-1 px-10 rounded-2xl border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 '
                                    onClick={() => filterCategory("chicken")}>Chicken</button>
                <button className='mx-10 py-1 px-10 rounded-2xl border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 '
                                    onClick={() => filterCategory("salad")}>Salad</button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                foods.map((item) => (
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded'/>
                        <div className='flex justify-between py-2 px-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-18 w-20 text-center -mt-8 hover:bg-white hover:text-orange-700 text-white border-5 py-4 rounded-full'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4'>
                            <a href='#' className='flex item-center text-indigo-600'>
                                View More
                                <BsArrowRight size={28} className='w-5 ml-2 text-black  inline'></BsArrowRight>
                            </a>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meal