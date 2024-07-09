const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum: ['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    indegridients:{
        type:[String],
        enum: ['chicken wings','spices','sauce'],
    },
    num_sales:{
        type:Number,
        default: 0,
    }
})
const menuItems = mongoose.model('menuItems',menuItemsSchema);
module.exports = menuItems;