class loginPage {
    selectorlist()  {
        const pageElements = {
            // Login Page
            inputEmail:             'input[type="email"]',    
            inputPassword:          'input[type="password"]',
            singnInButton:          'button.bg-blue-700'
        }
        return pageElements;
    }
}

export default loginPage;