import mongoose from "mongoose";

const connectionDatabase = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection Successfully : ", con.connection.host)
    } catch (err) {
        console.log("Connection Failed : ", err)
    }
}

export default connectionDatabase;