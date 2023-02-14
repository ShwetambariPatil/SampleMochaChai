import {expect} from 'chai';
import request from '../httpMethod/apiRequest';
import coffeeConfig from '../coffeeConfig';

const baseUrl = coffeeConfig.coffeeApiUrl;


describe('Hot Coffee', () => {
    it('User Get hot coffee description', (done) => {
        const hotCoffeeUrl = `${baseUrl}/hot`;
        request.apiGet(hotCoffeeUrl)
            .then(response => {
                expect(response.status).to.equal(200);
                expect(response.data[0].title).to.equal("Black");
                expect(response.data[0].description).to.equal("Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.");

                console.log("This is:"+response.data[0].description);
                done();
            }).catch(done);
    });
});
