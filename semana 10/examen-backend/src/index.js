const express = require('express');
const sequelize = require('../db/connection');
const Producto = require('../Models/Producto');
const app = express();

app.use(express.json());

app.get('/productos', async (req, res) => {
    try{
        const productos = await Producto.findAll();

        if( productos.length === 0) {
            return res.status(402).json({
                message: 'No hay productos',
            });
        }

        res.status(200).json(productos);

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los productos',
            error: error.message
        });
    }
});

app.post('/productos', async (req, res) => {
    try {
        
        const producto = await Producto.create(req.body);
        res.status(200).json(producto);

    } catch (error) {
        res.status(200).json({
            message: 'Error al guardar el producto',
            error: error.message
        });
    }
});

app.delete('/items/:id', async (req, res) => {
    try {
        const deleted = await Producto.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({
                message: 'Producto eliminado correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Producto no encontrado',
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el producto',
            error: error.message
        });
    }
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
})