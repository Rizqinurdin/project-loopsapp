import React from 'react';

const Invoice = () => {
  return (
    <>
    <div className='py-20 h-screen bg-utama px-2'>
      <div className='max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl'>
        <div className='md:flex'>
          <div className='w-full p-3'>
            <div className='border rounded-lg border-dashed border-kedua shadow-lg shadow-black py-5 border-3 bg-white ring-2 ring-white shadow-lg'>
              <div className=' pl-3'>
                <div className='flex flex-row justify-center mb-3'><img className=' w-28' src={require("../invoice/loops.png")} alt=""/></div>
                <h2 className='text-kedua'>Top Up</h2>
                <div className='flex flex-row items-end'> <span className='text-black text-3xl font-bold'>440</span> <span className='mt-2 text-gray font-bolder'>.99 IDR</span> </div>
              </div>
              <div className='flex w-full mt-3 mb-3'> <span className='border border-dashed w-full border-kedua'></span> </div>
              <div className='p-3 space-y-5'>
                        <div className='flex flex-col'> <span className='text-gray'>Company</span> <span className='text-black text-lg font-bold'>Disoft</span> </div>
                        <div className='flex flex-col'> <span className='text-gray'>Base Price #</span> <span className='text-black text-lg font-bold'>1000</span> </div>
                        <div className='flex flex-col'> <span className='text-gray'>Discount #</span> <span className='text-black text-lg font-bold'>50%</span> </div>
                        <div className='flex flex-col'> <span className='text-gray'>Order #</span> <span className='text-black text-lg font-bold'>DS1234343</span> </div>
                        {/* <div className='flex flex-col'> <span className='text-gray'>Service</span> <span className='text-black text-lg font-bold'>New Document</span> </div> */}
                        <div className='flex flex-col'> <span className='text-gray'>Date #</span> <span className='text-black text-lg font-bold'>08:50/11/18/2022</span> </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Invoice