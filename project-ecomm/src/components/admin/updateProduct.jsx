import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')

    const params = useParams();

    const { user } = useSelector(state => state.user)
    

    
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let res = await fetch(`http://localhost:5000/api/v1/product/${params.id}`)
        let result = await res.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
        setImage(result.image)
        setQuantity(result.quantity)
        setDescription(result.description)


    }

    const categories = [
        'Laptop',
        'Mobile',
        'Electronic Devices',
        'Others'
    ];

    const updateProduct = async (e) => {
        e.preventDefault()
        let result = await fetch(`http://localhost:5000/api/v1/product/${params.id}`, {
            method: 'PUT',
            withCredentials: true,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name, description, price, company, image, quantity, category }),

        })
        result = await result.json()
    }


    return (
        <>
            {user && user.role === "admin" ? (
                <form
                    className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto mt-10 px-5 py-20  text-white bg-[Purple] "
                    onSubmit={updateProduct}

                >
                    <h2 className="text-2xl font-medium mb-4">Update Product</h2>
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
                        Submit
                    </button>
                </form>
            ) : (
                <h1 className='text-5xl text-red-500 m-auto text-center'>Only Admin Allowed</h1>
            )
            }
        </>
    )
}

export default UpdateProduct