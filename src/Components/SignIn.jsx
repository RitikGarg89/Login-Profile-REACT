import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUsers } from '../Utils/UserStorage'

function SignIn() {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        const user = {
            username,
            email,
            password
        }
        addUsers(user)
        console.log("User Successfully Signed in!!")
        navigate("/profile")
    }

    return (
        <div className='flex p-8 items-center flex-col justify-center rounded-3xl bg-black/20 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold mb-4'>Sign In</h2>
            <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
                <div className='w-full'>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => {
                        const value = e.target.value;
                        // Regex: alphanumeric + dots and underscores (no spaces, etc.)
                        if (!/^([a-z0-9._]*)$/.test(value)) {
                            alert("Only letters, numbers and underscores are allowed!")
                            return;
                        }
                        setUsername(value)
                    }} placeholder='Username' className='border border-gray-300 rounded-md px-4 py-2 w-full' required minLength={4} maxLength={20} />
                </div>
                <div className='w-full'>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border border-gray-300 rounded-md px-4 py-2 w-full' required />
                </div>
                <div className='w-full'>
                    <label htmlFor="password">Password</label>
                    <div className='border border-gray-300 rounded-md px-2 py-2 flex justify-center focus-within:outline-black  focus-within:outline-2  items-center w-full'>
                        <input type={visiblePassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full outline-none' required />
                        {visiblePassword ?
                            <button type="button" onClick={() => setVisiblePassword(prev => !prev)}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 3L21 21"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.6 10.6A2 2 0 0 0 13.4 13.4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M9.9 5.2A10.7 10.7 0 0 1 12 5C18.4 5 22 12 22 12A15.8 15.8 0 0 1 18.8 16.2M6.2 6.2C3.5 8.1 2 12 2 12S5.6 19 12 19C13.2 19 14.3 18.8 15.3 18.4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            :
                            <button type='button' onClick={() => setVisiblePassword(prev => !prev)}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 12S5.6 5 12 5S22 12 22 12S18.4 19 12 19S2 12 2 12Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </button>}
                    </div>
                </div>
                <div className='w-full'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className='border border-gray-300 rounded-md px-2 py-2 flex justify-center focus-within:outline-black  focus-within:outline-2  items-center w-full'>
                        <input type={visiblePassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='w-full outline-none' required />
                        {visiblePassword ?
                            <button type='button' onClick={() => setVisiblePassword(prev => !prev)}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 3L21 21"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.6 10.6A2 2 0 0 0 13.4 13.4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M9.9 5.2A10.7 10.7 0 0 1 12 5C18.4 5 22 12 22 12A15.8 15.8 0 0 1 18.8 16.2M6.2 6.2C3.5 8.1 2 12 2 12S5.6 19 12 19C13.2 19 14.3 18.8 15.3 18.4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            :
                            <button type='button' onClick={() => setVisiblePassword(prev => !prev)}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 12S5.6 5 12 5S22 12 22 12S18.4 19 12 19S2 12 2 12Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </button>}
                    </div>
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign In</button>
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    )
}

export default SignIn