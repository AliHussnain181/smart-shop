import ErrorHandler from "../Utils/errorHandler.js";
import { Product } from "../models/Product.js";


export const getProduct = async (req, res, next) => {
    try {
        let product = await Product.find({});
        res.status(200).json(product)
    }
    catch (error) {
        next(error)
    }
}

export const addProduct = async (req, res, next) => {
    const { name, description, price, company, image, quantity, category } = req.body;

    if (!name || !description || !price || !company || !image || !quantity || !category)
        return next(new ErrorHandler("Please enter all field", 400));

    await Product.create({
        name, description, price, company, image, quantity, category
    });

    res.status(200).json("addProduct Successfully", 201);
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
        const product = await Product.findById(req.params.id)
        if (!product) return next(new ErrorHandler("product not found", 4000))
        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
        });

    } catch (error) {
        next(error)
    }
}

export const getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) return next(new ErrorHandler("Product not found", 404));

    res.status(200).json({
        success: true,
        product,
    });
};