

class LoginPage {

    getUserNameField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login_btn')
    }

    getSuccesMessage() {
        return cy.get('#success_lgn')
    }
    getForgetPass() {
        return cy.get(':nth-child(4) > a')
    }

    getResetPopUp() {
        return cy.get('.modal-card-head')
    }

    getResetTitle() {
        return cy.get('#modal_title')
    }

    getResetCloseBtn() {
        return cy.get('.delete')
    }

    getEmailResetInput() {
        return cy.get('#email')
    }
    getResetSubmitBtn() {
        return cy.get('#submit')
    }

    errorMessage() {
        return cy.get('#error_message')
    }

    login(userName, password) {
        this.getUserNameField().type(userName);
        this.getPasswordField().type(password);
        this.getLoginButton().click()
    }

    getLogOutButton() {
        return cy.get('#logout')
    }

}

export default LoginPage
