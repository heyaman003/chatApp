const mongoose=require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
const connectdb=async()=>{
  try {
       const conn=await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
       })
       console.log(`mongodb connected ${conn.connection.host}`)
  } catch (error) {
       console.log(error.message);
  }
}
module.exports=connectdb;