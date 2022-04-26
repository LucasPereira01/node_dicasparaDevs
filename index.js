//const { Person } = require("./person")
const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/connect')

//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')
dotenv.config()

connectToDataBase()

require('./modules/expres')


// Apenas o nome do arquivo atual
//const person = new Person('Lucas')





