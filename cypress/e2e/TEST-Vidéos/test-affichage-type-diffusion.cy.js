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

                ///////////////////// TEST API RESPONSE ///////////////////////

              cy.request({
                    method: 'GET',
                    url: 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/all?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0',
                    headers: {
                        'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
                        'accept': 'application/json, text/plain, */*',
                        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                        'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg2Nzc5NTcwLCJleHAiOjE2ODY5MDkxNzB9.cxsiw9xWMECPbuBOXAs_ZdpXMLKXepAgyoJOxZ2Jv8X2SZQ-kHgsBOSMLnUtPPYYZNuYOzOoCfLjaCT0mv5C-1g1RfwKb83jSJsd52OG0nIB6-8cAqjUJSimkEeDmiggOncpBVwx5Y8grmXmU9_dDks43dvnt5QrFR2ySRjJtNuEGujpEcJE6wvUzSgX17hUt3zQ49Gm1UdKvr_7S-2SnxgrFVhkg7e6can5imTFvz8ki-es1mt5bUn0Yatm592vgaHMW0BmGCh4M1a27zSSoReobG0VYE_gGwCXgspDvs0hkMGwC1BzK7t7sl1Zhg2KlgtIohNX5iAuLf9uw9pTbcDn0E13zINxtrD_l8-P5NGvvBO5xxCOTe_-rmuBPaVpmxIydTz3HhS6VXMhTeP2RWAlPh8OYiRTGQ69VuVVZ5MhMv_IJjf-UgFtk1ah_2msfL0h0eW21HRR16dR9PcVVX7AgQ3K1e36tHy8RSHodRxZMDA7PHqN9VtIQ0qIHnK0Y49o9KEQFNVorFR_O2mAn6GNj78yFdJYj-eblheJVk-qlLbRI8lmhLsLMZ3tsoFZ12FSdz-1SypfigWESiK6qMzIQgOVSldyC6e8BnjRSAlwDIltW-MvVg-wNcLdBnV4fGEJB_MZujqUFCzT8eEqU5QhvfxRcKmMZ3avNTxYF-4',
                        'origin': 'https://app.webtv-solution'
                    }
                })
                    .then((response) => {
                        expect(response.status).to.eq(200); // Vérifie que le code de statut est 200
                        //expect(response.body).to.have.property('1 2532 2532 null'); 

                            // Extraire la valeur de la variable de la réponse JSON
                        const variableValue = response.body.recordsFiltered;

                        //////////////// EXTRAIRE NOMBRE ELEMENT DU PAGINATION ///////////////////
                        let totalElement;
                        cy.get("#embed_site > any > div:nth-child(4) > div > div.align-items-center > span:nth-child(2)").then((e)=>{
                            let mytext=e.text()
                            cy.log(mytext)
                            totalElement=mytext.substring(mytext.indexOf("/ ")+1, mytext.indexOf("éléments")-1)
                            cy.log("Total element : ===>"+totalElement)
                        })

                        // Effectuer une assertion pour vérifier la valeur extraite
                        expect(variableValue).to.equal(totalElement);
                        ///// expect(numericValue.toString()).to.equal(expectedValue);
                    })
            })
        })
  /*it('AFFICHER LES VIDEOS TERMINES',()=>{
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
  it('AFFICHER LES VIDEOS DANS LA CORBEILLE',()=>{
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
  })*/
  })
})