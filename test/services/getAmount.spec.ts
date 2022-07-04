import { getAmount } from '../../src/services/billService/getAmount';
import { iBill } from '../../src/types';

describe('getAmount', () => {

    it('should be defined', () => {
        expect(getAmount).toBeDefined();
    });

    it('should return BANK amount', () => {
        const mockedValue: iBill = {
            value: '21290001192110001210904475617405975870000002000',
            billType: 'BANK'
        };

        const mockedAmount = '20.00'

        const amount = getAmount(mockedValue);

        expect(amount).toStrictEqual(mockedAmount)

    });

    it('should return DEALERSHIP amount', () => {
        const mockedValue: iBill = {
            value: '817700000000010936599702411310797039001433708318',
            billType: 'DEALERSHIP'
        };

        const mockedAmount = '1.09'

        const amount = getAmount(mockedValue);

        expect(amount).toStrictEqual(mockedAmount)

    });

});
