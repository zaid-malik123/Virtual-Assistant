import { uploadOnCloudinary } from "../config/Cloudinary.js";
import User from "../model/user.model.js";

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);

    } catch (error) {
        
    }
}

export const updateAssistant = async (req, res) => {
    try {
        const {assistantName, imageUrl} = req.body;

        let assistantImage;

        if(req.file){
            assistantImage = await uploadOnCloudinary(req.file.path);
        }
        else{
            assistantImage = imageUrl;
        } 
        const userId = req.userId;

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.assistantName = assistantName;
        user.assistantImage = assistantImage;

        await user.save();

        res.status(200).json(user);

    } catch (error) {
         res.status(500).json({ message: error.message });
    }
}