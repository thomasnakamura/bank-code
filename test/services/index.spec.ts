import { getBill } from '../../src/services/billService/index';
import { generateBarCode } from '../../src/services/billService/generateBarcode'
import { getAmount } from '../../src/services/billService/getAmount';


jest.mock('../../src/services/billService/generateBarcode');
jest.mock('../../src/services/billService/getAmount');



describe('Service index', () => {

    it('should be defined', () => {
        expect(getBill).toBeDefined();
    })

    it('should return result', () => {
        const bill = { 
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

        getBill(bill.value);

        expect(generateBarCode).toBeCalledWith(bill.value)
        expect(getAmount).toBeCalledWith(bill)

    })
})
