import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './app/modules/user/user.route';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// application routes
app.use('/api/users', UserRouter);

export default app;
