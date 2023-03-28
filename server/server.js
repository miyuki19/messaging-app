import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import server from './app.js'

const connectToDb = (url) => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(url)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.log('Error when connect to MongoDB. ', err)
    })
}

const startServer = async () => {
  try {
    connectToDb(process.env.MONGO_URL)
    const port = process.env.PORT || 3000
    server.listen(port, () => {
      console.log(`Server is running on port ${port}...`)
    })
  } catch (err) {
    console.log('Error when starting server. ', err)
  }
}

startServer()
