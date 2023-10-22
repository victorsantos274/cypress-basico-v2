/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
cy.visit('./src/index.html')

    })
    
    it('verifica o título da aplicação', function() {

cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })
    it('preencha os campos obrigatórios e envia o formulário', function() {
const longText = 'teste teste teste teste teste teste teste'

cy.get('#firstName').type('Victor')



cy.get('#lastName').type('Santos')

cy.get('#email').type('victor@gamil.com')
cy.get('#open-text-area').type(longText, {delay: 0})


cy.get('button[type="submit"]')

cy.get('.success').should('be.visible')

    })

    it('exibe mensagem de erro ao submiter e-mail com formatação inválida,', function(){
        cy.get('#firstName').type('Victor')
        cy.get('#lastName').type('santos')
        cy.get('#email').type('victor,gmail.com')
        cy.get('#open-text-area').type('testes')
        cy.get('button[type="submit').click()

        cy.get('.error').should('be.visible')
    }
    
    )

it.only('campo telefone ainda continua vazio quando preenchido com valor não nmérico', function(){
cy.get('#phone').type('abcdefg').should('have.value', '')

}

)

  })
  