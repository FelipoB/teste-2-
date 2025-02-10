import Prisma from '@prisma/client';

describe('try login Admin', () => {
  beforeEach(() => {
    cy.visit('/heroes');
  });


    it('invalid password', () => {
    cy.trylogin('admin@test.com', 'testtest');
    

});

    it('invalid email', () => {
        cy.trylogin('adm@test.com', 'test123');
        

});

describe('try login user', () => {
    beforeEach(() => {
      cy.visit('/heroes');
    });
  
  
      it('invalid password', () => {
      cy.trylogin('test@test.com', 'testtest');
      
      
  
  });
  
      it('invalid email', () => {
          cy.trylogin('tester@test.com', 'test123');
          
          
          
  
  });
  

});

});
