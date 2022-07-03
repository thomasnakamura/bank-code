function validator(value: string) {

    if (value.length !== 47 && value.length !== 48) {
        throw Error('Invalid code');
    }

    if (isNaN(Number(value))) {
        throw Error('Value can only have numbers!');
    }

    return value;
}

export { validator };