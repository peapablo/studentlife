import express, { Request, Response } from "express"
import UserAgent from "user-agents"
import { verifyUser } from "../backendService/middleware/verifyUser"
import getProfile from "./routers/getProfile"
import init from "./routers/init"

const userRoutes = express()

userRoutes.get("/", verifyUser, init)

userRoutes.get("/profile/:id", getProfile)

export default userRoutes
