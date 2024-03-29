import frontOfficeLocators from "../../element-locators/front-office-locators";
import clubsLocators from "../../element-locators/clubs-locators";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const getLocatorFile = (domain) => {
  switch (domain) {
  case 'Front Office':
    return frontOfficeLocators;
  case 'Clubs':
    return clubsLocators;
  default:
    throw new Error('Invalid domain provided: ' + domain);
  }
};

Given('I navigate to {string} page', (page) => {
  cy.c_navigateToPage(page);
});

Then('{string} page should be displayed', (page) => {
  cy.c_verifyPageDisplayed(page);
});

// Descope Buttons only
When('I click on {string} button in Descope page', (button) => {
  let value;
  const { login_with_email_button, login_button, forgot_password, register_now_with_email, code_submit_button, resend_button } = frontOfficeLocators.login_page;
  const { submit_registration_button, im_ready_button } = frontOfficeLocators.registration_page;
  switch (button.toLowerCase()) {
  case 'login with email':
    value = login_with_email_button;
    break;
  case 'login':
    value = login_button;
    break;
  case 'forgot password':
    value = forgot_password;
    break;
  case 'register now with email':
    value = register_now_with_email;
    break;
  case 'submit':
    value = code_submit_button;
    break;
  case 'submit registration':
    value = submit_registration_button;
    break;  
  case 'resend':
    value = resend_button;
    break;
  case 'im ready':
    value = im_ready_button;
    break;    
  default:
    throw new Error('Invalid button name provided: ' + button);
  }
  const element = value;
  cy.c_clickElementInDescope(element);
});

//Example: I click on "Login button" in "Login Page" of "Front Office"
When('I click on {string} in {string} of {string}', (elementName, page, domain) => {
  const locatorFile = getLocatorFile(domain);
  cy.c_getLocatorByNamePage(locatorFile, page, elementName).then((elementLocator) => {
    cy.get(elementLocator).should('be.visible').click();
  });
});

//Example: The "Avatar Update modal" of "Front Office" is displayed
Then('The {string} of {string} is displayed', (elementName, domain) => {
  const locatorFile = getLocatorFile(domain);
  cy.c_getLocatorByNamePage(locatorFile, "common", elementName).then((elementLocator) => {
    cy.get(elementLocator).should('be.visible');
  });
});

//Example: The "Avatar Update modal" of "Front Office" is displayed with message "Update Success!"
Then('The {string} of {string} is displayed with message {string}', (elementName, domain, messageValue) => {
  const locatorFile = getLocatorFile(domain);
  cy.c_getLocatorByNamePage(locatorFile, "common", elementName).then((elementLocator) => {
    cy.get(elementLocator).should('be.visible').and('contain',messageValue);
    cy.get(elementLocator).contains('×').click();
  });
});