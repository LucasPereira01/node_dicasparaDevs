const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zdyt6.mongodb.net/myFirstNode?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Erro ao conectar ao Mongo')
        }
        console.log('Conectado ao Mongo')
    })
}

module.exports = connectToDataBase