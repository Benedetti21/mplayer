const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Funcionando en el puerto 3000');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html')) 
});
