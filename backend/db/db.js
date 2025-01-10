const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true , 
        console.log('Connected to db')
    }).catch(err => console.log(err));
}