import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {

    const [product, setProduct] = useState("")

    const params = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let res = await fetch(`http://localhost:5000/api/v1/product/${params.id}`)
        res = await res.json();
        setProduct(res);
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };





    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                    <img
                        src={product.image}
                        alt="Product image"
                        className="w-[20rem]"
                    />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        {product.name}
                    </h1>
                    <p className="text-gray-600">
                        {product.description}
                    </p>
                    <hr />
                    <div className="w-[80%] flex justify-start gap-x-12 mx-aut sm:w-[70%] text-black   mt-7">
                        <div className="font-Roboto font-bold">
                            <p>Price</p>
                            <p>Company</p>
                            <p>Category</p>
                            <p>Quantity</p>
                        </div>
                        <div className=" text-left">
                            <p>{product.price}</p>
                            <p>{product.company}</p>
                            <p>{product.category}</p>
                            <p>{product.quantity}</p>
                        </div>
                    </div>
                    <hr />
                    <button className=" bg-black text-white font-Roboto mb-8 py-2 px-7  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-1000"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
