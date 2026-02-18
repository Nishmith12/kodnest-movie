import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', formData);
            login(res.data.user);
            navigate('/');
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.response?.data?.error || err.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')" }}>
            <div className="bg-black/75 p-16 rounded-lg w-full max-w-md text-white">
                <h2 className="text-3xl font-bold mb-8">Sign In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#333] text-white focus:outline-none focus:bg-[#454545]"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#333] text-white focus:outline-none focus:bg-[#454545]"
                        required
                    />
                    <button type="submit" className="bg-red-600 py-3 rounded font-bold mt-4 hover:bg-red-700 transition">
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-gray-400">
                    New to Kodnest Movie? <Link to="/register" className="text-white hover:underline">Sign up now</Link>.
                </div>
            </div>
        </div>
    );
};

export default Login;
