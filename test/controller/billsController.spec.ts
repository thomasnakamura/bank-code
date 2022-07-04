import { billController } from '../../src/controller/billController';
import { getBill } from '../../src/services/billService';

jest.mock('../../src/services/billService');
const mockedResponse: any = {
    json: jest.fn().mockImplementation((result) => {
        jest.fn().mockReturnValue(result);
    }),
    status: jest.fn(() => mockedResponse),
    setHeader: jest.fn()
};

describe('billController', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(billController).toBeDefined();
    });

    it('should return 200', () => {
        const req: any = {
            params: {
                value: '21290001192110001210904475617405975870000002000'
            }
        };

        const res: any = { value: Date.now()};

        (getBill as any).mockReturnValue(res);

        billController(req, mockedResponse);

        expect(getBill).toBeCalledWith(req.params.value);

        expect(mockedResponse.json).toHaveBeenCalledWith(res);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);

    });

    it('should return 400', () => {
        const req: any = {
            params: {
                value: '21290001192110001210904475617405975870000002000'
            }
        };

        (getBill as any).mockImplementation(() => {
            throw Error('error');
        });

        billController(req, mockedResponse);

        expect(getBill).toBeCalledWith(req.params.value);

        expect(mockedResponse.json).toHaveBeenCalledWith('error');
        expect(mockedResponse.status).toHaveBeenCalledWith(400);


    });

});
