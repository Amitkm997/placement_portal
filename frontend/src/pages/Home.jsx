import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
   const navigate=useNavigate();
  return (
    <>
      {/* Hero Section  */}
      <section className='bg-blue-100 py-20'>
         <div className='max-w-7xl mx-auto text-center'>
         <h1 className='text-5xl font-bold text-blue-600 mb-8'>Welcome to placement Portal</h1>
         <p className='text-xl text-gray-700 mb-8'>Helping Students Get Their Dream Jobs</p>

         <div className='flex justify-center gap-4 '>
            <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-700 bg-blue-600 text-white">Register Student</button>
            <button onClick={()=>navigate('/company')} className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-700 bg-blue-600 text-white">View Companies</button>
         </div>
         </div>
      </section> 
     
     {/* Statistics Section  */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
         <h2 className='text-3xl font-bold text-center mb-10'>Placement Statistics</h2>
         <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>500+</h3>
                <p className='mt-2 text-gray-700'>Student Placed</p>
            </div>
            <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>50+</h3>
                <p className='mt-2 text-gray-700'>Companies Visited</p>
            </div>
            <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
                <h3 className='text-4xl font-bold text-blue-600'>50 LPA</h3>
                <p className='mt-2 text-gray-700'>Highest Package</p>
            </div>
         </div>
      </section>
    </>
  )
}
