import { getExpirationDate } from '../../src/services/billService/getExpirationDate';
import { iBill } from '../../src/types';

describe('getExpirationDate', () => {

    it('should be defined', () => {
        expect(getExpirationDate).toBeDefined();
    });

    it('should return BANK expiration date', () => {
        const mockedValue: iBill = {
            value: '21290001192110001210904475617405975870000002000',
            billType: 'BANK'
        };

        const mockedExpirationDate = '2018/07/16'

        const amount = getExpirationDate(mockedValue);

        expect(amount).toStrictEqual(mockedExpirationDate)

    });

    it('should return DEALERSHIP expiration date', () => {
        const mockedValue: iBill = {
            value: '817700000000010936599702411310797039001433708318',
            billType: 'DEALERSHIP'
        };

        const mockedExpirationDate = null

        const expirationDate = getExpirationDate(mockedValue);

        expect(expirationDate).toStrictEqual(mockedExpirationDate)

    });

});
