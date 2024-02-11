const mongoose = require('mongoose')

const MyLoginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const MyLoginModel= mongoose.model("collection", MyLoginSchema)

module.exports = MyLoginModel