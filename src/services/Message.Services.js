import Message from "../models/Message.js";

class MessageService {
    async create(data) {
        const msg = new Message(data);
        const d = await msg.save();c
        console.log("Successfully Save : ", d)
    }   

    async getAll() {
        const getData = await Message.find()
        console.log("Successfully Fetch ", getData)
    }

    async updateMsg (id, data) {
        const update = await Message.findByIdAndUpdate(id, data);
        console.log("Updated Data : ", update)
    }

    async deleteById (id) {
        const del = await Message.deleteById(id)
        console.log("Delete Successfully:", del)
    }
}

export default new MessageService();