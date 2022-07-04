interface iBill {
    value: string;
    billType: string;
}

interface iResult {
    barcode: string;
    amount: string;
    expirationDate: string | null;
}

export { iBill, iResult};
