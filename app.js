require('dotenv').config();
const mongoose = require('mongoose');
const { Estudiante, Curso, Instructor, Pago, Categoria } = require('./models');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("------------------------------");
        console.log("Conectado a la BD"); 
        console.log("------------------------------");

        await inicializarDatos();
        await ejecutarCRUD();
    })
    .catch(err => console.error("Error de conexión:", err));

async function inicializarDatos() {

    const cuenta = await Estudiante.countDocuments();
    if (cuenta === 0) {
        await Estudiante.insertMany([
            { nombre: "Juan Perez", email: "juan@mail.com", edad: 20 },
            { nombre: "Maria Lopez", email: "maria@mail.com", edad: 22 },
            { nombre: "Pedro Ruiz", email: "pedro@mail.com", edad: 19 },
            { nombre: "Ana Sosa", email: "ana@mail.com", edad: 25 }
        ]);

        console.log("Datos iniciales insertados.");
    }
}

async function ejecutarCRUD() {

    const nuevo = await Estudiante.create({ nombre: "Luis Gomez", email: "luis@mail.com", edad: 30 });
    console.log("Documento Creado:", nuevo.nombre);


    const todos = await Estudiante.find();
    console.log("Total Estudiantes:", todos.length);


    await Estudiante.updateOne({ _id: nuevo._id }, { edad: 31 });
    console.log("Documento Actualizado");


    await Estudiante.deleteOne({ _id: nuevo._id });
    console.log("Documento Borrado");
}