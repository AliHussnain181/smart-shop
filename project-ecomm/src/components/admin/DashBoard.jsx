import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { AiOutlineCloudUpload } from "react-icons/ai"
import { Link } from "react-router-dom";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';
import { productData } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productStats } from "../../redux/adminSlice";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);

const Dashboard = () => {


    const { data } = useSelector(state => state.product)

    const [category, setCategory] = useState("");
    const [keyword, setKeyword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productData({ category, keyword }));
        setKeyword('')
    }, [keyword, dispatch, category]);



    const categories = [
        'Laptop',
        'Mobile',
        'Electronic Devices',
        'Others'
    ];

    useEffect(() => {
        dispatch(productStats());
    }, [dispatch]);

    const { stats } = useSelector(
        (state) => state.admin
    );



    const chartData = {
        labels: ["Mobile", "Laptop", "Electronic Devices", "Others"],
        datasets: [
            {
                label: "Products by Category",
                data: stats
                    ? [stats.Mobile, stats.Laptop, stats.Electronic, stats.Other]
                    : [0, 0, 0,0],
                backgroundColor: [
                    "#F87171",
                    "#60A5FA",
                    "#FBBF24",
                    "#34D399",
                ],
                borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };



    return (
        <div className="container mx-auto h-[100vh] px-4">
            <h1 className="text-3xl font-bold mt-20 mb-4">Dashboard</h1>
            <div className="flex items-center space-x-4 mb-8">
                {categories.map((item, index) => (
                    <button
                        key={index}
                        className={` px-4 py-2 rounded-md text-sm font-medium bg-[black] text-white`}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div
                    className="bg-[#40E0D0] shadow-md rounded-lg p-4 h-[80vh]  overflow-y-scroll"
                >
                    <h2 className="text-lg font-medium mb-4">
                        {/* {item} Products */}
                    </h2>
                    <ul className="list-disc list-inside">
                        {data.map((product) => (

                            <div key={product._id} className="flex justify-between items-center list-none ">
                                <li className="mr-20 py-3 ">{product.name} </li>
                                <li className="text-center mx-3">RS  {product.price}</li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#40E0D0] h-[80vh] shadow-md   rounded-lg p-4">
                    <h2 className="text-sm font-medium mb-2">Products by Category</h2>
                    <Doughnut className="p-4" data={chartData} options={chartOptions} />
                </div>
            </div>
            <Link to={"/addproduct"} className="text-4xl h-19 text-center">
                <AiOutlineCloudUpload />
            </Link>
        </div>
    );
};

export default Dashboard;
