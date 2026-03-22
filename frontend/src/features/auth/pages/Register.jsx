import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/authHooks'

function Register() {
    const [userName, setuserName] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { handleRegister } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleRegister({ userName, phone, email, password })
        navigate("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/public/Signup.png')] bg-cover bg-black/90 p-4">
            <div className="w-full max-w-[28rem] bg-[#353534]/70 backdrop-blur-md rounded-[0.75rem] p-[3rem] flex flex-col justify-center gap-[2rem] lg:h-[43rem]">
                {/* Title */}

                <div className='w-full flex flex-col gap-[0.5rem] text-center'>
                    <p className="text-[#E5E2E1] font-[var(--font-jakarta)] text-[1.875rem] 
           font-medium 
           leading-[2.25rem] 
           tracking-[-0.75px]">
                        Begin Your Journey
                    </p>
                    <p className=' font-[var(--font-inter)] text-[#E9BCB6]   text-[0.875rem] 
          font-normal 
          leading-[1.25rem] 
          tracking-[0px]"'>
                        Curate your own cinematic universe today.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[1.5rem] ">
                    {/* Phone Field */}
                    <div className='flex flex-col w-full gap-[0.4rem]'>
                        <label htmlFor="phone" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Enter your phone number"
                      className="w-full bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none text-[1rem] font-[var(--font-inter)] leading-[1.5rem] tracking-[0px]"
                            required
                        />
                    </div>

                    {/* Username Field */}
                    <div className='flex flex-col w-full gap-[0.4rem]'>
                        <label htmlFor="userName" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]">
                            Username
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            placeholder="Choose a username"
                           className="w-full bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none text-[1rem] font-[var(--font-inter)] leading-[1.5rem] tracking-[0px]"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col w-full gap-[0.4rem]'>
                        <label htmlFor="email" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your email"
                              className="w-full bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none text-[1rem] font-[var(--font-inter)] leading-[1.5rem] tracking-[0px]"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className='flex flex-col w-full gap-[0.4rem]'>
                        <label htmlFor="password" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                placeholder="Create a password"
                               className="w-full bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none text-[1rem] font-[var(--font-inter)] leading-[1.5rem] tracking-[0px]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

           
                    <button
                    type='submit'
                    className="w-full bg-[#E50914] text-white rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none text-[1rem] font-[var(--font-jakarta)] font-medium leading-[1.5rem] tracking-[0px] active:scale-95 transition-transform duration-150 cursor-pointer"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>

                {/* Navigation to Login */}
           <div className="w-full flex items-center justify-center gap-[1rem]">
                    <p className='text-[0.9rem] font-[var(--font-inter)] text-[#b7b7b7]  text-center'>Already have an account? </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-[0.9rem] font-[var(--font-inter)] text-white
                           font-bold leading-[1.25rem]  cursor-pointer  transition-all duration-200 
                           "
                    >
                        Sign In
                    </button>
           </div>
            </div>
        </div>
    )
}

export default Register