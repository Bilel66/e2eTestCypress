describe('AFFICHAGE PAR TYPE DIFFUSION', () => {
   
    
    /*const afficherVideos = (text, url,curl,headers) => {
        cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video');
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
            cy.wrap(iframe2).within(() => {
                let variableValue
                let totalElement

                cy.wait(5000);

                const id = cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr:nth-child(1)>td:nth-child(2)').invoke('text')

                cy.get('#search').type(id).should('contains',id).type('{enter}');

                cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr').should('have.length',1)
                cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr:nth-child(1)>td:nth-child(2)').should('contain',id)
                
                
                
                cy.get('.dropdown-item').contains(text).click(); 
                cy.url().should('eq', url);
                cy.get('#table-liste-video').should('be.visible');

                cy.request({
                    method: 'GET',
                    url: curl,
                    headers: headers
                  })
                  .then((response) => {
                    expect(response.status).to.eq(200); 
                    variableValue = response.body.recordsFiltered;
                    cy.log("variableValue" + variableValue);
                    return cy.get("#embed_site > any > div:nth-child(4) > div > div.align-items-center > span:nth-child(2)").invoke('text');
                  })
                  .then((mytext) => {
                    cy.log(mytext);
                    totalElement = mytext.substring(mytext.indexOf("/ ") + 1, mytext.indexOf("éléments") - 1);
                    cy.log("Total element : ===>" + totalElement);
                    expect(variableValue).to.equal(Number(totalElement));
                  });
            });
        });
    };*/
    

    it('SEARCH BY ID', () => {
        cy.login();

        cy.wait(5000)
        cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video');
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
            cy.wrap(iframe2).within(() => {
                

                cy.wait(5000);

                //const id = 
                cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(3) > td:nth-child(2)')
                cy.get('.table-responsive > table[class="VueTables__table table table-striped table-bordered table-hover"] > tbody > tr:nth-child(2) > td:nth-child(2)').invoke('text') 
                //cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)').invoke('text')   
                //#tableVideos > div.table-responsive > table
               
                //cy.get('#search').type(id).should('contains',id).type('{enter}');

                //cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr').should('have.length',1)
                //cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr:nth-child(1)>td:nth-child(2)').should('contain',id)
             });
        })
    })
})