function generateBarCode(value: string): string {

    const barcode =
        value.slice(0, 4) +
        value[32] +
        value.slice(33) +
        value.slice(4, 9) +
        value.slice(10, 20) +
        value.slice(21, 31);

    return barcode;
}

export { generateBarCode };
