import Message from "../models/Message";

class MessageService {
    async create(data) {
        const msg = new Message(data)
        const data = await msg.save();
        console.log("Successfully Save : ", data)
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