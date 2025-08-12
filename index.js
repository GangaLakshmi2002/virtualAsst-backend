import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
dotenv.config()


const app = express()
app.use(cors({
    origin: ["http://localhost:5173", "https://virtualasst-frontend.onrender.com"],
    credentials: true
}))
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)


app.listen(port, () => {
    connectDb()
    console.log("server started")
})

