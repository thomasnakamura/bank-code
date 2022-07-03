import { validator } from './validations/validator';


interface iBill {
    value: string,
    billType: string
};

function validateBarcode(value: string) {
    validator(value);

    const bill = {
        value,
        billType: value.length === 47 ? 'BANK' : 'DEALERSHIP'
    };

    const result = {
        barcode: generateBarCode(bill.value),
        amount: getAmount(bill),
        expirationDate: getExpirationDate(bill)
    };

    return result;
};

function generateBarCode(value: string): string {

    const barcode =
        value.slice(0, 4) +
        value[32] +
        value.slice(33) +
        value.slice(4, 9) +
        value.slice(10, 20) +
        value.slice(21, 31);

    return barcode;
};

function getExpirationDate(bill: iBill) {
    const { value, billType } = bill;

    if (billType !== 'BANK') return null;

    const baseDate = new Date('1997-10-07');
    baseDate.setDate(baseDate.getDate() + parseInt(value.slice(33, 37), 10));

    return baseDate.toISOString().slice(0, 10).replace(/-/g, '/');
};


function getAmount(bill: iBill) {
    const { value, billType } = bill;

    const amount = billType === 'BANK' ? value.slice(37) : value.slice(4, 11) + value.slice(12, 16)

    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseFloat(amount) / 100).slice(1).replace(/,/g, '');
};

// input con  856900000584030100649158110347945609001374691358
// input bank 21290001192110001210904475617405975870000002000
// output     21299758700000020000001121100012100447561740

// 00193373700000001000500940144816060680935031

export { validateBarcode };
