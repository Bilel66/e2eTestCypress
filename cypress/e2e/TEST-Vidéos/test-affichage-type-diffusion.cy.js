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
              //cy.wait(3000)
              cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=all')
              cy.get('#table-liste-video').should('be.visible')
          })    
      })
  })
  it('AFFICHER LES VIDEOS TERMINES',()=>{
      cy.login()
      cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
          const iframe1 = doc.querySelector('.iframe-video')
          const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document
          cy.wrap(iframe2).within(() => {
              // Exécutez des actions à l'intérieur de la deuxième iframe
              cy.wait(5000)
              cy.get('#ddown11__BV_toggle_').click()
              cy.get('#ddown11 > ul > li:nth-child(2) > button').click()
              //cy.wait(3000)
              cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=archived')
              cy.get('#table-liste-video').should('be.visible')
          })    
      })
  })
  it('AFFICHER LES VIDEOS A VENIR',()=>{
      cy.login()
      cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
          const iframe1 = doc.querySelector('.iframe-video')
          const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document
          cy.wrap(iframe2).within(() => {
              // Exécutez des actions à l'intérieur de la deuxième iframe
              cy.wait(8000)
              cy.get('#ddown11__BV_toggle_').click()
              cy.get('#ddown11 > ul > li:nth-child(3) > button').click()
              //cy.wait(3000)
              cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=upcoming')
              cy.get('#table-liste-video').should('be.visible')
          })    
      })
  })
  it('AFFICHER LES VIDEOS HORS LIGNE',()=>{
      cy.login()
      cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
          const iframe1 = doc.querySelector('.iframe-video')
          const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document
          cy.wrap(iframe2).within(() => {
              // Exécutez des actions à l'intérieur de la deuxième iframe
              cy.wait(5000)
              cy.get('#ddown11__BV_toggle_').click()
              cy.get('#ddown11 > ul > li:nth-child(4) > button').click()
              //cy.wait(3000)
              cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=offline')
              cy.get('#table-liste-video').should('be.visible')
          })    
      })
  })
  it.only('AFFICHER LES VIDEOS DANS LA CORBEILLE',()=>{
      cy.login()
      cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
          const iframe1 = doc.querySelector('.iframe-video')
          const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document
          cy.wrap(iframe2).within(() => {
              // Exécutez des actions à l'intérieur de la deuxième iframe
              cy.wait(5000)
              cy.get('#ddown11__BV_toggle_').click()
              cy.get('#ddown11 > ul > li:nth-child(5) > button').click()
              //cy.wait(3000)
              cy.url().should('eq','https://app.webtv-solution.dev/medias/videos?type=archived-exceed')
              cy.get('#table-liste-video').should('be.visible')
          })    
      })
  })
})