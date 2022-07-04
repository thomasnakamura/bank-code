interface iBill {
    value: string;
    billType: 'BANK' | 'DEALERSHIP';
}

interface iResult {
    barcode: string;
    amount: string;
    expirationDate: string | null;
}

export { iBill, iResult};
