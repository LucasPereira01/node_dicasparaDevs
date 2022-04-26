const express = require('express')
const res = require('express/lib/response')
const UserModel = require('../src/model/user.model')
const app = express()
app.use(express.json())
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './src/views')


// medleware
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)

    next()
})

app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})

    res.render('index', { users: users })
})

//Busca Usuarios
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// Insere Usuario
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Busca usuarios pelo Id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findById(id)

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


//Altera um campo expecifido do usuario
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(user)

    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//Exclui um usuario pelo id
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})




app.listen(port, () => console.log('Rodando na porta ' + port)) 