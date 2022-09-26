import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

import connectDB from './config/db.js'

import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

//.env file initialize
dotenv.config();

//console.log(dotenv.config())

//mongoDB connection established
connectDB()

//express app initialize
const app = express();

app.use(express.json({ limit: '50mb' }))

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)


const __dirname = path.resolve()

//This is checking if the app is in production mode or development mode and serving the static HTML file if any endpoint other than the ones mentioned above is hit
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

//port value initialize
const PORT = process.env.PORT || 5000

//server listening on idle port
app.listen(
    PORT, console.log(`Server running in ${ process.env.NODE_ENV } at port ${ PORT }`)
)
