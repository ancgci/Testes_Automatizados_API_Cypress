/// <reference types="cypress" />

describe('Get_ReqRes', () => {
    it("Validar List Users com 200", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Validar Body List Users", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2",
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    })

    it("Validar Single User com 200", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users/2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Validar Body Single User", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users/2",
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    })
    // Teste com erro pois retorna 200 ao invés de 400
    it("Validar Single User Sem Informar ID com 400", () => {
        cy.request({
           method: 'GET',
            url: "https://reqres.in/api/users/",
        }).then((response) => {
           expect(response.status).to.eq(400);
        });
     });
    // Teste com erro pois retorna 200 ao invés de 400
    it("Validar List Users User Sem Informar page com 400", () => {
       cy.request({
           method: 'GET',
            url: "https://reqres.in/api/users?page=",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it("Validar Single User Not Found com 404", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users/23",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it("Validar List Resource", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/unknown",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });

    it("Validar Single Resource ", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/unknown/2",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });

    it("Validar Single Resource Not Found", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/unknown/23",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });

    it("Validar Delay Response", () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?delay=3",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });

    



});