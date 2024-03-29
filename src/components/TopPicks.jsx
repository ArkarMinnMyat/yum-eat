import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { topPicks } from '../data/data';

const TopPicks = () => {
  return (
    <div>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
        <div className='grid md:grid max-w[1520px] m-auto p-2'>
            <Splide options={{perPage:4,gap:'0.5rem',grag:'free',arrows:false}}>
                {
                    topPicks.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className='rounded-3xl relative'>
                                <div className='absolute w-full h-full rounded-3xl text-white'>
                                    <p className='p-2'>{item.title}</p>
                                    <p className='p-2'>{item.price}</p>
                                    <button className='border-dotted border-orange-400 text-black mx-2 absolute bottom-4 right-2'>Add To Cart</button>
                                </div>
                                <img src={item.img} alt={item.title}
                                className='h-[200px] w-full object-cover rounded-3xl cursor-pointer horver:scale-105 ease-out duration-300' />
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    </div>
  )
}

export default TopPicks