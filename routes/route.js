//
const express=require('express');
const router=express.Router();

//obtaining a schema from Contact.js

const Contact=require('../models/contacts')

//retrieving data
router.get('/contacts',(req,res,next)=>{
	//res.send("Retrieving the contact list");
	Contact.find(function(err,contacts){
		res.json(contacts);
	})
	//write a logic to retrieve a data from database
});

//add contacts using post method
//see the difference between contact and contacts in get and post
router.post('/contact',(req,res,next)=>{
	//adding a contact
    //create an object	
	let newContact=new Contact({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		phone:req.body.phone,
		email:req.body.email
	});
	
	// now we have created a new contact,we want to insert it to our database
	newContact.save((err,contact)=>{
		if(err)
		{
			res.json({msg:'failed to save the contact'});
		}
		else 
		{
			res.json({msg:'contact has been added sucessfully'});
		}
	});
	
});


//method for deleting contacts

router.delete('/contact/:id',(req,res,next)=>{
	//deleting a contact
    //mongodb creates an id for each contact so we use that id to fetch and delete the particular contact
    Contact.remove( {_id:req.params.id},function(err,result){
		
		if(err)
		{res.json(err);}
	    else {res.json(result);}
	})	;
	
});

module.exports=router;