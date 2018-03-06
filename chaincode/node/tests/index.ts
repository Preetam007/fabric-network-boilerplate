import { ChaincodeMockStub } from './../src/node-chaincode-utils/src/mocking/ChaincodeMockStub';
import { Transform } from './../src/node-chaincode-utils/src/utils/datatransform';
import { TestChaincode } from './TestChaincode';
import { ChaincodeReponse } from 'fabric-shim';

import { expect } from 'chai';

describe('Test Mockstub', () => {
    it('Test init', async () => {

        const chaincode = new TestChaincode();
        const stub = new ChaincodeMockStub('mock', chaincode);

        const args = ['arg1', 'arg2'];

        const response: ChaincodeReponse = await stub.mockInit('uudif', args);

        expect(Transform.bufferToObject(response.payload)['args']).to.deep.equal(args);
    });
});