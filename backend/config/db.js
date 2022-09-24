import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        //mongoDB connection initialized in async
        const mongoDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        //if promise fulfilled, log connection
        console.log("Mongo DB connected")
    }
    catch (err) {
        //catching error
        console.log(`Error: ${ err.message }`)
    }
}

export default connectDB