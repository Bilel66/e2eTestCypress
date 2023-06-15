describe('AFFICHAGE PAR TYPE DIFFUSION',()=>{
    it('AFFICHER TOUS LES VIDEOS',()=>{
        cy.login()
        cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video')
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document
            cy.wrap(iframe2).within(() => {
                // Exécutez des actions à l'intérieur de la deuxième iframe
                cy.wait(5000)
                cy.get('#ddown11__BV_toggle_').click()
                cy.get('#ddown11 > ul > li:nth-child(1)').click()
                cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=all')
                cy.get('#table-liste-video').should('be.visible')

                ///////////////// Nombre d'element en pagination ///////////////////
                
                let totalElement;
                cy.get("#embed_site > any > div:nth-child(4) > div > div.align-items-center > span:nth-child(2)").then((e)=>{
                    let mytext=e.text()
                    cy.log(mytext)
                    totalElement=mytext.substring(mytext.indexOf("/ ")+1, mytext.indexOf("éléments")-1)
                    cy.log("Total element : ===>"+totalElement)
                })
            })
        })
    })
})