import LoginPage from '../../pages/loginPages'
describe('Login Function Project', () => {

    const loginPage = new LoginPage();
it('Test Case 1 - Validate the login Form',() => {

cy.visit('https://techglobal-training.com/frontend/project-2')

loginPage.getUserNameField().parent().contains('Please enter your username').should('be.visible').and('not.have.attr','required')
loginPage.getPasswordField().parent().contains('Please enter your password').should('be.visible').and('not.have.attr','required')
loginPage.getLoginButton().should('be.visible').and('be.enabled')
loginPage.getForgetPass().contains('Forgot Password?').should('be.visible').click()

})

it('Test Case 2 - Validate the valid login', () => {
    cy.visit('https://techglobal-training.com/frontend/project-2')

    loginPage.login('TechGlobal','Test1234')
    loginPage.getSuccesMessage().should('have.text','You are logged in')
    loginPage.getLogOutButton().should('have.text','LOGOUT')
})

it('Test Case 3 - Validate the logout', () => {
    cy.visit('https://techglobal-training.com/frontend/project-2')

    loginPage.login('TechGlobal','Test1234')
    loginPage.getLogOutButton().click()
    loginPage.getUserNameField()
})

it('Test case 4 - Validate the Forgot Password? Link and Reset Password modal',() => {
    cy.visit('https://techglobal-training.com/frontend/project-2')

    loginPage.getForgetPass().click()

    loginPage.getResetTitle().contains('Reset Password').should('be.visible')

    loginPage.getUserNameField()
    loginPage.getResetCloseBtn().should('be.visible')


    loginPage.getEmailResetInput().parent().contains("Enter your email address and we'll send you a link to reset your password.").should('be.visible')

    loginPage.getResetSubmitBtn().contains('SUBMIT').should('be.visible').and('be.enabled')   

})
it('Test Case 5 - Validate the Reset Password modal close button', () => {
    cy.visit('https://techglobal-training.com/frontend/project-2')

    loginPage.getForgetPass().click()
    loginPage.getResetPopUp().should('be.visible')
    loginPage.getResetCloseBtn().click()
    loginPage.getResetPopUp().should('not.exist')

})

it('Test Case 6 - Validate the Reset Password modal close button',() => {
    cy.visit('https://techglobal-training.com/frontend/project-2')
    loginPage.getForgetPass().click()
    loginPage.getEmailResetInput().type('test@gmail.com')
    loginPage.getResetSubmitBtn().click()
    cy.get('#confirmation_message').contains('A link to reset your password has been sent to your email address.')
})


const testData710 = [
    {
        description:'Validate the invalid login with the empty credentials',
        err: 'Invalid Username entered!',
        empty: true
    },
    {
        description:'Validate the invalid login with the wrong username',
        username:'John',
        password:'Test1234',
        err: 'Invalid Username entered!',
        
    },
    {
        description:'Validate the invalid login with the wrong password',
        username:'TechGlobal',
        password:'1234',
        err: 'Invalid Password entered!',
       
    },
    {
        description:'Validate the invalid login with the wrong username and password',
        username:'John',
        password:'1234',
        err: 'Invalid Username entered!',
        
    }
    
]
testData710.forEach((test, index) => {
    it(`Test Case ${index + 7} - ${test.description}` ,() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')
        if(test.empty) {
            loginPage.getLoginButton().click()
            loginPage.errorMessage().contains(test.err)
        }
        else{
            loginPage.login(test.username, test.password)
            loginPage.errorMessage().contains(test.err)
        }

    })
})
    

})

