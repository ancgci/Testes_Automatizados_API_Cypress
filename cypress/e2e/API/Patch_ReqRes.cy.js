/// <reference types="cypress" />

describe('Path_ReqRes', () => {
    it("Validar List Users com 200", () => {
        cy.request({
            method: 'PATCH',
            url: "https://reqres.in/api/users/2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });
});