import React from 'react'

const Delivery = () => {
  return (
    <div className='max-w-[1520px] bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""
                className='w-[550px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-3xl p-3'>Get App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Limitess Convenience on-demand
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste repellat eligendi est, nam tenetur vel sunt nobis minus fugiat, maxime assumenda saepe eaque ipsa necessitatibus harum nisi. Sint, magni?
                Nulla quaerat esse quos, iste deserunt qui excepturi? Temporibus, blanditiis officia, illo quibusdam fugiat atque ad nihil reprehenderit minima laboriosam eligendi quia non accusamus velit numquam nisi alias amet nobis.</p>
                <button className='bg-black hover:bg-[#00df9a] hover:text-orange-500 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery