import { Router } from 'express';
import { billController } from './controller/billController';

const router = Router();

router.get('/boleto/:value', billController);

export { router };
