/// <reference types="cypress" />
describe('Delete_ReqRes', () => {
    it("Validar Delete", () => {
        cy.request({
            method: 'Delete',
            url: "https://reqres.in/api/users/2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});