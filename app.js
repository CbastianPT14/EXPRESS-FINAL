const express = require('express');
const app = express();
const port = 3000;

// Definir un arreglo con la lista de tareas
const listaDeTareas = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog"
  },
  {
    id: "789012",
    isCompleted: true,
    description: "Do the laundry"
  },
  // Puedes agregar más tareas según sea necesario
];

// Endpoint para obtener la lista de tareas
app.get('/tareas', (req, res) => {
  res.json(listaDeTareas);
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
