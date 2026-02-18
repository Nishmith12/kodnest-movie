import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={`fixed top-0 w-full p-5 h-16 z-10 transition-all duration-500 ease-in ${show && "bg-black"}`}>
            <img
                className="fixed left-5 w-20 object-contain cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                onClick={() => navigate('/')}
            />
            <button
                onClick={handleLogout}
                className="fixed right-5 cursor-pointer text-white bg-red-600 px-4 py-1 rounded font-semibold hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    )
}

export default Nav;
