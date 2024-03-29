import cashierPageLocators from "../../../element-locators/front-office-locators";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let user_input;

When('I click {string} in the Cashier Menu', (menuValue) => {
  switch (menuValue.toLowerCase()) {
  case 'club deposit':
    cy.get(cashierPageLocators.cashier_menu.club_deposit_button).click();
    break;
  case 'club withdraw':
    cy.get(cashierPageLocators.cashier_menu.club_withdraw_button).click();
    break;
  case 'crypto deposit':
    cy.get(cashierPageLocators.cashier_menu.crypto_deposit_button).click();
    break;
  case 'crypto withdraw':
    cy.get(cashierPageLocators.cashier_menu.crypto_withdraw_button).click();
    break;
  case 'transfer': 
    cy.get(cashierPageLocators.cashier_menu.transfer_button).click();
    break;
  case 'history':
    cy.get(cashierPageLocators.cashier_menu.history_button).click();
    break;
  default:
    throw new Error('Invalid input provided: ' + menuValue);            
  }
});

When('I input {string} amount in {string}', (amountValue, element) => {
  switch (element.toLowerCase()) {
  case 'deposit amount':
    cy.get(cashierPageLocators.cashier_page.deposit_amount_txtbox).type(amountValue);
    break;
  case 'withdraw amount':
    cy.get(cashierPageLocators.cashier_page.withdraw_amount_txtbox).type(amountValue);
    break;
  case 'transfer':
    cy.get(cashierPageLocators.cashier_page.amount_to_transfer_textbox).clear();
    cy.get(cashierPageLocators.cashier_page.amount_to_transfer_textbox).type(amountValue);
    break;  
  default:
    throw new Error('Invalid input provided: ' + element);   
  } 
});

When('I click the club location selector', () => {
  cy.get('select#selectedclub').select('e5e1befb-8f42-48e4-af39-7f8aee974a44');
});

When('I select a club location', () => {
  cy.get(cashierPageLocators.cashier_page.club_location_selector).select('e5e1befb-8f42-48e4-af39-7f8aee974a44');
});

When('I input {string} in code textbox', (codeValue) => {
  cy.get(cashierPageLocators.cashier_page.enter_code_txtbox).type(codeValue);
});

When('I click {string} button in Cashier', (buttonValue) => {
  switch (buttonValue.toLowerCase()) {
  case 'process deposit':
    cy.get(cashierPageLocators.cashier_page.process_deposit_button).click();
    break;
  case 'process withdraw':
    cy.get(cashierPageLocators.cashier_page.process_withdraw_button).click();
    break;
  case 'find user':
    cy.get(cashierPageLocators.cashier_page.find_user_button).click();
    break;
  case 'refresh history':
    cy.get(cashierPageLocators.cashier_page.refresh_history_button).click();
    break; 
  case 'received code sms button':
    cy.get(cashierPageLocators.cashier_page.received_code_sms_button).click();
    break; 
  case 'verify button':
    cy.get(cashierPageLocators.cashier_page.verify_code_button).click();
    break;  
  case 'select user':
    cy.get(cashierPageLocators.cashier_page.select_user_button).click();
    break;
  case 'send transfer':
    cy.get(cashierPageLocators.cashier_page.send_transfer_button).click();
    break;            
  default:
    throw new Error('Invalid button provided: ' + buttonValue);  
  }
});

When('I input {string} in the find user textbox', (textValue) => {
  user_input = textValue;
  cy.get(cashierPageLocators.cashier_page.find_user_txtbox).type(user_input);
});

Then('The verification modal is displayed in Cashier Page', () => {
  cy.get(cashierPageLocators.cashier_page.verification_modal).should('be.visible');
});

Then('The amount {string} should be displayed in {string}', (amountValue, element) => {
  switch (element.toLowerCase()) {
  case 'deposit amount':
    cy.get(cashierPageLocators.cashier_page.deposit_amount_txtbox).invoke('text').then(amountValue);
    break;
  case 'withdraw amount':
    cy.get(cashierPageLocators.cashier_page.withdraw_amount_txtbox).invoke('text').then(amountValue);
    break;  
  default:
    throw new Error('Invalid element provided: ' + element);  
  }  
});

Then('The {string} notification should be displayed in Cashier page', (element) => {
  switch (element.toLowerCase()) {
  case 'withdraw':
    cy.get(cashierPageLocators.cashier_page.withdrawal_notif).should('exist');
    break;
  case 'deposit':
    cy.get(cashierPageLocators.cashier_page.deposit_notif).should('exist');
    break;
  case 'request error':
    cy.get(cashierPageLocators.cashier_page.notification_verication_msg).should('be.visible');
    break; 
  case 'user not found':
    cy.get(cashierPageLocators.common.message_modal).find('#MessageText').should('be.visible').contains('no user was found ');
    break; 
  case 'account are restricted':
    cy.get(cashierPageLocators.common.message_modal).find('#MessageText').should('be.visible').contains('account are restricted');
    break;     
  default:
    throw new Error('Invalid input provided:' + element);      
  }
});

Then('The email of the user should be displayed in Player Transfer', function() {
  if (user_input == this.userDetails.player2.phone_number) {
    user_input == this.userDetails.player2.email;
  } else {
    cy.get(cashierPageLocators.cashier_page.player_email).invoke('attr','value').then((emailValue) => {
      expect(emailValue).includes(user_input);
    }); 
  }
  
});

Then('The {string} section should be displayed in the Player Transfer page', (element) => {
  switch (element.toLowerCase()) {
  case 'send money':
    cy.get(cashierPageLocators.cashier_page.send_money_label).should('be.visible');
    break;
  case 'select a player':
    cy.get(cashierPageLocators.cashier_page.select_player_label).should('be.visible');
    break;
  case 'amount to transfer':
    cy.get(cashierPageLocators.cashier_page.select_player_label).should('be.visible');
    break;  
  default:
    throw new Error('Invalid input provided:' + element);    
  }
});

Then('The table datas should be displayed in History Page', () => {
  cy.waitForStableDOM({ pollInterval: 2000, timeout: 10000 }); // waits for a stable DOM after page refresh
  const { history_pane, history_table_data } = cashierPageLocators.cashier_page;
  cy.get(history_pane).find(history_table_data).should('exist');
});

Then('The {string} type should be displayed in History page', (type) => {
  const { history_table_data, history_type_column } = cashierPageLocators.cashier_page;
  cy.c_verifyValueExistInColumn(history_table_data, history_type_column, type);
});