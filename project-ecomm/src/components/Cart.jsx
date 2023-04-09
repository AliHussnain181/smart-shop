import React from 'react';
import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTrashAlt } from 'react-icons/fa';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

const Cart = () => {
    const items = [
        {
            id: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/150',
            price: 10.99,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/150',
            price: 15.99,
            quantity: 2,
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'https://via.placeholder.com/150',
            price: 8.99,
            quantity: 1,
        },
    ];

    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 py-4"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover mr-4" />
                        <div>
                            <h2 className="text-lg font-medium">{item.name}</h2>
                            <p className="text-gray-500">${item.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => handleRemoveItem(item.id)}>
                            <FaTrashAlt  />
                        </button>
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => handleMinusQuantity(item.id)}>
                            <AiOutlineMinus />
                        </button>
                        <p className="text-gray-500">{item.quantity}</p>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => handlePlusQuantity(item.id)}>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </motion.div>
            ))}
            <div className="mt-6">
                <h2 className="text-lg font-medium mb-2">Total</h2>
                <p className="text-gray-500">${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;
