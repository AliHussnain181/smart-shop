import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { clearFaild, clearLoading, productData } from '../redux/productSlice';
import { toast } from 'react-hot-toast';
import Search from './Search';


const Product = () => {

    const dispatch = useDispatch();

    const { data, loading, faild } = useSelector(state => state.product)


    useEffect(() => {
        if (faild) {
            toast.error(faild);
            dispatch(clearFaild());
        }

        if (loading) {
            toast.success(loading);
            dispatch(clearLoading());
        }

        dispatch(productData());
    }, [dispatch, faild, loading]);



    return (
        <>
       <Search/>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center pt-11 items-center">
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {data.map((product) => (
                        <motion.div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="px-4 py-2">
                                <h2 className="text-lg font-medium mb-2">{product.name}</h2>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                            <button>Buy</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </>

    );
};

export default Product;
