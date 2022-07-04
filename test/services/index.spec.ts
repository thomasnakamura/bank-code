import { getBill } from '../../src/services/billService/index';
import { generateBarCode } from '../../src/services/billService/generateBarcode';
import { getAmount } from '../../src/services/billService/getAmount';
import { getExpirationDate } from '../../src/services/billService/getExpirationDate';

jest.mock('../../src/services/billService/generateBarcode');
jest.mock('../../src/services/billService/getAmount');
jest.mock('../../src/services/billService/getExpirationDate');

describe('Service index', () => {

    it('should be defined', () => {
        expect(getBill).toBeDefined();
    });

    it('should return result with BANK billType', () => {
        const mockedBill = {
            value: '21290001192110001210904475617405975870000002000',
            billType: 'BANK'
        };

        const mockedBody = {
            barcode: '21299758700000020000001121100012100447561740',
            amount: '20.00',
            expirationDate: '2018/07/16'
        };

        (generateBarCode as any).mockReturnValue(mockedBody.barcode);
        (getAmount as any).mockReturnValue(mockedBody.amount);
        (getExpirationDate as any).mockReturnValue(mockedBody.expirationDate);

        const bill = getBill(mockedBill.value);

        expect(generateBarCode).toBeCalledWith(mockedBill);
        expect(getAmount).toBeCalledWith(mockedBill);
        expect(getExpirationDate).toBeCalledWith(mockedBill);

        expect(bill).toStrictEqual(mockedBody);
    });

    it('should return result with DEALERSHIP billType', () => {
        const mockedBill = {
            value: '817700000000010936599702411310797039001433708318',
            billType: 'DEALERSHIP'
        };

        const mockedBody = {
            barcode: '81770000000010936599704113107970300143370831',
            amount: '1.09',
            expirationDate: null
        };

        (generateBarCode as any).mockReturnValue(mockedBody.barcode);
        (getAmount as any).mockReturnValue(mockedBody.amount);
        (getExpirationDate as any).mockReturnValue(mockedBody.expirationDate);

        const bill = getBill(mockedBill.value);

        expect(generateBarCode).toBeCalledWith(mockedBill);
        expect(getAmount).toBeCalledWith(mockedBill);
        expect(getExpirationDate).toBeCalledWith(mockedBill);

        expect(bill).toStrictEqual(mockedBody);
    });
});
