function validator(value: any) {

    if (value.length !== 47 && value.length !== 48) {
        throw Error('Invalid code');
    };

    if (isNaN(value)) {
        throw Error('Value can only have numbers!');
    };

    return value;
};

export { validator };