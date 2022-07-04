import { validator } from '../validatorService';
import { generateBarCode } from './generateBarcode';
import { getExpirationDate } from './getExpirationDate';
import { getAmount } from './getAmount';
import { iBill, iResult } from '../../types';

function getBill(value: string) {
    validator(value);

    const bill: iBill = {
        value,
        billType: value.length === 47 ? 'BANK' : 'DEALERSHIP'
    };

    const result: iResult = {
        barcode: generateBarCode(bill),
        amount: getAmount(bill),
        expirationDate: getExpirationDate(bill)
    };

    return result;
}

export { getBill };
