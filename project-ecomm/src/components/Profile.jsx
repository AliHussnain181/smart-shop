import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdDashboardCustomize } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../redux/userSlice';
import Search from './Search';

const Profile = () => {
    
    const {user} = useSelector((state) => state.user)

    const dispatch = useDispatch();


    const handleLogout = () => {
       dispatch(getLogout())
    };

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <motion.div
                className="bg-white max-w-md mx-auto px-5 py-8 rounded-lg shadow-md flex flex-col justify-center items-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {user&&user.user.role ==="admin" && (
                    <div className="text-4xl mb-4 cursor-pointer text-[#c744c7]">
                        <Link to={'/admin'}>
                            <MdDashboardCustomize />
                        </Link>
                    </div>
                )}
                <h2 className="text-2xl font-medium mb-4">{user.user.name}</h2>
                <p className="text-gray-600 mb-4">{user.user.email}</p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </motion.div>
        </div>
        </>
    );
};

export default Profile;
