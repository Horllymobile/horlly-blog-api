const mongoose = require('mongoose');

module.exports =  async function() {

    try {
        const con = await mongoose.connect(process.env.MONGO_URI_PROD, {
            useNewUrlParser: true,
            useCreateIndex: true
        });

        if(con){
            console.log('Connected to mongodb');
        }
    } catch (error) {
        console.log(error.message);
    }
    
}