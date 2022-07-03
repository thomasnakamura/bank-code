import {
    Request,
    Response,
} from 'express';

import { validateBarcode } from '../services/billService'

async function billsBarcodeController(req: Request, res: Response) {
    const { value } = req.params;

    try {
        const result = await validateBarcode(value);

        return res.status(200).json(result);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json(error.message)
        }
    }

};

export { billsBarcodeController };
