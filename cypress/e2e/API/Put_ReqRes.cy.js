/// <reference types="cypress" />

describe('Put_ReqRes', () => {
    it("Validar Update", () => {
        const dados = 
        {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({
            method: 'PUT',
            url: "https://reqres.in/api/users/2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });
})