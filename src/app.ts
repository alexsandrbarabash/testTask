import express, { Request, Response } from 'express';
import cashiersRoutes from './routes/cashiers-router';

const PORT = 3000;

const app = express();

app.use('/', cashiersRoutes);

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  console.log(err.message);
  res.status(500).json({message: 'Sorry it`s our problem'});
});

app.listen(PORT, () => {
  console.log(`Server start on PORT:${PORT}`);
});
