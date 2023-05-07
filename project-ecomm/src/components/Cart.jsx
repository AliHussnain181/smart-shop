import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { adjustQuantity, removeFromCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveFromCart = (_id) => {
        dispatch(removeFromCart(_id));
    };

    const handleAdjustQuantity = (_id, quantity) => {
        dispatch(adjustQuantity({ _id, quantity }));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
            {cartItems.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 py-4"

                >
                    <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover mr-4" />
                        <div>
                            <h2 className="text-sm w-[40vw] font-medium line-clamp-3">{item.name}</h2>
                            <p className="text-gray-500">${item.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1 text-md">
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => handleRemoveFromCart(item._id)}>
                            <FaTrashAlt />
                        </button>
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => handleAdjustQuantity(item._id, item.quantity - 1)}>
                            <AiOutlineMinus />
                        </button>
                        <p className="text-gray-500">{item.quantity}</p>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => handleAdjustQuantity(item._id, item.quantity + 1)}>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            ))}
            <div className="mt-6 flex justify-around">
                <p>Total Price: RS {getTotalPrice()}</p>
                <button
                    className="bg-pink-500 rounded-md text-black font-Roboto mb-8 py-2 px-7  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-500"
                >Check Out</button>
            </div>
        </div>
    );
};

export default Cart;
