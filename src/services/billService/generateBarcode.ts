import { iBill } from '../../types';

function generateBarCode({ value, billType }: iBill): string {
    const barcode = billType === 'BANK'
        ? generateBankBarCode(value)
        : generateDealershipBarCode(value);

    return barcode;

}

function generateBankBarCode(value: string) {
    const barcode =
        value.slice(0, 4) +
        value[32] +
        value.slice(33) +
        value.slice(4, 9) +
        value.slice(10, 20) +
        value.slice(21, 31);

    return barcode;
}

function generateDealershipBarCode(value: string) {
    const barcode =
        value.slice(0, 11) +
        value.slice(12, 23) +
        value.slice(24, 35) +
        value.slice(36, 47);

    return barcode;
}


export { generateBarCode, generateBankBarCode, generateDealershipBarCode };
