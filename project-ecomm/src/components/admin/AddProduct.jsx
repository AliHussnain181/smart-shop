import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, clearFaild, clearLoading } from '../../redux/adminSlice';
import { toast } from 'react-hot-toast';


const AddProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')

    const categories = [
        'Laptops',
        'Mobiles',
        'Electronic Devices',
        'Others'
    ];

    const dispatch = useDispatch();

    const { loading, faild } = useSelector(state => state.admin);

    useEffect(() => {
        if (faild)
            toast.error(faild)
        dispatch(clearFaild());
        if (loading)
            toast.loading("Wait")
        dispatch(clearLoading());

    }, [dispatch, loading, faild])



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ name, description, price, image, category, company }));
    };

    return (
        <motion.form
            className="flex flex-col justify-center items-center w-full max-w-md mx-auto mt-10 px-5 py-20 rounded-lg shadow-md bg-[#191a2c] "
            onSubmit={handleSubmit}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-2xl font-medium mb-4">Add Product</h2>
            <div className="w-full mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Company Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Description
                </label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Price
                </label>
                <input
                    type="number"
                    id="text"
                    name="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Image Src
                </label>
                <input
                    id="message"
                    name="message"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={5}
                />
            </div>
            <select className='mb-7 w-[17rem] h-[33px] shadow-2xl bg-[#f4fafc]'
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option >Category</option>
                {
                    categories.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </motion.form>
    );
};

export default AddProduct;
