/// <reference types = "cypress"/>
import HomePage from '../pageObjects/HomePage'
import ContactUsPage from '../pageObjects/ContactUsPage'

describe('Test suite', function()
{

   before(function()
      {
      //get data from fixture file
      cy.fixture('example').then(function(data)
      {
            this.data = data
      })
      })

   it('Search Test Case', function()
   {
      
      const homePage = new HomePage()
      const contactUsPage = new ContactUsPage()
      
      //**open url
      cy.visit(Cypress.env('url'))

      //**checking visibility of source input
      homePage.getDestinationInput().should('be.visible')
      
      //**entering Source 
      homePage.getSourceInput().type(this.data.source)
      homePage.tehranItem().click()
      
      /*
      homePage.getSourceInput().type('ت')
      homePage.destinationItem().each(($e1, index, $list) => {
      if($e1.text() == this.data.source)
      {
         $e1.click()
      }
      })
      */

      //**checking visibility of destination input
      homePage.getDestinationInput().should('be.visible')

      //**entering and selecting destination
      homePage.getDestinationInput().type(this.data.destination)
      homePage.mashhadItem().click()

      //**checking visibility of start date input
      homePage.startDateInput().should('be.visible')

      //**selecting start date
      cy.get(':nth-child(2) > .calendar-grid > :nth-child(22)').click()

      //**selecting end date
      //**by using force:true the invisible element get visible
      homePage.endDateInput().click({force: true})
      cy.get(':nth-child(2) > .calendar-grid > :nth-child(24)').click()

      //**clicking on confirm button in calendar
      homePage.dateConfirmButton().click()

      //**selecting five person
      for(let n = 0; n < 4; n ++){
         homePage.plusButton()
            .click()
         }

      //**checking search button
      homePage.searchButton().should('be.enabled')   

      //**selecting search button
      //cy.get('button[name="search"]').click()
      homePage.searchButton().click()
 
      Cypress.config('pageLoadTimeout', 40000)
      cy.get('b[class="text-grays-600"]', { timeout: 10000 }).should('be.visible');
      
      //**checking result
      const checkNumber = () => {
      homePage.resultText().invoke('text').then(parseInt).then(number => {
         cy.log(`**${number}**`)
            if (number > 0) {
               cy.log('**NICE!**')
               // Cypress.config('pageLoadTimeout', 40000)
               return
                  }
                  cy.get('[data-test="next-button"]').click()
                  Cypress.config('pageLoadTimeout', 40000)
                  checkNumber()
                  })
               }
         checkNumber()
               
      //**scroll into contact us
      homePage.contactUs().scrollIntoView()
      
      //clicking on contact us
      homePage.contactUs().click()

      cy.wait(3000)

      //checking url
      cy.url().should('eq', this.data.contactUsUrl)
      
      contactUsPage.contactUsText().should('have.text','تماس با ما')
 
   })
})

