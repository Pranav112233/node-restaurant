const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//GET method to get the person
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching persons:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//PARAMETRIZED API CALL
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (['chef', 'manager', 'waiter'].includes(workType)) {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.error('Error fetching person by work type:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//PUT Method to update
router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id; //Extract id from the URL parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData, {
            new: true, //Return the updated document
            runValidators: true, //Run Mongoose validations
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//Perfroming DELETE method to delete an information 
router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;//Extract the person's ID from the URL parameter

        //Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'Person Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
module.exports = router;