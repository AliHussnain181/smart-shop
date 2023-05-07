import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdDashboardCustomize } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../redux/userSlice';

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
                {user&&user.role ==="admin" && (
                    <div className=" text-mycolor hover:text-white hover:bg-mycolor hover:animate-pulse rounded-full p-3">
                        <Link to={'/admin'}>
                            <MdDashboardCustomize  size={32} />
                        </Link>
                    </div>
                )}
                <h2 className="text-2xl font-medium mb-4">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <button
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full"
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
