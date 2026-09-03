const express = require('express');
const cors = require('cors');
const sequelize = require('../db/connection');
const Asignatura = require('../models/Asignatura');
const Maestro = require('../models/Maestros');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/asignaturas', async (req, res) => {
    try {
        const asignaturas = await Asignatura.findAll();

        return res.status(200).json({
            message: 'Asignaturas obtenidas correctamente',
            data: asignaturas,
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al obtener las asignaturas',
            error: error.message,
        })
    }
});

app.post('/asignaturas', async (req, res) => {
    try {
        const asignatura = await Asignatura.create(req.body);

        return res.status(201).json({
            message: 'Asignatura creada correctamente',
            data: asignatura,
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al crear la asignatura',
            error: error.message,
        });
    }
});

app.put('/asignaturas/:id', async (req, res) => {
    try {
        const [updated] = await Asignatura.update(req.body, {
            where: {
                idAsignatura: req.params.id,
            },
        });

        if(updated) {
            const asignatura = await Asignatura.findByPk(req.params.id);
            return res.status(200).json({
                message: 'Asignatura actualizada correctamente',
                data: asignatura,
            });
        }
        else{
            res.status(400).json({
                message: 'Error al actualizar la asignatura',
                error: 'No se encontró la asignatura',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al actualizar la asignatura',
            error: error.message,
        });
    }
});

app.delete('/asignaturas/:id', async (req, res) => {
    try {
        const deleted = await Asignatura.destroy({
            where: {
                idAsignatura: req.params.id,
            }
        });

        if(deleted) {
            return res.status(200).json({
                message: 'Asignatura eliminada correctamente',
                data: { deletedCount: deleted },
            });
        }
        else{
            res.status(400).json({
                message: 'Error al eliminar la asignatura',
                error: 'No se encontró la asignatura',
            });
        }
    } catch(error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al eliminar la asignatura',
            error: error.message,
        });
    }
});

// endpoints para Maestros

app.get('/maestros', async (req, res) => {
    try {
        const maestros = await Maestro.findAll();

        return res.status(200).json({
            message: 'Maestros obtenidos correctamente',
            data: maestros,
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al obtener los maestros',
            error: error.message,
        });
    }
});

app.post('/maestros', async (req, res) => {
    try {
        const maestro = await Maestro.create(req.body);

        return res.status(201).json({
            message: 'Maestro creado correctamente',
            data: maestro,
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al crear el maestro',
            error: error.message,
        })
    }
});

app.put('/maestros/:id', async (req, res) => {
    try {
        const [updated] = await Maestro.update(req.body,{
            where: {
                idMaestro: req.params.id,
            },
        });

        if(updated){
            const maestro = await Maestro.findByPk(req.params.id);
            return res.status(200).json({
                message: 'Maestro actualizado correctamente',
                data: maestro,
            });
        }
        else{
            res.status(400).json({
                message: 'Error al actualizar el maestro',
                error: 'No se encontró el maestro',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al actualizar el maestro',
            error: error.message,
        });
    }
});

app.delete('/maestros/:id', async (req,res) => {
    try {
        const deleted = await Maestro.destroy({
            where:{
                idMaestro: req.params.id,
            },
        });

        if(deleted) {
            return res.status(200).json({
                message: 'Maestro eliminado correctamente',
                data: { deletedCount: deleted },
            });
        }
        else{
            res.status(400).json({
                message: 'Error al eliminar el maestro',
                error: 'No se encontró el maestro',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error al eliminar el maestro',
            error: error.message,
        });
    }
});


app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
})