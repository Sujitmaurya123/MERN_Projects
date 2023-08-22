
import mongoose from "mongoose";


const DBconnection=async()=>{
    const MONODB_URL =`mongodb+srv://sujitsk:sujitkic6802maurya@cluster0.k3zjpm6.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URL,{
            useNewUrlParser:true,
            // useUnifiedTopology:true

        })

     console.log("Database connected successfully");
        
        

    }catch(error){
        console.log('Error while connection with the database',error.message);
    }
}

export default DBconnection;