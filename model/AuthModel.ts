import mongoose from "mongoose"
import { iAuth, iAuthData } from "../utils/interface"

const authModel = new mongoose.Schema<iAuth>(
   {
    name: {
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        trim: true
    },
    avatar:{
        type: String
    },
    avatarID: {
        type: String
    }
   }, {timestamps: true}
)

export default mongoose.model<iAuthData>("auths", authModel)