describe('AFFICHAGE PAR TYPE DIFFUSION', () => {
   // beforeEach(() => {
//cy.login();
    //    //cy.get(5000)
   // })
    

    /*it('AFFICHER TOUS LES VIDEOS', () => {
       cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video');
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
            cy.wrap(iframe2).within(() => {
                cy.wait(10000);
                

               //cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(4)').invoke('text')
                //.then((text) => {
                    // Faites quelque chose avec le texte extrait
                //   console.log(text);
               //   });

               //This element is inside 2 nested frames.
                //XPath for frame1 = //iframe[@id='iframe_list'];
                //XPath for frame2 = //iframe[@id='iframe_list'];
                //XPath for inspectedElement = //input[@id='__BVID__122'];
                cy.find('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(2) > td:nth-child(10) > div > div > button:nth-child(5)').click({force: true})
                //cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)').invoke('text')  


            })
        })*/
        it("méta-data du video  ", function () {

            cy.login().wait(6000)
    
            cy.get('#iframe_list')
                .iframeLoaded()
                .its('document').then((doc) => {
                //cy.wrap(doc).getInDocument('#tableVideos').should('be.visible')
                // .find('button[class="md-button md-default-theme md-ink-ripple btn-custom"][title="Voir plus"]').eq(0)
                // .click({force: true}).wait(2000)
                //cy.wrap(doc).getInDocument('button[class="md-button md-default-theme md-ink-ripple btn-custom btn-plus"][title="Supprimer"]').eq(0)
                //  .click({force: true}).wait(2000)
                //cy.wrap(doc).getInDocument('button[class="btn btn-primary"]').contains('Oui').click({force: true}).wait(3000)
                    cy.wrap(doc).getInDocument('#tableVideos').should('be.visible')
                    .find('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(4)').invoke('text')
                    .then((text) => {
                        // Faites quelque chose avec le texte extrait
                       console.log(text);
                      });
                    /*cy.wrap(doc).getInDocument('button[class="md-button md-default-theme md-ink-ripple btn-custom btn-plus"][title="Méta-data de la vidéo"]').eq(0)
                    .click({force: true}).wait(2000)
                    cy.get('md-dialog[class="event-form-dialog _md md-default-theme md-transition-in"]')
                    .find('button.md-accent.md-button.ng-scope.md-ink-ripple.md-default-theme').contains('Fermer')
                    .click({force: true}).wait(2000)*/
                })
        })
   
})