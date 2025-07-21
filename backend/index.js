//initialization 
import app from './app.js'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
const port = process.env.PORT || 3000; 


//routes 

app.get('/', (_req, res)=> { 
    res.send("this is the home page")
}); 

//starting the server in a port   
app.listen(port, () =>{ 
    console.log(`Server started at port ${port}`); 
})


//mongoose connection 
const uri = "mongodb+srv://admin:test123@cluster0.lexqnnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
    console.log("It is working");
  }
}
run().catch(console.dir);
