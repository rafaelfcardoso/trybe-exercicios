import { expect } from "chai";
import { Model } from "mongoose";
import Sinon from "sinon";
import LensModel from "../../../../models/Lens"
import { lensMock, lensMockWithId } from "../mocks/lensMock";

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    Sinon.stub(Model, 'create').resolves(lensMockWithId);
    Sinon.stub(Model, 'findOne').resolves(lensMockWithId);
  })

  after(() => {
    Sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    })

    describe('searching a lens', () => {
      it('successfully found', async () => {
        const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
        expect(lensFound).to.be.deep.equal(lensMockWithId);
      });
    
      it('_id not found', async () => {
        try {
          await lensModel.readOne('123ERRADO');
        } catch (error: any) {
          expect(error.message).to.be.eq('InvalidMongoId');
        }
      });
    });
  })
})