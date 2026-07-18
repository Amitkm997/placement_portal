import React from 'react'
import { useState } from 'react'

export default function Register() {
    // const[intitalStateValue,setUpFunction]=useState(initialValue)
    const[formData,setFormData]=useState({
      name:"",
      email:"",
      password:"",
      course:"",
      skills:"",
      role:"Student"
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    
  return (
    <>
        <div className='min-h-screen bg-gray-100 py-10 px-5'>
             <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
                {/* Registration Form  */}
                <div className='bg-white shadow-lg rounded-xl p-8'>
                     <h1 className='text-3xl font-bold text-blue-600 text-center'>Student Registration</h1>
                     <form className='space-y-5'>
                           <div>
                            <label className='block mb-2 font-semibold' >Full Name</label>
                            <input type="text" 
                            placeholder='Enter your Name'
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.name}
                            name='name'
                            onChange={handleChange}
                            />
                           </div>
                           <div>
                            <label className='block mb-2 font-semibold' >Email</label>
                            <input type="email" 
                            name='email'
                            placeholder='Enter your Email'
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.email}
                            onChange={handleChange}
                            />
                            
                           </div>
                           <div>
                            <label className='block mb-2 font-semibold' >Password</label>
                            <input type="password" 
                            name='password'
                            placeholder='Enter your Password'
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.password}
                            onChange={handleChange}
                            />
                            
                           </div>
                           <div>
                            <label className='block mb-2 font-semibold' >Course</label>
                            <input type="text" 
                            name='course'
                            placeholder='BCA, M.Tech'
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.course}
                            onChange={handleChange}
                            />
                            
                           </div>
                           <div>
                            <label className='block mb-2 font-semibold' >Skills</label>
                            <input type="text" 
                            name='skills'
                            placeholder='Reactjs SpringBoot Django MERN'
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.skills}
                            onChange={handleChange}
                            />
                            
                           </div>
                           <div>
                            <label className='block mb-2 font-semibold' >Role</label>
                            <input type="text" 
                            // placeholder='Student'
                            readOnly
                            className='w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none'
                            value={formData.role}
                            />
                           </div>
                           <button className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition'>Register</button>
                     </form>
                </div>
                <div className='bg-white shadow-lg rounded-xl p-8'>
                    <h2 className='text-3xl text-green-500 text-center mb-6'>Live Preview</h2>
                    <div className='space-y-4 text-lg'>
                        <p><strong>Name:</strong>{formData.name}</p>
                        <p><strong>Email:</strong>{formData.email}</p>
                        <p><strong>Password:</strong>{formData.password}</p>
                        <p><strong>Course:</strong>{formData.course}</p>
                        <p><strong>Skills:</strong>{formData.skills}</p>
                        <p><strong>Role:</strong>{formData.role}</p>
                    </div>

                </div>
             </div>
        </div>
    </>
  )
}
