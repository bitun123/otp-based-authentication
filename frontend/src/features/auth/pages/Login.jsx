import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/authHooks'


function Login() {
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { handlogin } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await handlogin({ userName, email, password })
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-[url('/public/backgroundLogin.png')] bg-center bg-cover bg-no-repeat flex items-center justify-left  p-5 pl-6 relative">
            <div className="w-[28rem] h-[38rem]  bg-[#353534]/40  backdrop-blur-md rounded-[0.75rem]   p-[3rem] flex flex-col justify-center gap-[2rem]">
                {/* Title */}
                <div className="flex flex-col gap-[0.5rem] w-[20.87rem] h-[4.25rem] ">

                    <h1 className="text-[#E5E2E1] font-[var(--font-jakarta)] text-[2.25rem] font-extrabold leading-[2.5rem] tracking-[-0.9px]">
                        Sign In
                    </h1>
                    <p className='text-[0.88rem] font-[var(--font-inter)] text-[#E9BCB6] font-medium   leading-[1.25rem] 
          tracking-[0px] '>
                        Welcome back to the Digital Auteur experience.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-[20.87rem] h-[20.37rem] flex flex-col gap-[1.5rem]">
                    {/* Username/Email Field */}
                    <div className='flex flex-col w-[100%] h-[4.81rem] gap-[0.4rem]'>
                        <label htmlFor="userName" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]  ">
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            placeholder="Enter your username or email"
                            className="w-[100%] h-[3.45rem] bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none  text-[1rem] font-[var(--font-inter)]  leading-[1.5rem] tracking-[0px] "
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col w-[100%] h-[4.81rem] gap-[0.4rem]'>
                        <label htmlFor="email" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]  ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-[100%] h-[3.45rem] bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none  text-[1rem] font-[var(--font-inter)]  leading-[1.5rem] tracking-[0px] "
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className='flex flex-col w-[100%] h-[4.81rem] gap-[0.4rem]'>
                        <label htmlFor="password" className="font-['Inter'] text-[0.75rem] leading-[1rem] tracking-[1.2px] uppercase text-[#E9BCB6]  ">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-[100%] h-[3.45rem] bg-[#2A2A2A] text-[#b7b7b7] rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none  text-[1rem] font-[var(--font-inter)]  leading-[1.5rem] tracking-[0px] "
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[100%] h-[3.45rem] bg-[#E50914] text-white rounded-[0.5rem] px-[1.1rem] py-[1rem] border-none focus:outline-none  text-[1rem] font-[var(--font-jakarta)]  font-bold  leading-[1.5rem] tracking-[0px] active:scale-95 transition-transform duration-150 cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                {/* Navigation to Register */}
                <div className="w-[20.87rem] h-[5.37rem]  flex flex-col gap-[1rem] pt-5">

                    <div className='w-[100%] h-[1.3rem] flex gap-[0.5rem]'>

                        <p className="text-[0.9rem] font-[var(--font-inter)] text-[#e9bcb6]">Don't have an account?</p>
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="text-[0.9rem] font-[var(--font-inter)] text-white
                           font-bold leading-[1.25rem]  cursor-pointer  transition-all duration-200 
                           "
                        >
                         Sign up now.
                        </button>
                    </div>
                    <p className='text-[0.625rem] font-[var(--font-inter)] text-[#b7b7b7]'>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <span className="text-[#e9bcb6] cursor-pointer">Learn more</span>.
                    </p>
                </div>
            </div>
            <img src="/public/loginSideImage.png" alt="" srcset="" className='lg:block hidden absolute right-[3rem] bottom-[5rem] ' />
        </div>
    )
}

export default Login