const fs = require('fs')
const path = require('path')

// Criar um pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error) {
        return console.log('Pasta existente', error)
    }
    console.log('Pasta criada com sucesso')
})



// Criando arquivo dentro da pasta
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello node\n', (error) => {
    if (error) {
        return console.log('Erro:', error)
    }
    console.log('aquivo criado com sucesso')

    // adicionar a um aquivo
    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello world\n', (error) => {
        if (error) {
            return console.log("Error:", error)
        }
        console.log('Arquivo adiconado com sucesso ')
    })

    // Ler arquivos
    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf-8', (error, data) => {
        if (error) {
            return console.log('Error:', error)
        }
        console.log(data)
    })

})





// Ler Arquivos
