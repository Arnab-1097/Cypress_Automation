export class ContactUs {

    username_box = '[data-qa="name"]'
    useremail_box = '[data-qa="email"]'
    subject_box= '[data-qa="subject"]'
    message_box= '[data-qa="message"]'
    file_upload= ':nth-child(6) > .form-control'
    submit_button= '[data-qa="submit-button"]'

    contactUs() {
        cy.get(':nth-child(9) > a').click()
        cy.get('.col-sm-12 > .title').should('have.text', 'Contact Us')
        cy.get(this.username_box).click().type('test user 216')
        cy.get(this.useremail_box).click().type('auto@example216.com')
        cy.get(this.subject_box).click().type('test subject text')
        cy.get(this.message_box).click().type("Thank you for the co-operation")
        cy.get(this.file_upload).selectFile("C:/Users/88017/Downloads/wallpaper.jpg")
        cy.get(this.submit_button).click()
        cy.get('.status').should("have.text", 'Success! Your details have been submitted successfully.')
        cy.get('#form-section > .btn').click()

    }
}