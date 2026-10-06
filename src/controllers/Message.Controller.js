import MessageService from '../services/Message.Services.js'

export const createData = async(req, res) => {
    try {
        const save = await MessageService.create(req.body);
        res.status(201).json({
            message: "Successfully Created", save,
            status: 201
        })
    } catch (error){
        console.log("Failed to Created", error)
        res.status(400).json({
            message: "Failed to Created", save,
            status: 400
        })
    }
}

export const getAllMsg = async (req, res) => {
  try {
        const findAllMsg = await MessageService.getAll();
        res.status(200).json({
            message: "Successfully Fetch", 
            data: findAllMsg,
            status: 200
         })
    } catch (error){
           console.log("Failed to Fetch", error)
        res.status(400).json({
            message: "Failed to Fetch", save,
            status: 400
        })
    }
}

export const updateMsg = async (req, res) => {
    try {
        const {id} = params
        const update = await MessageService.updateMsg(id, req.body);
        res.status(200).json({
            message: "Successfully Updated", update,
            status: 200
         })
    } catch (error){
           console.log("Failed to Updated", error)
        res.status(400).json({
            message: "Failed to Updated", save,
            status: 400
        })
    }
}

export const deleteMsg = async (req, res) => {
    try {
        const {id} = params
        const del = await MessageService.deleteById(id);
        res.status(200).json({
            message: "Successfully Deleted", del,
            status: 200
         })
    } catch (error){
           console.log("Failed to Delete", error)
        res.status(400).json({
            message: "Failed to Delete", save,
            status: 400
        })
    }
}













 