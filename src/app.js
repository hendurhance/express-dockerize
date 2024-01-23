import express from 'express';
import bodyParser from 'body-parser';
import salesRouter from './routes/sales.routes.js';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'API ready to receive requests! 🚀' });
});

app.use('/api/sales', salesRouter);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;