//import modules
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
//we have not installed path from node js command prompt because its already installed
var path=require('path');

//assigning to an variable app so that we can use express method
var app=express();

const route=require('./routes/route');

//Now we will connect to mongoDB using mogoose
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',()=>{
	console.log('Connected to MongoDB @ 27017');
});

// in case of error we will show what the error is

mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('Error in database connection :'+err);
	}
	
});


//port 
var port=3000;

//adding middleware -cors
app.use(cors());

//adding bodyparser
app.use(bodyparser.json());


//static file
//we can use direct path of a file
app.use(express.static(path.join(__dirname,'public')));


//adding routes
app.use('/api',route)

//defining routes and server testing
//slash is used here because we are defining routes for home page
app.get('/',(req,res)=>{
	
	res.send('foobar');
});

//binding server to the port
app.listen(port,()=>{
	//after a successful server connection
	console.log("Server started successsfully at port :"+port);
});