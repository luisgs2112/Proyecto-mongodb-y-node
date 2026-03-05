 Sistema de Gestión Educativa - MongoDB & Node.js

Descripción del proyecto Este proyecto consiste en un sistema de gestión educativa desarrollado con Node.js y MongoDB. La aplicación permite administrar una plataforma de cursos mediante un módulo CRUD (Crear, Leer, Actualizar y Borrar) que interactúa con cinco colecciones de datos: Estudiantes, Cursos, Instructores, Pagos y Categorías, cumpliendo con los requisitos técnicos de modelado NoSQL y conectividad de base de datos.
Instrucciones


1.	git clone: Para obtener una copia local del proyecto, ejecuta el siguiente comando en tu terminal: git clone https://github.com/luisgs2112/Proyecto-mongodb-y-node.git

2. npm install: Instala las dependencias necesarias (Mongoose y Dotenv) situándote en la carpeta del proyecto y ejecutando: npm install

3.Configurar variables de entorno: Crea un archivo llamado .env en la raíz del proyecto y agrega la siguiente línea con tu cadena de conexión: MONGO_URI=mongodb://127.0.0.1:27017/SistemaCursos

4.	npm start: Para iniciar la aplicación y verificar la conexión con la base de datos, ejecuta: npm start
