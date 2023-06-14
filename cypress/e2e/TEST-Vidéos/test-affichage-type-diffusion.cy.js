describe('TEST SUITE 1',()=>{
  it('TEST CASE 1',()=>{
      cy.login()
      cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
        const iframe1 = doc.querySelector('.iframe-video');
        const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
        cy.wrap(iframe2).within(() => {
          // Exécutez des actions à l'intérieur de la deuxième iframe
         cy.get('#ddown11__BV_toggle_').click()
          cy.get('#ddown11 > ul > li:nth-child(1)').click()
         cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=all')
         cy.get('#table-liste-video').should('be.visible');});
        });
      });
  });

    it.only('TEST CASE 2',()=>{
        cy.login()
        cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
          const iframe1 = doc.querySelector('.iframe-video');
          const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
          cy.wrap(iframe2).within(() => {
            // Exécutez des actions à l'intérieur de la deuxième iframe
             cy.get('#ddown11__BV_toggle_').click()
              cy.get('#ddown11 > ul > li:nth-child(3) > button').click()
             cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=upcoming')
             cy.get('#table-liste-video').should('be.visible')
          });
        })  
})