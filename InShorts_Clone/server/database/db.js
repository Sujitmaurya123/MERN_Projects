import mongoose from 'mongoose';

const Connection =async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.ue6pxvs.mongodb.net/SHAREDATA?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    }catch(error){
        console.log('Error while connecting with the database',error);

    }
}
export default Connection