class NavigationPage {
    button = 'submit'
    detail = '.MuiAccordionSummary-content'
    scrolldetail = '#receipt-vehicleType-text'
    downloadbutton='#button-download-receipt'
    sharebutton = '#button-share-receipt'
    contact = '#contact-us-link'
    instagram= '#image-link-instagram'
    medium = '#image-link-medium'
    facebook = '#image-link-facebook'

    downloadButton() {
        cy.get(this.download).click({ timeout: 3000 })
    }

    detailButton() {
        cy.get(this.detail).click({ timeout: 3000 })
    }

    waitsession() {
        cy.wait(2000);
    }
}

export default NavigationPage;