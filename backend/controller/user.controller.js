import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const sighup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    const hasPassword = await bcrypt.hash(password,10)
    const createUser = await userModel.create({ fullName, email, password:hasPassword });
    res.status(201).json({ message: "User registered successfully" , createUser});
  } catch (error) {
    res.status(500).json({ error: "Server Error",error });
  }
};

export const login = async(req,res)=>{
        try {
            const {email, password} = req.body;
            const user = await userModel.findOne({email});
           const isMatch = await bcrypt.compare(password,user.password)
            if(!user || !isMatch) return res.status(400).json({error: "Invalid credentials"})
                res.status(200).json({message: "Login successful",user})
        } catch (error) {
            res.status(500).json({error: "Server Error",error});
        }
}