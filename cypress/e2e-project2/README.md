# CypressProject2

This project aims to test and automate the login functionality of the example application located at:
https://techglobal-training.com/frontend/project-2

Contents: 

The project contains the following files:

1) loginFunction.cy.js - Main Cypress test file containing all the test cases
2) loginPages.js - Page object model file containing locator functions

The application contains a simple login form with username, password and login button. It also contains a 'Forgot Password?' link to open up a modal for resetting the password.

The project aims to test the following:
1. Validate the login form elements
2. Test successful and invalid login scenarios
3. Test logout
4. Test the 'Forgot Password' reset modal
5. Parameterize tests with different data sets
 
To run the tests in this repository:
1. Make sure Cypress is installed
2. Clone the repo
3. Run npm install to install dependencies
4. Run npx cypress open to open the Test Runner
5. Run loginFunction.cy.js to execute all tests
6. Or run npx cypress to execute all the tests in headless mode.

Reporting:
The Cypress Test Runner will display all test results  by default.

Tools used in this project:
1. JavaScript
2. Cypress
3. Test Cases

There are a total of 10 test cases covering:

6 Positive test cases:
1. Test Case 01 - Validate the login form
2. Test Case 02 - Validate the valid login
3. Test Case 03 - Validate the logout
4. Test Case 04 - Validate the Forgot Password? Link and Reset Password modal
5. Test Case 05 - Validate the Reset Password modal close button
6. Test Case 06 - Validate the Reset Password form submission

4 Negative test cases:
1. Test Case 07 - Validate the invalid login with the empty credentials
2. Test Case 08 - Validate the invalid login with the wrong username
3. Test Case 09 - Validate the invalid login with the wrong password
4. Test Case 10 - Validate the invalid login with the wrong username and password

The tests validate the key login functionality including valid/invalid login, logout, and password reset.