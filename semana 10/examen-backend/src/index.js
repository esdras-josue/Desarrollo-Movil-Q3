const express = require('express');
const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
})