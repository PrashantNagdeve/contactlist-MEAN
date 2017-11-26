//this file will have contact schema
//In this file we will bring database ie mongoDB so that we can talk to our DB
const mongoose=require('mongoose');
const ContactSchema=mongoose.Schema({
	//this is where we will pass a scheme which we want to use for our contact
	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	phone:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:false
	}
});
//exporting a schema
const Contact=module.exports=mongoose.model('Contact',ContactSchema);