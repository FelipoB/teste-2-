class homePage {
    selectorlist()  {
        const pageElements = {
            // Login Page
            boardHeroes:        'ul.flex.flex-wrap',
            titleHeroes:        'div.flex.justify-between',
            cardHeroes:         '[data-cy=hero-card]',
            likeHeroes:         '[data-cy=like]',
            hireHeroes:         '[data-cy=hire]',
            trashHeroes:        '[data-cy=trash]',
            editHeroes:         '[data-cy=pencil]',
            nameHeroes:         '[data-cy=name]',
            logoutButton:       '[data-cy=logout]',
            loginButton:        '[data-cy=login]',
            


    }

         return pageElements;

    }
}

export default homePage