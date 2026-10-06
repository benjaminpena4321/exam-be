import {createData, getAllMsg, updateMsg  } from  '../controllers/Message.Controller.js'
import Router from 'router'

const route = Router()

route.post('/', createData)
route.get('/', getAllMsg)
route.put('/:id', updateMsg )

export default route;