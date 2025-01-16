import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // Admin Login Page Handle

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/login', { email, password });
            localStorage.setItem('token', res.data.token);
            window.location.href = '/AdminDashboard/Dashboard';
        } catch (err) {
            setError(err.response.data || 'Login failed');
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Oops! Something went wrong.\nPlease try again.");
            }
        }
    };

    return (
        <body className="bg-gray-100 h-screen flex items-center justify-center">
            {/* Login */}
            <div className="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">

                <form onSubmit={handleSubmit}>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">Admin Login</h1>
                            <hr />
                            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input className="pl-2 outline-none border-none w-full"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />

                            </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <input className="pl-2 outline-none border-none w-full"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />

                            </div>
                        </div>


                        <button type="submit" className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">
                            Login
                        </button>

                        <div className='text-red-500 py-4 text-center font-semibold'>
                            {error && <p>{error}</p>}
                        </div>
                        <hr />

                    </div>
                    <div className="pt-6 text-base font-semibold leading-7">
                        <p className="font-sans text-red-500 text-md hover:text-red-800">
                            <a href="/" className="absolute">&larr; Home</a>
                        </p>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default Login;
