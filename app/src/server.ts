import express, { Application } from 'express';
import connectDb from './db';
import { errorHandler } from './middleware/error';
import { router as authRoutes } from './routes/auth.route';
import { router as userRoutes } from './routes/user.routes';

const app: Application = express();

const port = process.env.PORT || 4000;

(async () => {
  await connectDb();
})();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`port is on localhost ${port}`);
});
