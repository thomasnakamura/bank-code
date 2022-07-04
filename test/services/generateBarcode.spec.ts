import { generateBankBarCode, generateBarCode, generateDealershipBarCode } from '../../src/services/billService/generateBarcode';
import { iBill } from '../../src/types';

describe('generateBarCode', () => {

    it('should be defined', () => {
        expect(generateBarCode).toBeDefined();
    });

    it('should return BANK barcode', () => {
        const mockedValue: iBill = {
            value: '21290001192110001210904475617405975870000002000',
            billType: 'BANK'
        };

        const mockedBarcode = '21299758700000020000001121100012100447561740';

        const barcode = generateBarCode(mockedValue);

        expect(barcode).toStrictEqual(mockedBarcode);

    });

    it('should return DEALERSHIP barcode', () => {
        const mockedValue: iBill = {
            value: '817700000000010936599702411310797039001433708318',
            billType: 'DEALERSHIP'
        };

        const mockedBarcode = '81770000000010936599704113107970300143370831';

        const barcode = generateBarCode(mockedValue);

        expect(barcode).toStrictEqual(mockedBarcode);

    });

});

describe('generateBankBarCode', () => {

    it('should be defined', () => {
        expect(generateBankBarCode).toBeDefined();
    });

    it('should return BANK barcode', () => {
        const mockedValue = '21290001192110001210904475617405975870000002000';

        const mockedBarcode = '21299758700000020000001121100012100447561740';

        const barcode = generateBankBarCode(mockedValue);

        expect(barcode).toStrictEqual(mockedBarcode);

    });

});

describe('generateDealershipBarCode', () => {

    it('should be defined', () => {
        expect(generateDealershipBarCode).toBeDefined();
    });

    it('should return DEALERSHIP barcode', () => {

        const mockedValue = '817700000000010936599702411310797039001433708318';

        const mockedBarcode = '81770000000010936599704113107970300143370831';

        const barcode = generateDealershipBarCode(mockedValue);

        expect(barcode).toStrictEqual(mockedBarcode);

    });

});


