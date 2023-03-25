// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const tempMailHost = Cypress.env('tempMailHost')
const mailsacKey = Cypress.env('mailsacKey')
const subUrl = Cypress.env('subUrl')

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Log in as Tenant').click()
  cy.origin(subUrl, { args: { email, password } }, ({ email, password }) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password).type('{enter}')
    cy.contains('Send verification code').click()
  })
})

Cypress.Commands.add('enterInputInSubUrl', (inputElement, inputValue) => {
  cy.origin(subUrl, { args: { inputElement, inputValue } }, ({ inputElement, inputValue }) => {
    cy.get(inputElement).type(inputValue)
  })
})

Cypress.Commands.add('clickElementInSubUrl', (element, isForce = false) => {
  cy.origin(subUrl, { args: { element, isForce } }, ({ element, isForce }) => {
    cy.get(element).click({ force: isForce })
  })
})

Cypress.Commands.add('getmessageId', (email, timeout = 20000, interval = 2000) => {
  if (timeout <= 0) {
    assert.fail('Timeout exceeded while waiting for messageId')
  }
  return cy.request({
    method: 'GET',
    url: `${tempMailHost}/api/addresses/${email}/messages`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    },
  }).then(res => {
    if (res.body[0]?._id) {
      return cy.wrap(res.body[0]._id)
    } else {
      return new Promise(resolve => setTimeout(resolve, interval))
        .then(cy.getmessageId(email, timeout - interval, interval))
    }
  })
})

Cypress.Commands.add('getVerificationCode', (email, messageId) => {
  cy.request({
    method: 'GET',
    url: `${tempMailHost}/api/text/${email}/${messageId}`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    }
  }).then(res => {
    expect(res.status).to.eq(200)
    const regexp = /Your code is: (\d+)/;
    const matches = res.body.match(regexp);
    const verificationCode = matches[1]
    return cy.wrap(verificationCode)
  })
})

Cypress.Commands.add('getAllMessageIds', email => {
  let listId = []
  cy.request({
    method: 'GET',
    url: `${tempMailHost}/api/addresses/${email}/messages`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    }
  }).then(res => {
    for (const message of res.body) {
      listId.push(message._id);
    }
    return listId
  })
})

Cypress.Commands.add('deleteAllMails', (email, messageId) => {
  cy.request({
    method: 'DELETE',
    url: `${tempMailHost}/api/addresses/${email}/messages/${messageId}`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    }
  }).then(res => {
    expect(res.status).to.eq(200)
  })
})