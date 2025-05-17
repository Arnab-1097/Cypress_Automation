import { SignUp } from "./signup"
import { ContactUs } from "./Contact Us"
import { CartToCheckout } from "./add to cart & checkout"
const signup = new SignUp()
const contactus = new ContactUs()
const carttocheckout = new CartToCheckout()
describe('POM test', () => {

  it('Signing up user', () => {
    cy.visit('https://www.automationexercise.com/')
    signup.userSignup()
  })

  it('Adding to Cart', () => {
    carttocheckout.addToCart()
    carttocheckout.checkOut()
    carttocheckout.payOrder()
  })

  it('Contact support', () => {
    contactus.contactUs()
  })
})





/*cy.visit('https://www.automationexercise.com/')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.get('[data-qa="signup-name"]').click().type("testuser201")
cy.get('[data-qa="signup-email"]').click().type('auto@example201.com')
cy.get('[data-qa="signup-button"]').click()
cy.get('#id_gender1').click()
cy.get('[data-qa="password"]').click().type("12345")
cy.get('[data-qa="days"]').select("11").should('have.value', '11')
cy.get('[data-qa="months"]').select("5").should('have.value', '5')
cy.get('[data-qa="years"]').select("1997").should('have.value', '1997')
cy.get('#newsletter').click()
cy.get('[data-qa="first_name"]').click().type("test")
cy.get('[data-qa="last_name"]').click().type("user201")
cy.get('[data-qa="company"]').click().type("test company201")
cy.get('[data-qa="address"]').click().type("test address201")
cy.get('[data-qa="country"]').select("Canada")
cy.get('[data-qa="state"]').click().type("Toronto")
cy.get('[data-qa="city"]').click().type("Vancouber")
cy.get('[data-qa="zipcode"]').click().type("12190")
cy.get('[data-qa="mobile_number"]').click().type("01123581300")
cy.get('[data-qa="create-account"]').click()
cy.get('b').should('have.text', 'Account Created!')
cy.get('[data-qa="continue-button"]').click()
cy.get('b').should('have.text', 'testuser201')*/
/*cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
cy.get('#quantity').clear().type("2")
cy.get(':nth-child(5) > .btn').click()
cy.get('.modal-title').should('have.text', 'Added!')
cy.get('.modal-footer > .btn').click()
cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
cy.contains('Shopping Cart').should('have.text', 'Shopping Cart')
cy.get('.disabled').should('have.text','2')
//cy.get('.col-sm-6 > .btn').should('be.enabled')
cy.get('.col-sm-6 > .btn').click()
cy.get('.active').should('have.text', 'Checkout')
cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
//cy.get(':nth-child(7) > .btn').should('be.enabled')
cy.get(':nth-child(7) > .btn').click()
cy.get('[data-qa="name-on-card"]').click().type("test credit card")
cy.get('[data-qa="card-number"]').click().type("4242424242424242")
cy.get('[data-qa="cvc"]').click().type("333")
cy.get('[data-qa="expiry-month"]').click().type("10")
cy.get('[data-qa="expiry-year"]').click().type('2030')
cy.get('.active').should('have.text', 'Payment')
cy.get('.heading').should('have.text', 'Payment')
//cy.get('[data-qa="pay-button"]').should('be.enabled')
cy.get('[data-qa="pay-button"]').should('have.text','Pay and Confirm Order')
cy.get('[data-qa="pay-button"]').click()
cy.get('[data-qa="order-placed"] > b').should('have.text','Order Placed!')
cy.get('[data-qa="continue-button"]').click()*/
/*cy.get(':nth-child(9) > a').click()
cy.get('.col-sm-12 > .title').should('have.text', 'Contact Us')
cy.get('[data-qa="name"]').click().type('test user 201')
cy.get('[data-qa="email"]').click().type('auto@example201.com')
cy.get('[data-qa="subject"]').click().type('test subject text')
cy.get('[data-qa="message"]').click().type("Thank you for the co-operation")
cy.get(':nth-child(6) > .form-control').selectFile("C:/Users/88017/Downloads/wallpaper.jpg")
cy.get('[data-qa="submit-button"]').click()
cy.get('.status').should("have.text", 'Success! Your details have been submitted successfully.')
cy.get('#form-section > .btn').click()*/







