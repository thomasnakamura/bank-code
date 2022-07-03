import { Router } from 'express';
import { billsBarcodeController } from './controller/billsBarcodeController';

const router = Router();

router.get('/boleto/:value', billsBarcodeController);

export { router };

