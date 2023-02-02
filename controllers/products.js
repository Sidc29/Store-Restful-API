const Product = require("../models/product")
const CustomAPIError = require("../errors/custom-error")

const getAllProducts = async (req, res) => {

    const query = {}

    const { name, featured, company, sort, fields } = req.query

    // QUERY BY PRODUCT NAME
    if (name) {
        query.name = { $regex: name, $options: "i" }
    }

    // QUERY BY FEATURED (TRUE/FALSE)
    if (featured) {
        query.featured = featured === "true" ? true : false
    }

    // QUERY BY COMPANY NAME
    if (company) {
        query.company = { $regex: company, $options: "i" }
    }

    // SORTING, FILTERING, PAGINATION
    let result = Product.find(query)

    // DISPLAYS ONLY THE SELECTED FIELDS, FOR EG: NAME, COMPANY NAME, ETC
    if (fields) {
        const fieldsList = fields.split(",").join(" ")
        result = result.select(fieldsList)
    }

    // SORT BY PRODUCT NAME, COMPANY NAME, PRICE ETC (BOTH ASC AND DESC ORDER)
    if (sort) {
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    }

    // PAGINATION
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({ total_products: products.length, products })
}

const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    return res.status(200).json({ product })
}

const getProduct = async (req, res) => {
    const { id: productID } = req.params
    const product = await Product.findOne({ _id: productID })
    if (!product) {
        throw new CustomAPIError(`No product with ID ${productID} found`, 404)
    }
    res.status(200).json({ product })
}

const updateProduct = async (req, res) => {
    const { id: productID } = req.params
    const product = await Product.findByIdAndUpdate({ _id: productID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!product) {
        throw new CustomAPIError(`No product with ID ${productID} found`, 404)
    }
    res.status(200).json({ product })
}

const deleteProduct = async (req, res) => {
    const { id: productID } = req.params
    const product = await Product.findByIdAndDelete({ _id: productID })
    if (!product) {
        throw new CustomAPIError(`No product with ID ${productID} found`, 404)
    }
    res.status(200).json({ product })
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}