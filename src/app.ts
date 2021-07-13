import express, { Request, Response } from 'express';

import cashiersRoutes from './routes/cashiers-router';
import { sequelize } from './db';
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json())
app.use('/', cashiersRoutes);

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  console.log(err.message);
  res.json({message: 'Sorry it`s our problem'});
});


app.listen(PORT, () => {
  console.log(`Server start on PORT:${PORT}`);
  sequelize.authenticate().then(() => {
    console.log('DB connected');
    return sequelize.sync({force: false})
  }).then(

  ).catch((e: Error) => {
    console.log(e.message);
  });
});
