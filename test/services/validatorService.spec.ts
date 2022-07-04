import { validator } from "../../src/services/validatorService";

describe('validatorService', () => {

    it('should be defined', () => {
        expect(validator).toBeDefined();
    });

    it('should return value', () => {
        const mockedValue = '21290001192110001210904475617405975870000002000'

        const value = validator(mockedValue);

        expect(value).toStrictEqual(mockedValue)

    });

    it('should throw invalid code error if length is not 47 or 48', () => {
        const mockedValue = '2129000119211000121090447561740597587000000200'

        try{
            validator(mockedValue);

        } catch(error: any){

            expect(error.message).toStrictEqual('Invalid code')
        }
    });

    it('should throw error if value has any special charactere', () => {
        const mockedValue = '212900011921100012109044756-17405975870000002000'

        try{
            validator(mockedValue);

        } catch(error: any){

            expect(error.message).toStrictEqual('Value can only have numbers!')
        }

    });

});
