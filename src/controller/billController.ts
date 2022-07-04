import {
    Request,
    Response,
} from 'express';

import { getBill } from '../services/billService';

function billController(req: Request, res: Response) {
    const { value } = req.params;

    try {
        const result = getBill(value);

        res.status(200).json(result);

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json(error.message);
        }
    }

}

export { billController };
