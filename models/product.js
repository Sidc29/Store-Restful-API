const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a product name"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Must provide a price value"],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        required: [true, "Must provide a company name"],
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: ["{VALUE} is not supported"],
        }
    }
})

module.exports = mongoose.model("Product", ProductSchema)