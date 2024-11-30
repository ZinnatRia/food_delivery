import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ria:admin@cluster0.7aavp.mongodb.net/food_website').then(()=>console.log("DataBase Connected"));
}