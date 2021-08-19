describe('Quotes App', () => {
    // Make sure each test starts with fresh data
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    // helpers to collect dom elements
    const textInputName = () => cy.get('input[name=name]')
    const textInputEmail = () => cy.get('input[name=email]')
    const textInputPassword = () => cy.get('input[name=password]')
    const checkboxTerms = () => cy.get('input[name="terms"]')
    const submitBtn = () => cy.get(`button[id="submitBtn"]`)

    it('Sanity check to make sure that tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    })

    it("Check if all inputs works", () => {
        textInputName()
        .should('have.value', '')
        .type('Justin!')
        .should('have.value', 'Justin!')

        textInputEmail()
        .should('have.value', '')
        .type('justin@gmail.com')
        .should('have.value', 'justin@gmail.com')

        textInputPassword()
        .should('have.value', '')
        .type('codingIsAwesome!')
        .should('have.value', 'codingIsAwesome!')

        checkboxTerms().check()
        .should("be.checked")
        
    })

    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled')
      })
  

    it("check to see if submission works", ()=>{

        textInputName().type('Justin')
        textInputEmail().type("justin@gmail.com")
        textInputPassword().type("CodingIsAwesome!")
        submitBtn().should('not.be.disabled')
        submitBtn().click()
        cy.contains("Name: Justin")

    })

    it("check to see if validation works", ()=>{

        textInputName().type('Justin')
        textInputEmail().type("justin@gmail.com")
        textInputPassword().type("CodingIsAwesome!")
        textInputName().clear()
        submitBtn().should('be.disabled')
        cy.contains("Name is required")

    })
    
})