
const defaultState = () => {
     cy.contains('Lista de produtos')
     cy.contains('4 produtos por página')
     cy.contains('28 PRODUTOS ENCONTRADOS')
     cy.get('.pagination > li.active').contains('1')

     //number of pages showed 5
     cy.get('.pagination').find('li').should('have.length', 9) 
}
describe('Home Page', function() {

    before(() => {
         cy.visit('/')
    })
 
    it("checking default state", function() {
          defaultState()
    })

    it("Should find only one product", function(){
         cy.get('#input-search-bar').type('4pH65FxlKrip4L3S9Kw')
         cy.wait(1000)
         cy.get('.search-display-container').contains('4pH65FxlKrip4L3S9Kw')
         cy.get('.search-display-container').contains('1 PRODUTO ENCONTRADO')

         //Only page 1 should be showed
         cy.get('.pagination').find('li').should('have.length', 5) 

         cy.get('.remove-icon').click()
         cy.wait(1000)
         defaultState()
    })
   
 })