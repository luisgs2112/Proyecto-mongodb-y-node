const mongoose = require('mongoose');


const EstudianteSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    edad: Number,
    fechaInscripcion: { type: Date, default: Date.now }
});


const CursoSchema = new mongoose.Schema({
    titulo: String,
    instructor: String,
    precio: Number,
    duracion_meses: Number
});


const InstructorSchema = new mongoose.Schema({
    nombreCompleto: String,
    especialidad: String,
    experiencia_anios: Number,
    telefono: String
});


const PagoSchema = new mongoose.Schema({
    monto: Number,
    metodo: String,
    estado: String, 
    referencia: String
});


const CategoriaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    codigo: String,
    nivelDificultad: String
});

module.exports = {
    Estudiante: mongoose.model('Estudiante', EstudianteSchema),
    Curso: mongoose.model('Curso', CursoSchema),
    Instructor: mongoose.model('Instructor', InstructorSchema),
    Pago: mongoose.model('Pago', PagoSchema),
    Categoria: mongoose.model('Categoria', CategoriaSchema)
};