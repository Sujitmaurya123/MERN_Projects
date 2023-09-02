import {data} from './constants/data.js';
import News from './model/new-schema.js'
const DefaultData=async()=>{
    try{
       await News.insertMany(data);
       console.log("Data import successfully");

    }catch(error){
        console.log('Error',error.message);
    }
}
export default DefaultData;
