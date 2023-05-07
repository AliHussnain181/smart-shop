import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productData } from '../redux/productSlice';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai"
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/adminSlice';
import {GrDocumentUpdate} from "react-icons/gr"



const Product = () => {

    const { user } = useSelector(state => state.user)
    const { data } = useSelector(state => state.product)


    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.admin)

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');



    const deletepd = (productId) => {
        dispatch(deleteProduct(productId));
    };

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
            toast.success("success deleted")
        }
        dispatch(productData({ category, keyword }));
    }, [dispatch, error, message, loading]);

    useEffect(() => {
        dispatch(productData({ category, keyword }));
    }, [keyword, dispatch, category]);

    const categories = [
        'Laptop',
        'Mobile',
        'Electronic Devices',
        'Others'
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-[#0072bb] via-[#2e003e] to-[#ff3377] py-11 px-4 sm:px-6 lg:px-8 mt-40 h-[14rem]">
                <form
                    className="relative w-full max-w-md mx-auto"
                >
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            placeholder="Search"
                            className="bg-white focus:outline-none  py-2 pr-8 rounded-md shadow-sm w-full"
                        />
                        <button type="submit" className="ml-3">
                            <FaSearch className="h-5 w-5 text-[white]" />
                        </button>
                    </div>
                </form>
                <section className=" w-full ">
                    <div className="mt-10">
                        <h1 className='text-white text-center mb-4 font-semibold font-Roboto text-lg'>CHOOSE CATEGORIES</h1>
                        <div className="grid grid-cols-4 gap-3">
                            {categories.map((item, index) => (
                                <div key={index} onClick={() => setCategory(item)} className=" cursor-pointer">
                                    <div className="overflow-hidden rounded-lg">
                                    </div>
                                    <div className=" w-[5rem] sm:w-[10rem] text-center text-lg ">
                                        <span className="block mb-8 mx-auto font-semibold text-white hover:text-amber-300 transition-all duration-500">{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-gray-100 min-h-screen flex flex-col justify-center pt-11 items-center">
                <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {data.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center"
                            >
                                <Link to={`/detail/${product._id}`}>

                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                    <div className="px-4 py-2">
                                        <h2 className="text-sm font-medium mb-2 line-clamp-3">{product.name}</h2>
                                        <p className="text-gray-600 text-center">RS {product.price}</p>
                                    </div>
                                </Link >
                                <div className='flex items-center gap-x-28 '>
                                    {user && user.role === 'admin' && (
                                        <div onClick={() => deletepd(product._id)} className="text-3xl w-11 text-red-700 cursor-pointer text-center py-11">
                                            <AiFillDelete />
                                        </div>
                                    )}
                                    {user && user.role === 'admin' && (
                                        <Link to={`/update/${product._id}`} className="text-2xl  cursor-pointer text-center py-11">
                                            <GrDocumentUpdate />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>

    );
};

export default Product;
