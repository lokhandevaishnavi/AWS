import mongoose from "mongoose";

const Schema=mongoose.Schema;

const UserSchema=new Schema({
     username:{
        type:String
     },
     password:{
        type:String
     }

});
const User=mongoose.model('awsdata',UserSchema);
export default User;