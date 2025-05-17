export class SignUp {

    userSignup() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').click().type("testuser217")
        cy.get('[data-qa="signup-email"]').click().type('auto@example217.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').click().type("12345")
        cy.get('[data-qa="days"]').select("11").should('have.value', '11')
        cy.get('[data-qa="months"]').select("5").should('have.value', '5')
        cy.get('[data-qa="years"]').select("1997").should('have.value', '1997')
        cy.get('#newsletter').click()
        cy.get('[data-qa="first_name"]').click().type("test")
        cy.get('[data-qa="last_name"]').click().type("user216")
        cy.get('[data-qa="company"]').click().type("test company216")
        cy.get('[data-qa="address"]').click().type("test address216")
        cy.get('[data-qa="country"]').select("Canada")
        cy.get('[data-qa="state"]').click().type("Toronto")
        cy.get('[data-qa="city"]').click().type("Vancouber")
        cy.get('[data-qa="zipcode"]').click().type("12190")
        cy.get('[data-qa="mobile_number"]').click().type("01123581300")
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('have.text', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', 'testuser217')
    }
}