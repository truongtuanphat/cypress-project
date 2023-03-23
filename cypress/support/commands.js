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

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Log in as Tenant').click()
  cy.origin('https://gtoplatformuat.b2clogin.com', { args: { email: email, password: password } }, ({ email, password }) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password).type('{enter}')
    cy.contains('Send verification code').click()
  })
})

Cypress.Commands.add('enterVerificationCode', (code) => {
  cy.origin('https://gtoplatformuat.b2clogin.com', { args: { code: code } }, ({ code }) => {
    cy.get('.verifyInput').type(code + '{enter}')
  })
})

Cypress.Commands.add('getMailsacId', (email, timeout = 10000, interval = 2000) => {
  if (timeout <= 0) {
    assert.fail('Timeout exceeded while waiting for mailsacId')
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
        .then(() => cy.getMailsacId(email, timeout - interval, interval))
    }
  })
})

Cypress.Commands.add('getVerificationCode', (email, mailsacId) => {
  cy.request({
    method: 'GET',
    url: `${tempMailHost}/api/text/${email}/${mailsacId}`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    }
  }).then(res => {
    if (res.status == 200) {
      const regexp = /Your code is: (\d+)/;
      const matches = res.body.match(regexp);
      const verificationCode = matches[1]
      return cy.wrap(verificationCode)
    }
  })
})

Cypress.Commands.add('deleteMail', (email, mailsacId) => {
  cy.request({
    method: 'DELETE',
    url: `${tempMailHost}/api/addresses/${email}/messages/${mailsacId}`,
    headers: {
      'Mailsac-Key': `${mailsacKey}`
    }
  }).then(res => {
    expect(res.status).to.eq(200)
  })
})