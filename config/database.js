const mongoose=require('mongoose');
const connection=()=>{
    mongoose.connect(process.env.DB_UI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{

        console.log(`mongoose connected with server:${data.connection.host}`)
    }) 
}
module.exports=connection;