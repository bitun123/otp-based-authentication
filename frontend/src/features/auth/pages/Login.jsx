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
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-gradient-to-br from-slate-900 to-red-800 rounded-xl shadow-2xl p-8 border border-red-400 border-opacity-30">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 via-red-400 to-red-500 bg-clip-text text-transparent">
                    Login
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username/Email Field */}
                    <div>
                        <label htmlFor="userName" className="block text-sm font-semibold text-red-300 uppercase tracking-wide mb-2">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-3 bg-slate-800 bg-opacity-60 border-2 border-red-400 border-opacity-40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-opacity-100 transition-all duration-200"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-red-300 uppercase tracking-wide mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-slate-800 bg-opacity-60 border-2 border-red-400 border-opacity-40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-opacity-100 transition-all duration-200"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-red-300 uppercase tracking-wide mb-2">
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
                                className="w-full px-4 py-3 pr-12 bg-slate-800 bg-opacity-60 border-2 border-red-400 border-opacity-40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-opacity-100 transition-all duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-red-300 hover:text-red-200 text-xl transition-colors"
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-400/50"
                    >
                        Login
                    </button>
                </form>

                {/* Navigation to Register */}
                <div className="mt-8 pt-6 border-t border-red-400 border-opacity-30 text-center">
                    <p className="text-gray-400 text-sm mb-4">Don't have an account?</p>
                    <button
                        type="button"
                        onClick={() => navigate('/register')}
                        className="px-6 py-2 border-2 border-red-400 text-red-300 font-semibold rounded-lg hover:bg-red-400 hover:bg-opacity-15 hover:text-red-200 transition-all duration-200 uppercase tracking-wide"
                    >
                        Register here
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login