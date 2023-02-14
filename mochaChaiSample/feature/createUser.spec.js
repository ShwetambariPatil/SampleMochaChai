import apiBody from "../testDataPayload/apiRequestBody";
import {expect} from 'chai';
import request from '../httpMethod/apiRequest';
import coffeeConfig from '../coffeeConfig';


const baseUrl = coffeeConfig.userApiUrl;
const userPayload = apiBody.userPayload();

describe('Create User', () => {

    it('Create User', (done) => {
       // const addingUrl = `${baseUrl}/coffee/notes`;
        request.apiPost(baseUrl,userPayload)
            .then(response => {
                expect(response.status).to.equal(201);
                //expect(response.data.message).to.equal("Success!");
                //expect(response.data.actions[0].obj.status).to.equal("coffee added");
                done();
            }).catch(done);
    });

    it('Customer instore purchases history', (done) => {
        const instorePurchaseHistoryUrl = `${baseUrl}/coffee/`;
        request.apiGet(instorePurchaseHistoryUrl)
            .then(response => {
                expect(response.status).to.equal(200);
                expect(response.data.result_count).to.equal(7);
                expect(response.data.customers[0].customerEmailAddress).to.equal("customer");
                done();
            }).catch(done);
    });
});
