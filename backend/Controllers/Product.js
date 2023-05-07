import ErrorHandler from "../Utils/errorHandler.js";
import { Product } from "../models/Product.js";


export const getProduct = async (req, res, next) => {
    try {
        const keyword = req.query.keyword || "";
        const category = req.query.category || "";

        const product = await Product.find({
            name: {
                $regex: keyword,
                $options: "i",
            },
            category: {
                $regex: category,
                $options: "i",
            },
        })
        res.status(200).json(product);
    }
    catch (err) {
        next(err)
    }
}

export const getDetails = async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    }
    else {
        res.send({ "result": "No Record find" })
    }
}

export const addProduct = async (req, res, next) => {
    const { name, description, price, company, image, quantity, category } = req.body;

    if (!name || !description || !price || !company || !image || !quantity || !category)
        return next(new ErrorHandler("Please enter all field", 400));

    const product = await Product.create({
        name, description, price, company, image, quantity, category
    });

    res.status(200).json(product, "addProduct Successfully", 201);
}



export const updateProduct = async (req, res, next) => {

    const { name, description, price, company, image, quantity, category } = req.body;

    const product = await Product.findById(req.params.id)

    if (!product) return next(new ErrorHandler("product not found", 4000))

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (company) product.company = company;
    if (image) product.image = image;
    if (quantity) product.quantity = quantity;
    if (category) product.category = category;

    await product.save();

    res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
    });


}




export const deleteProduct = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id)
        if (!products) return next(new ErrorHandler("product not found", 400))
        await products.deleteOne()

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
        });

    } catch (error) {
        next(error)
    }
}


export const getStats = async (req, res, next) => {
    const product = await Product.find()

    const Mobile = product.filter((i) => i.category === "Mobile")
    const Laptop = product.filter((i) => i.category === "Laptop")
    const Electronic = product.filter((i) => i.category === "Electronic Devices")
    const Other = product.filter((i) => i.category === "Others")

    res.status(200).json({
        Mobile: Mobile.length,
        Laptop: Laptop.length,
        Electronic: Electronic.length,
        Other: Other.length,
    })
}

