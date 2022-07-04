import { iBill } from '../../types';

function getExpirationDate(bill: iBill) {
    const { value, billType } = bill;

    if (billType !== 'BANK') return null;

    const baseDate = new Date('1997-10-07');
    baseDate.setDate(baseDate.getDate() + parseInt(value.slice(33, 37), 10));

    return baseDate.toISOString().slice(0, 10).replace(/-/g, '/');
}

export { getExpirationDate };
