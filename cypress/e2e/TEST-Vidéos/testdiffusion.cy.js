describe('TEST SUITE 1',()=>{
    it('TEST CASE 1',()=>{
        /*cy.login()
        cy.wait(5000)
        //cy.iframeVideo()
        //cy.get('#ddown11__BV_toggle_').click()

        cy.frameLoaded('#iframe_list')
        cy.iframe('#iframe_list')
        .wait(5000)
        .find('#search')
        .should('be.visible')
        .type('bilel')*/

        cy.visit('https://app.webtv-solution.dev/login/')
        cy.get('#input_1').type('empadmin')
        cy.get('#empLoginForm > div:nth-child(3) > button > span').click()
        cy.url().should('eql','https://app.webtv-solution.dev/login/step2/') 
        cy.get('#input_3').type('ca?akuWra2')
        cy.get('.circular-progress-button > .ng-binding').click()
        cy.wait(5000)
        cy.url().should('eql','https://app.webtv-solution.dev/medias/videos?type=ongoing')
    
        /*cy.get('#iframe_list')
        .its('0.contentDocument.body')
        .should('be.visible').should('not.be.empty')
        .then(cy.wrap)
        .find('#search').type('bilel')

        cy.get('#iframe_list').then(function($iframe)
      {
          const iFrameContent= $iframe.contents().find('#search')
          cy.wrap(iFrameContent).type('bilel')//#filter-element > div > div > button > md-icon
      })
      //cy.get('input[class="ng-hide"]').click().selectFile("Downloads\raw.png")*/

      cy.get('iframe[id="iframe_list"]').should('be.visible').should('not.be.empty').then(($iframe) => {
        cy.wait(5000)
        const $frame = $iframe.contents();
        const search = $frame.find('#search');
        cy.wrap(search).type('bilel')

      });
      
    })


       
       
    })
