import { iBill } from '../../types';

function getAmount(bill: iBill) {
    const { value, billType } = bill;

    const amount = billType === 'BANK' ? value.slice(37) : value.slice(4, 11) + value.slice(12, 16);

    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseFloat(amount) / 100).slice(1).replace(/,/g, '');
}

export { getAmount };
