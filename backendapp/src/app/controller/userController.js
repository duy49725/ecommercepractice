const Users = require('../model/user')
const jwt = require("jsonwebtoken");
class UserController{
    async signUp(req,res){
        let check = await Users.findOne({email:req.body.email});
        if(check){
            return res.status(400).json({success:false,errors:"existing the user found with same id or email address"})
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i]=0;
        }
        const user = new Users({
            name: req.body.username,
            email:req.body.email,
            password:req.body.password,
            cartData:cart
        })
        await user.save();
        const data = {
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token})
    }
    async login(req,res){
        let user = await Users.findOne({email:req.body.email});
        if(user){
            const passCompare = req.body.password === user.password;
            if(passCompare){
                const data = {
                    user:{
                        id:user.id
                    }
                }
                const token = jwt.sign(data,'secret_ecom');
                res.json({success:true,token});
            }else{
                res.json({success:false,error:"Wrong Password"});
            }
        }else{
            res.json({success:false,error:"Wrong email"})
        }
    }
}

module.exports = new UserController();