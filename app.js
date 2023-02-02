require('dotenv').config()
require('express-async-errors');

const express = require("express")
const app = express()

const connectDB = require("./db/connect")
const productsRouter = require("./routes/products")

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json())

// ROUTE
app.use("/api/v1/products", productsRouter)

const PORT = process.env.PORT || 3000

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        console.log("Connecting to DB...");
        await connectDB(process.env.MONGO_URI)
        console.log("Connection Success!");
        app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()

