import express, { json } from 'express'
import cors from 'cors'
import msgRoute from '../src/routes/messageRoutes.js'

const app = express()

app.use(cors())
app.use(json())
app.use('/api/', msgRoute)

export default app;