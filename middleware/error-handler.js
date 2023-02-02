const CustomAPIError = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  if (err.name === "ValidationError") {

    let errors = {};

    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });

    return res.status(400).json({ error: errors.name });
  }
  return res.status(500).json({ msg: "Something went wrong" });
}

module.exports = errorHandlerMiddleware