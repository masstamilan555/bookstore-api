//libraries
import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DB connected successfully");
    } catch (err) {
        console.log("Failed to connect database")
        console.error(err);
    }
}

export default dbConnect