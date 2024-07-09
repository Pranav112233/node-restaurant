const express = require('express');
const router = express.Router();
const menuItems = require('../models/menuItems');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menuItems(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving menu item:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await menuItems.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching menu items:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//PARAMETRIZED API CALL
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (['sweet', 'sour', 'spicy'].includes(tasteType)) {
            const response = await menuItems.find({ taste: tasteType });
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

//UPDATE
//PUT Method to update
router.put('/:id', async(req,res)=>{
    try{
        const menuId = req.params.id; //Extract id from the URL parameter
        const updatedmenuData = req.body;

        const response = await menuItems.findByIdAndUpdate(menuId,updatedmenuData, {
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
//DELETE 
//Perfroming DELETE method to delete an information 
router.delete('/:id', async(req,res)=>{
    try{
        const menuId = req.params.id;//Extract the person's ID from the URL parameter

        //Assuming you have a person model
        const response = await menuItems.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error: 'Menu not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'Menu Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
module.exports = router