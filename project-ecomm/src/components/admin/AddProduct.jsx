import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { productAdd } from '../../redux/adminSlice';
import { toast } from 'react-hot-toast';


const AddProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')

    const categories = [
        'Laptop',
        'Mobile',
        'Electronic Devices',
        'Others'
    ];

    const dispatch = useDispatch();

    const { loading, error, message } = useSelector(state => state.admin);

    useEffect(() => {

        if (error) {
            toast.error(error);
        }
        if (loading) {
            toast('wait...', {
                duration: 2000 
            })
        }
        if (message) {
            toast('Success!', {
                duration: 2000,
                style: {
                    backgroundColor: '#34D399',
                    color:'white' 
                  }
              });        }

    }, [dispatch, error, message, loading]);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productAdd({ name, description, price, image, category, company, quantity }));
    };

    return (
        <motion.form
            className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto mt-10 px-5 py-20  text-white bg-[Purple] "
            onSubmit={handleSubmit}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-2xl font-medium mb-4">Add Product</h2>
            <div className="w-full mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                    Company Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="block  font-medium mb-2">
                    Description
                </label>
                <textarea
                    type="text"
                    id="text"
                    name="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded-lg px-2 py-2 h-[23rem] text-gray-700 focus:outline-none"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="block  font-medium mb-2">
                    Price
                </label>
                <input
                    type="number"
                    id="text"
                    name="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="block  font-medium mb-2">
                    Quantity
                </label>
                <input
                    type="number"
                    id="text"
                    name="text"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                    Image Src
                </label>
                <input
                    id="message"
                    name="message"
                    value={image}
                    required
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                    rows={5}
                />
            </div>
            <select className='mb-7 w-[17rem] h-[33px] font-Roboto outline-none bg-[#008080]'
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
                className="bg-white text-black font-Roboto mb-8 py-2 px-7  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-500"
            >
                Update Product
            </button>
        </motion.form>
    );
};

export default AddProduct;
