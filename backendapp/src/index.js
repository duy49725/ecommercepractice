const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const route = require('./routers');
app.use(express.json())
app.use(cors());

// Database Connection With Mongodb
mongoose.connect('mongodb+srv://bechuoi:bechuoi03@cluster0.jggol.mongodb.net/ecommerce')
app.get("/", (req, res) => {
    res.send("Express App is Running")
})
// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})

//Creating Upload Endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

route(app);

app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on Port " + port)
    }else{
        console.log("Error: " + error)
    }
})
