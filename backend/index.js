import express from 'express'
import  dotenv  from 'dotenv'
import ConnectMD from './mongoDB/ConnectDB.js'
import bookRoute from './routes/book.route.js'
import cors from 'cors'
import userRoute from './routes/user.route.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5959
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


ConnectMD()

// !routes
app.use('/books', bookRoute)
app.use('/user',userRoute)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))