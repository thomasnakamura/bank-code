const numberCheck = new RegExp(/[^0-9]/);

function validator(value: string) {

    if (value.length !== 47 && value.length !== 48) {
        throw Error('Invalid code');
    }

    if (numberCheck.test(value)) {
        throw Error('Value can only have numbers!');
    }

    return value;
}

export { validator };
