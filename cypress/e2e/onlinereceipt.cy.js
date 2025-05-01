import NavigationPage from "../support/Navigator/Navigation";

describe('open parking receipt website', () => {
    const navigation = new NavigationPage();
    beforeEach(() => {
        cy.website({ timeout: 5000 });
        cy.wait(2000);
    })

    // Automation
    
    it('Test Cases', () => {     
         // view parking details 
        cy.get(navigation.detail).click().scrollIntoView();
        cy.wait(2000);

        // close parking details
        cy.get(navigation.detail).click().scrollIntoView();
        cy.wait(2000);

        // share parking receipt 
        cy.get(navigation.sharebutton).click().scrollIntoView();
        cy.wait(2000);

        // download parking receipt
        cy.get(navigation.downloadbutton).click().scrollIntoView();
        cy.wait(2000);

        // click contact us
        cy.get(navigation.contact).scrollIntoView().click();
        cy.wait(5000);

        // open website instagram
        cy.get(navigation.instagram).scrollIntoView().click();
        cy.wait(7000);

        // open website medium
        cy.get(navigation.medium).scrollIntoView().click();
        cy.wait(5000);

        // open website facebook
        cy.get(navigation.facebook).scrollIntoView().click();
        cy.wait(5000);        
    })

})  