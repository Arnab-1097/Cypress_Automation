export class CartToCheckout {
    
    addToCart() {
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().type("2")
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-title').should('have.text', 'Added!')
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.contains('Shopping Cart').should("have.text", 'Shopping Cart')
        cy.get('.disabled').should('have.text', '2')
        //cy.get('.col-sm-6 > .btn').should('be.enabled')
        cy.get('.col-sm-6 > .btn').click()
    }

    checkOut() {
        cy.get('.active').should('have.text', 'Checkout')
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
        //cy.get(':nth-child(7) > .btn').should('be.enabled')
        cy.get(':nth-child(7) > .btn').click()
    }

    payOrder() {
        cy.get('[data-qa="name-on-card"]').click().type("test credit card")
        cy.get('[data-qa="card-number"]').click().type("4242424242424242")
        cy.get('[data-qa="cvc"]').click().type("333")
        cy.get('[data-qa="expiry-month"]').click().type("10")
        cy.get('[data-qa="expiry-year"]').click().type('2030')
        cy.get('.active').should('have.text', 'Payment')
        cy.get('.heading').should('have.text', 'Payment')
        //cy.get('[data-qa="pay-button"]').should('be.enabled')
        cy.get('[data-qa="pay-button"]').should('have.text', 'Pay and Confirm Order')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] > b').should('have.text', 'Order Placed!')
        cy.get('[data-qa="continue-button"]').click()
    }
}
