/// <reference types="cypress" />

describe('Post_ReqRes', () => {
    it("Validar CREATE com 200", () => {
        // Dados para enviar no body
        const dados = 
        {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/users",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    // Teste com erro pois cria sem body e retorna 201 ao invés de 400
    it("Validar CREATE Sem Dados com 400", () => {
        // Dados para enviar no body
        const dados = 
        {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/users",
            //body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it("Validar CREATE Registro com Sucesso retornando 200", () => {
        // Dados para enviar no body
        const dados = 
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de status code da requisição
            expect(response.status).to.eq(200);

            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    }); 
    
    it("Validar CREATE  Registro com Sucesso e token retornando 200", () => {
        // Dados para enviar no body
        const dados = 
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // confirma que o token foi criado
            let retorno = response.body;
            expect(retorno.token).to.eq("QpwL5tke4Pnpja7X4");
        });
    }); 

    it("Validar CREATE Registro sem Sucesso", () => {
        // Dados para enviar no body
        const dados = 
        {
            "email": "sydney@fife"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de status code da requisição
            expect(response.status).to.eq(400);

            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });

    it("Validar CREATE Login com Sucesso", () => {
        // Dados para enviar no body
        const dados = 
        {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de status code da requisição
            expect(response.status).to.eq(200);

            // confirma o body da requisição
            let retorno = response.body;
            expect(retorno.token).to.eq("QpwL5tke4Pnpja7X4");
        });
    });

    it("Validar CREATE Login sem Sucesso", () => {
        // Dados para enviar no body
        const dados = 
        {
            "email": "peter@klaven"
        }
        cy.request({
            // payload: conjunto de dados enviados na requisição
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de status code da requisição
            expect(response.status).to.eq(400);

            // confirma o body da requisição
            let retorno = response.body;
            cy.log(JSON.stringify(retorno, null, 2));
        });
    });
})