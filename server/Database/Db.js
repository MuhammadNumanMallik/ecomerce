const mongoose = require('mongoose');
require('dotenv').config()


const connectToDatabase = async () => {


   await mongoose.connect(process.env.URL)
    .then(() => console.log('Connected!'));


}


module.exports=connectToDatabase



// const connectMongoose = async () => {
//     try {
    
//         mongoose.set('strictQuery', false);
//         const conn = await mongoose.connect('mongodb://localhost:27017/blogs');
//         console.log(`Database connected to host: ${conn.connection.host}`);
        
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// module.exports = connectMongoose;