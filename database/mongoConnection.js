const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect('mongodb+srv://mongo_haseeb:Pakistan1998@cluster0.kbsj1uy.mongodb.net').then(()=>{
        console.log('connection successfull');
    }).catch((error)=>{
        console.log(error);
    })
}