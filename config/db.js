import mongoose from "mongoose"

const connectDb = async () => {
    try {
        // console.log("mongodb", process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb
