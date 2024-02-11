//API Codes
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MyLoginModel = require('./models/MyLogin')

const app = express()           //call express method
app.use(express.json())         //Transer data that we are tranfering from frontend to backend to json format
app.use(cors())                 //enabling cors as adds the necessary HTTP headers to responses, allowing the browser to permit requests from different origins

mongoose.connect("mongodb://localhost:27017/MyLogin")

app.post('/login', (req, res) => {
    const {email, password} = req.body;         //extract from request.body
    MyLoginModel.findOne({email: email})
    .then(user => {                             //user holds result of findOne
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Incorrect Password")
            }    
        } else {
            res.json("No record Exists i.e. Email not Registered. Pls signup")
        }
    })
})

app.post('/', (req, res) => {                   // redirect to /register if route is /register
    MyLoginModel.create(req.body)               //data(from frontend) for new record is obtained from the request body
    .then(collection => res.json(collection))   //.then is executed if data creation is succcessful- return data back to frontend i.e. client in json format
    .catch(err => res.json(err))        
})

app.listen(3001, () => {
    console.log("server running on port 3001")
})