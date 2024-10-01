import { before, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('open the browser and enter url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')
})

When('enter First Name{word}',(fname)=>{
    cy.get('#firstName').type(fname);
});
And('enter last name{word},',(lname)=>{
       cy.get('#lastName').type(lname)
})
And('enter email{word}',(email)=>{
    cy.get('#email').type(email)
})

And('enter contact{word}',(contact)=>{
    cy.get('#number').type(contact)
})

And('enter message{word}',(msg)=>{
    cy.get('//textarea[contains(text(),"")]').type(msg)
})

And('click on login',()=>{
    cy.get('[onclick="simpleFormSubmit()"]').click()
})

