import { Route } from "express";
import {createData, getAllMsg, updateMsg, deleteMsg} from '../controllers/Message.Controller.js'
const route = Route()

route.post('/create', createData)
route.get('/', getAllMsg)
route.put('/:id', updateMsg)
route.delete('/:id', deleteMsg)

export default route;









 