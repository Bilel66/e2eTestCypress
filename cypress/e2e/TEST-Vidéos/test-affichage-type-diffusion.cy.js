describe('AFFICHAGE PAR TYPE DIFFUSION', () => {
    beforeEach(() => {
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
        
    });
    
    const afficherVideos = (text, url,curl,headers) => {
        cy.get('#iframe_list').its('0.contentDocument').should('exist').then((doc) => {
            const iframe1 = doc.querySelector('.iframe-video');
            const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
            cy.wrap(iframe2).within(() => {
                let variableValue
                let totalElement

                cy.wait(5000);
                cy.get('#ddown11__BV_toggle_').click();
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
    };
    

    it('AFFICHER TOUS LES VIDEOS', () => {
        const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/all?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
        const headers = {
         'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
         'accept': 'application/json, text/plain, */*',
         'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
         'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg3MDM3OTA0LCJleHAiOjE2ODcxNjc1MDR9.qYO-R2jR6gm2aLKXmQmIPG7naydGE9BnRZozfiqcEIOblBTjKKl-v7ve74lY7UURu-wfb4W19fJP2KGIa97to7MokVmymmGQWU7YspW9psk9Kd9EWYCGvyALZkJvZn2umdzsvEX2Qdjo01HMGqiTU1sWvF4LdPc2tDEKdP9ow2p--mCQGJU5B5wyLVFPzORdTHKkh26e2bXQxub_6uMWxysaBGCKR3ASS1wOpnulsI7NYoPd6oKONheZLNtlFP0hgYLNwCR8FH5qpnLANVFiUXQaV5X3qqUKBMYr9A3yszbKUcmpX83odpH1TXGT-itHZbWy4gBbV08Vruz-QJTHHgjdGJdLHUTdAlrw-_Sytl0UMp7jLObLaZgLFb3e8PKPfpcbSGnlQFLX4aESUq8MFPTihyP23TfSW07n32hLSND5dWAJ_7mb25i4xm7QTl86_0GrwJcnQRupGBtxnorv6iwZAw9vS8PIFWcqDsmsFTt7qxHwfyOtJPmNoCqUraqGVuMbOuDn5JzZBufuPIMr1cyOCyP2_fFd4aVeMuXOr65t7v4vVwzSzq38UCLPrnHVKWt7Onwcqda4te-7WNQHWVKqxwx76pbIldseScrRMqv15LIhPqGxCe20JNjVk0X9QK8PyGzvIAW3V7Lap8BJInbhHy_mWUcQXboSG1GpGzU',
         'origin': 'https://app.webtv-solution'
        } 
        afficherVideos('Tout', 'https://app.webtv-solution.dev/medias/videos?type=all',curl,headers);
    });
    
    it('AFFICHER LES VIDEOS TERMINES', () => {
       const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/archived?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
       const headers = {
            'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg2OTcwMjE5LCJleHAiOjE2ODcwOTk4MTl9.sJWAptIgCOppvYaPs8QOm9uSBUz8UDbK1QFy8ayeXUXn20HmHa1JSGPi6nri0HqNDpF591UR9TxphAXHbP5JqR4zDdva4uLxbSLEnFCayreMDuKrlKUk4R-galJsRobEPoHhRNIlT8BPhs2JwSAzRKf1vtX3veZ5K5K8X2xD0Lj4S-WOCcVmYxxqCRSiFZOdkBEhJxH-WySDFP-AyZ6oSwUnjLruK3bhwom4M-wljI9garL51qn2H9q2j4ufa4Z5PSMGugKrYFV6jAd_Mqc9PACEWRW4sv3rFRJ-ghABHLb8UdiWvbtnIbW33F85hXYfDupSXRwqhMTrkQ3Lw_juWh4S9BddjqqXNDDC8IiqHZU5gFdoBu2nh1hodpanDyALakFEC755XX7ZL6pZmOGOkSZF_QPHgfrlWqvVd0kX0qRjFQCXu7vnSKPz2oH_p2_HdOco8LTwf9VhdQhBSGmFn9Wi0t0b6wnjtZPrD_LgDQDfsKRQHTNTpxLmgYHyunTLJxf-kslOToS8CpFv-EsCBrdE3nelvlUaLgOcFaeUwWTHkJJCG3mI3EsK1ceyuvDn91JOgdqUgMKrk8jh7WuimXXKhtvMtFIJowrDDJazdxcYWgenqFxPNwKFv7JxNYvdFw9KLykq8_hNwGOXQ68X6xMQL-99C9eLUuXeVGD6jsQ',
            'origin': 'https://app.webtv-solution.dev'
        } 
        afficherVideos('Terminée', 'https://app.webtv-solution.dev/medias/videos?type=archived',curl,headers); 
    });

    it('AFFICHER LES VIDEOS A VANIR', () => {
        const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/upcoming?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
        const headers = {
         'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
         'accept': 'application/json, text/plain, */*',
         'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
         'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg3MDQxNzM4LCJleHAiOjE2ODcxNzEzMzh9.jXsb031_XBd5_ylx2vzKxQ_OLD3v3MqzDKfkuUtN7sVxlgJU299xtrfenot0esfzjthYlchxs5ChAORLdFSxDCgO-c9Q3197GlG-cXhc1jY1lrBxEl7YDpUeDI7OstRiTVypGqFWYQLFUoMqyhUQMMMVSgTrGl40TDPIcTjrEgwpcN5zAFE98S5VgY4poleYshwiah_GwPC45WB6eeo8Y-XPGk21U3Gz5gnpAoqgZ-Fl4B0EwCfz8WFVdQrw15FjHLh5kD5Fs2PFILHT29lwBqMYnNSh_DtCU6rgeex6p3syxtQnJyzUAddHkc5AYsXLoyJtff4V4ctJopAAD9e9PsXnPhe_VDVDY5PV_7K9MSDTXCXkAaz3tMqPYWhv0L39TTkxy1PxjJC1oPlURa4WTzMnsBgNKwiy5YVHV1ookm1R61SkmaVVHteJS_qSk2GHxQtPkfzaguNPIt8W8--CsWEDUNLB4iAoQ5pBBOxQKRLUyENSDZuc_fC5swSPwiQLIljdeGo6ju0MhXLHiTp7kz5AmW1bv-gkQxxHHgObEcysVAvylrT6x2Wc0zRSMd76Gfo3Zr-EqDZo_7EBlMNCldrdOAW5TxKAyP25Vvztff89vyjwItr54FfGDJWKO24VGDENEwapfXW5kD2gSGfM83_yGvHqxlp9e69kv505Zos',
         'origin': 'https://app.webtv-solution'
        } 
        afficherVideos('A venir', 'https://app.webtv-solution.dev/medias/videos?type=upcoming',curl,headers);
    });

    it('AFFICHER HORS LIGNE LES VIDEOS', () => {
        const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/offline?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
        const headers = {
         'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
         'accept': 'application/json, text/plain, */*',
         'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
         'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg3MDQ0MTQ2LCJleHAiOjE2ODcxNzM3NDZ9.BAs3b5RcSuC9VAuoBr0_gMDXqw1yQXAHCv4aLZHE97W_AU-NqEGnVredPiw-VuryIGalrrTrp42IC9FltYUEQoTjR-LHxRPFoYWVyX2DKf-iY2ikYT69_iZ88Du5jGnAgRXEW3cOK8PWSvYrCgEIJYZ48yvqX42zYVJM01Xa2ZJ819__Qf7hCOSgtBmmktlTb5rHmDhUhCYsK_hzzEMXU6ipzCbPa97j0Br2JlMlGNrThivBOsj0r-6JZwhFgF5MjrYKA_8DYJ9Sie4C_R59qayFma2wRJCFzJ_ljRJlqKI22lnfpH6vkZSNP1ns828okNb9FIv0z6eB8NaGtEe8SEdCh_k8nh5MKgx1vNSXVZOqzNtWTPTrcjc_WuW2rBaVohhcLLLWqOSlc2TELdolut33JC7EXfBe7GukFCgF8qVdqevX0k05NQNLabeljLMTPV2n2ozP6CZdTGVJxol1TknAnH_qkMmLxT8K8cjOf4aD0YunWU4xSX_4WBXgd-tWxsz622dJnaWSWkpY3DLs-CGSP72HdKA6FWdtntnbJRuWx35iuIw5a-_4Mh1ZeDHbRSboM8xcot-lsLxHGRH8dEfbPOh9VQa1krEjrqc19_HMCM336wWm44kLIVNr5Cn2ffw9QwmUSNblKJeIhNH6ILOYNt8EjolMKkEnusdk-Qc',
         'origin': 'https://app.webtv-solution'
        } 
        afficherVideos('Hors ligne', 'https://app.webtv-solution.dev/medias/videos?type=offline',curl,headers);
    });

    it('AFFICHER TOUS LES VIDEOS', () => {
        const curl = 'https://k8s-scaleway-test-api-v4.webtv-solution.com/dataTable/videos/archived-exceed?columns%5B0%5D%5Borderable%5D=true&draw=1&length=20&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0'
        const headers = {
         'authority': 'k8s-scaleway-test-api-v4.webtv-solution.com',
         'accept': 'application/json, text/plain, */*',
         'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
         'authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVtcGFkbWluIiwiaWF0IjoxNjg3MDQ0Mzg5LCJleHAiOjE2ODcxNzM5ODl9.AUqeA9So05JdDt9SjYL6p85KJM7RCNTzElSePT-ASRHcXTWLdzEYJIqySrpDyr1DarjAqAYMn-bhUGbg91QTNFenXv4dH9Wd3Uv0_Hw5PNcTPVFXX15QFTPWqpL32Pi8FTWbcQBYcs4JfMAisWSQnQeMc4g3vMmCQtJjF_zveTpERUu5ijC1DyXUCw2l401My5QeKweNDZvXOXZfs66ET0chz61gNYeaOE0YSIecg8lOxb6wT8rxC-EZtIH84GBvOBDIF1d2XCNCBHNS-L4aAhsTdU-TYeBIG5rF-w1xwoV5nLj_GcMTfFTe4W2jgFXJf52fUO-eVpyGrpOhLnWiOAy02q3fsL_FrvBk7w6yecL5vLBeRteRrg4xU5kqzcZ8w_4I7fXK9e8xT2Y4BVAomckdEm7Ovy2P9eRqdzxxVOozXpBWJVxYWarCXLh-87DamrjFyXpljqUo2njJGdu7awFj71_EZDkhw0PP_fR2bgCqGUY_zVOSC_rctAFFMphRPTqe5YjM6cLTRv-o-XG_Y3obAwImJF9--xg5TZCPr6Dr0jArW-474o4ofAX3qUwD1plPuN4BpzNgVXYoLjONlqm3RunYbydMryqK5ynLkHutT3OmjZVnjpKjtPqXCO90T6QVUPJ6AIf4DUZvYSuGUYMkkaCSJ1PIGooX2J1b6VY',
         'origin': 'https://app.webtv-solution'
        } 
        afficherVideos('Corbeille', 'https://app.webtv-solution.dev/medias/videos?type=archived-exceed',curl,headers);
    });
});