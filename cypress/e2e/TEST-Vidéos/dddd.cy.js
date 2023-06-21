describe('AFFICHAGE PAR TYPE DIFFUSION', () => {
    //beforeEach(() => {
        cy.login();

        const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/ongoing?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
        const headers = {
            'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg3MDQxNzM4LCJleHAiOjE2ODcxNzEzMzh9.jXsb031_XBd5_ylx2vzKxQ_OLD3v3MqzDKfkuUtN7sVxlgJU299xtrfenot0esfzjthYlchxs5ChAORLdFSxDCgO-c9Q3197GlG-cXhc1jY1lrBxEl7YDpUeDI7OstRiTVypGqFWYQLFUoMqyhUQMMMVSgTrGl40TDPIcTjrEgwpcN5zAFE98S5VgY4poleYshwiah_GwPC45WB6eeo8Y-XPGk21U3Gz5gnpAoqgZ-Fl4B0EwCfz8WFVdQrw15FjHLh5kD5Fs2PFILHT29lwBqMYnNSh_DtCU6rgeex6p3syxtQnJyzUAddHkc5AYsXLoyJtff4V4ctJopAAD9e9PsXnPhe_VDVDY5PV_7K9MSDTXCXkAaz3tMqPYWhv0L39TTkxy1PxjJC1oPlURa4WTzMnsBgNKwiy5YVHV1ookm1R61SkmaVVHteJS_qSk2GHxQtPkfzaguNPIt8W8--CsWEDUNLB4iAoQ5pBBOxQKRLUyENSDZuc_fC5swSPwiQLIljdeGo6ju0MhXLHiTp7kz5AmW1bv-gkQxxHHgObEcysVAvylrT6x2Wc0zRSMd76Gfo3Zr-EqDZo_7EBlMNCldrdOAW5TxKAyP25Vvztff89vyjwItr54FfGDJWKO24VGDENEwapfXW5kD2gSGfM83_yGvHqxlp9e69kv505Zos',
            'origin': 'https://app.webtv-solution'
         } 

        cy.request({
            method: 'GET',
            url: curl,
            headers: headers
        })
        .then((response) => {
            expect(response.status).to.eq(200); 
        })
        
    //});
    
    it('SEARCH BY ID', () => {
            cy.login();



            cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video');
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
            cy.wrap(iframe2).within(() => {
                
                cy.wait(5000);
               
                //const id = 
                cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1)  ') //#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td").each(($col,index,$cols)=>{
                            cy.log($col.text())
                        })
                    })
                })

                //const columnTexts = Array.from(columnCells).map(cell => cell.textContent.trim());

                //cy.log(columnTexts); // Affichez les textes de la colonne dans la console
                
                
                //cy.get('.table-responsive > table[class="VueTables__table table table-striped table-bordered table-hover"] > tbody > tr:nth-child(2) > td:nth-child(2)').invoke('text') 
                //cy.get('#tableVideos > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)').invoke('text')   
                //#tableVideos > div.table-responsive > table
               
                //cy.get('#search').type(id).should('contains',id).type('{enter}');

                //cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr').should('have.length',1)
                //cy.get('table[class="VueTables__table table table-striped table-bordered table-hover"]>tbody>tr:nth-child(1)>td:nth-child(2)').should('contain',id)
             });
        })
    })
})
