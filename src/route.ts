import { Router } from 'express';
import { billController } from './controller/billController';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yml');

const router = Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/boleto/:value', billController);

export { router };
