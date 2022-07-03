import express from 'express';
const app = express();
import { router as route } from './route';

app.use(express.json());
app.use(route);

app.listen(3000, () => console.log('Server is up!'));
