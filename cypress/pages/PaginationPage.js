class PaginationPage {
     /* Locators */
     getHeader() {
        return cy.get('.is-size-3')
}
    getSubHeading() {
        return cy.get('#sub_heading')
    }
    getContent() {
        return cy.get('#content')
    }
    getPreButton() {
        return cy.get('#previous')
    }
    getNextButton() {
        return cy.get('#next')
    }
    getCityInfo() {
        return cy.get('.Pagination_pagBodyData__vG6oj p')  
    }
    getCity(){
        return cy.get('.city_info')
    }
    getCityPicture(){
        return cy.get('.city_image')
    }
    getCircle() {
        return cy.get('.circle')
    }

    /* Method */ 
    getHeading(heading) { 
        switch(heading) {
        case 'Pagination':
            return this.getHeader()
        case 'World City Populations 2022':
            return this.getSubHeading()
            default:
                throw new Error(`Case not found ${heading}`)
    }
    }
    getButton(button) {
        switch(button) {
            case 'Previous':
                return this.getPreButton()
            case 'Next':
                return this.getNextButton()
            default:
                throw new Error(`Case not found ${button}`)
    }
}
    getClickButton(button) {
      this.getButton(button).click()           
}
}
module.exports = PaginationPage