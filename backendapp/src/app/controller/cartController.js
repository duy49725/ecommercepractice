const Users = require("../model/user");

class CartController{
    async addToCart(req,res){
        console.log("add",req.body.itemId)
        let userData = await Users.findOne({_id:req.user.id});
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send("Added")
    }
    async removeFromCart(req,res){
        console.log("remove",req.body.itemId)
        let userData = await Users.findOne({_id:req.user.id});
        if(userData.cartData[req.body.itemId])
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send("Removed")
    }
    async getCart(req,res){
        console.log("GetCart");
        let userData = await Users.findOne({_id:req.user.id});
        res.json(userData.cartData);
    }
}
module.exports = new CartController();