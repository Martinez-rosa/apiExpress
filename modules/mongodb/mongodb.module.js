var mongoose = require('mongoose');
var config = require('../../config/mongodb/mongodb-config.json'); // Archivo de configuración de MongoDB

module.exports.MongoDBUtil = {
    init: function() {
        // Conexión a MongoDB usando Mongoose
        mongoose.connect(`mongodb+srv://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.server}/${config.mongodb.database}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('✅ Conectado a MongoDB Atlas'))
        .catch(err => console.log('❌ Error de conexión a MongoDB:', err));
    }
};
