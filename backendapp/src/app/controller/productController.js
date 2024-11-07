const Product = require('../model/product')
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors());

class ProductController{
    
    async addProduct(req, res){
        let products = await Product.find({});
        let id;
        if(products.length > 0){
            let last_product_array = products.slice(-1);
            console.log('last product: ',last_product_array);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        }else{
            id = 1;
        }
        const product = new Product({
            id:id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });
        console.log(product);
        await product.save();
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        })
    }
    async removeProduct(req, res){
        await Product.findOneAndDelete({id:req.body.id});
        console.log("removed")
        res.json({
            success: true,
            name:req.body.name
        })
    }
    async getAllProduct(req, res){
        let product = await Product.find({})
        console.log("All Products Fetched");
        res.send(product);
    }
    async newcollection(req,res){
        let products = await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log("NewCollection Fetched");
        res.send(newcollection)
    }
    async popularInWomen(req,res){
        let products = await Product.find({category:"women"});
        let popular_in_women = products.slice(0,4);
        console.log("Popular in women fetchech");
        res.send(popular_in_women);
    }
}

module.exports = new ProductController();