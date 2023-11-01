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

cy.get('#email').type('victor@gmail.com')

cy.get('#open-text-area').type(longText, {delay: 0})

cy.get('button[type="submit"]').click()

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

it('campo telefone ainda continua vazio quando preenchido com valor não nmérico', function(){
cy.get('#phone').type('abcdefg').should('have.value', '')

}

)

it('validação quando tornamos o telefone obrigatório, e exibe mensagem de erro ao enviar sem preencher o campo telefone ', function() {

    cy.get('#firstName').type('Victor')

    cy.get('#lastName').type('santos')

    cy.get('#email').type('victor@gemail.com')

    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('teste')

    cy.get('button[type="submit"]').click   ()

    cy.get('.error').should('be.visible')

} ) 

it('verifica que foi digitado em campo corretamente, depois que foi limpo corretamente', function(){

    cy.get('#firstName').type('Victor').should('have.value', 'Victor').clear().should('have.value', '')
    cy.get('#lastName').type('Santos').should('have.value', 'Santos').clear().should('have.value', '')

    cy.get('#email').type('victor@gamil.com').should('have.value', 'victor@gamil.com').clear().should('have.value', '')

})

it('verificar mensagem de erro, ao tentar enviar formulário sem preencher campos obrigatórios', function(){

cy.get('button[type="submit"]').click()

cy.get('.error').should('be.visible')
    
})

it('envia formulário com sucesso com comando customizado', function(){
cy.fillMandatoryFieldsAndSubmit()

cy.get('.success').should('be.visible')

}
)
it('seleciona um produto (Youtube) por seu texto', function() {
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
        
    
      })

      it('Escolha produto pelo  seu                value', function() {

cy.get('#product').select('mentoria').should('have.value', 'mentoria')

      })

it('selecione o blog pelo seu indice', function() {

        cy.get('#product').select(1).should('have.value', 'blog')
})

it('marca tipo de atendimento feedback', function() {

    cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
})

it('marca tipo de atendimento', function() {
cy.get('input[type="radio"]').should('have.length', 3).each(function($radio) {

    cy.wrap($radio).check()

    cy.wrap($radio).should('be.checked' )
})

})

it('marca todos os checkbox, e desmarca o último', function() {
cy.get('input[type="checkbox"]')

.check()

.should('be.checked')

.last()
.uncheck()
.should('not.be.checked')


})

it('seleciona um arquivo da pasta fextures', function() {

    cy.get('input[type="file"]')
.should('not.have.value')
.selectFile('./cypress/fixtures/example.json')
.should(function($input) {
expect($input[0].files[0].name).to.equal('example.json')

})
})

it('seleciona um arquivo simulando um drag-and-drop', function() {
cy.get('input[type="file"]')
.should('not.have.value')
.selectFile('./cypress/fixtures/example.json', { action: "drag-drop"})
.should(function($input) {
    expect($input[0].files[0].name).to.equal('example.json')
})

})
it('seleciona um arquivo utilizando uma fixtures a qual foi dada um "alias"', function() {
cy.fixture('example.json').as('sampleFile')
cy.get('input[type="file')
.selectFile('@sampleFile')
.should(function($input) {

    expect($input[0].files[0].name).to.equal('example.json')
})
    
})

it('verifica que a página a"Política de privacidade" abre em outra aba sem a necessidade de um click', function() {
cy.get('#privacy a').should('have.attr', 'target', '_blank' )

})

it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
cy.get('#privacy a')
.invoke('removeAttr', 'target')
.click()
cy.contains('Talking About Testing')

})

  })
  
  