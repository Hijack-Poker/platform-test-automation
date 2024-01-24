import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import FrontOffice_PO from "../page-objects/FrontOffice_PO";

const frontOfficePage = new FrontOffice_PO();


// Action methods
Given("I login in the HiJack Poker", () => {
    frontOfficePage.navigate();
});

When("I logged in using the testing account", () => {
    frontOfficePage.clickLoginDetails();
});

When("I click my profile", () => {
    cy.wait(3000);
    frontOfficePage.clickProfile();
});

When("I click the logout button", () => {
    frontOfficePage.clickLogoutBtn();
});

When("I access the website by manually entering the URL", () => {
    frontOfficePage.reEnterUrl();
});

When("I input the test email in the login email", () => {
    frontOfficePage.inputEmailAddress();
});

When("I click the forget password", () => {
    frontOfficePage.clickForgetPasswordBtn();
})

When("I click the Login with Email option", () => {
    frontOfficePage.clickLoginEmailButton();
})

When("I input invalid email for login", () => {
    frontOfficePage.inputInvalidEmailAddress();
})

When("I input invalid password", () => {
    frontOfficePage.inputInvalidPassword();
})

When("I click the login button", () => {
    frontOfficePage.clickLoginBtn();
})

When("I click the edit {string} on Account Details", (fieldValue) => {
    frontOfficePage.clickNameTxtField(fieldValue);
})

When("I empty the name field of {string}", (boxValue) => {
    frontOfficePage.clearNameTxtField(boxValue);
})

When("I click the Save button of {string} on account details", (btnValue) => {
    frontOfficePage.clickSaveButton(btnValue);
})

When("I click the Account button", () => {
    frontOfficePage.clickAccountBtn();
})

When("I edit the {string} to {string} on Account Details", (fieldValue, textValue) => {
    frontOfficePage.editNameField(fieldValue, textValue);
})

When("I click Help tab in Account Details", () => {
    frontOfficePage.clickHelpTab();
})

When("I click the Help Portal link", () => {
    frontOfficePage.clickHelpLinkPortal();
})

// Verification methods

Then("The login page HiJack will be displayed", () => {
    frontOfficePage.verifyTheWelcomeMessage();
});

Then("The HiJack Logo header should be displayed", () => {
    frontOfficePage.verifyIconIsDisplayed();
})

Then("Reset password modal should be displayed", () => {
    frontOfficePage.verifyResetModalIsDisplayed();
})

Then("The login error message should be displayed", () => {
    frontOfficePage.verifyInvalidCredentialsMessageDisplayed();
})

Then("The error message {string} should be displayed", (errorValue) => {
    frontOfficePage.verifyErrorMsg(errorValue);
})

Then("The Help Portal page should be displayed", () => {
    frontOfficePage.verifyHelpLinkPortal();
})