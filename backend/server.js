const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Cambié el puerto para que no haya conflicto con el frontend

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de tu páginaaaaa!');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
