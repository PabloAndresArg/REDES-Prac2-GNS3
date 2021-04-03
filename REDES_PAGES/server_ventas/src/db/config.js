const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost/redes1-grupo22',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true
            });
        console.log("DB connected :)");
    } catch (e) {
        console.log(e);
        console.log("fallo al conectar la base de datos :( ");
    }
}


module.exports = {
    dbConnection,
}