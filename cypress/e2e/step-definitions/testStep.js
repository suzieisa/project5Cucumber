const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const PaginationPage = require('../../pages/PaginationPage');

const paginationPage = new PaginationPage()


Given('the user is on {string}', (url) => {
	cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	paginationPage.getHeading(heading).should('have.text', heading)
});


Then(/^the user should see the "([^"]*)" paragraph$/, (paragraph) => {
	paginationPage.getContent().should('have.text', paragraph)
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
	paginationPage.getButton(button).should('be.disabled')
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	paginationPage.getButton(button).should('be.enabled')
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (button) => {
	paginationPage.getCircle().each(() => {
		paginationPage.getButton(button).click({force: true})
	})
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	paginationPage.getClickButton(button)
});

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
	paginationPage.getCity().should('contain', city)
	
	const info = dataTable.rawTable.flat()
	
	paginationPage.getCityInfo().each(($el, index) => {
		cy.wrap($el).should('have.text', info[index])
})
	paginationPage.getCityPicture().should('be.visible')
})
