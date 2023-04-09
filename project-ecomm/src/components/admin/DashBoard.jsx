import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
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

const categories = [
    {
        id: 1,
        name: "Clothing",
        products: [
            { id: 1, name: "T-Shirt", price: 19.99 },
            { id: 2, name: "Jeans", price: 49.99 },
            { id: 3, name: "Sweater", price: 39.99 },
        ],
    },
    {
        id: 2,
        name: "Electronics",
        products: [
            { id: 4, name: "Smartphone", price: 699.99 },
            { id: 5, name: "Laptop", price: 1199.99 },
            { id: 6, name: "Smartwatch", price: 249.99 },
        ],
    },
    {
        id: 3,
        name: "Home & Garden",
        products: [
            { id: 7, name: "Dining Table", price: 399.99 },
            { id: 8, name: "Sofa", price: 599.99 },
            { id: 9, name: "Area Rug", price: 99.99 },
            { id: 10, name: " Table", price: 299.99 },

        ],
    },
];

const Dashboard = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const chartData = {
        labels: categories.map((category) => category.name),
        datasets: [
            {
                label: "Products by Category",
                data: categories.map((category) => category.products.length),
                backgroundColor: [
                    "#F87171",
                    "#60A5FA",
                    "#FBBF24",
                    "#34D399",
                    "#A78BFA",
                    "#F472B6",
                ],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    return (
        <div className="container mx-auto h-[100vh] px-4">
            <h1 className="text-3xl font-bold mt-20 mb-4">Dashboard</h1>
            <div className="flex items-center space-x-4 mb-8">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={`${activeCategory.id === category.id
                            ? "bg-gray-200 text-gray-800"
                            : "bg-gray-800 text-white"
                            } px-4 py-2 rounded-md text-sm font-medium`}
                        onClick={() => setActiveCategory(category)}
                        variants={variants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category.name}
                    </motion.button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                    className="bg-white shadow-md rounded-lg p-4"
                    variants={variants}
                >
                    <h2 className="text-lg font-medium mb-4">
                        {activeCategory.name} Products
                    </h2>
                    <ul className="list-disc list-inside">
                        {activeCategory.products.map((product) => (
                            <li key={product.id} className="mb-2">
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div className="bg-[#d6ebf1] h-[80vh] shadow-md   rounded-lg p-4" variants={variants}>
                    <h2 className="text-lg font-medium mb-4">Products by Category</h2>
                    <Doughnut className="p-4" data={chartData} options={chartOptions} />
                </motion.div>
            </div>
            <Link to={"/addproduct"} className="text-4xl h-19 text-center">
                <AiOutlineCloudUpload />
            </Link>
        </div>
    );
};

export default Dashboard;
