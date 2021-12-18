class HomePage
{

    getSourceInput()
    {
        return cy.get('input[id^="al"]').eq(0)
    }

    getDestinationInput()
    {
        return cy.get('input[id^="al"]').eq(1)
    }

    dateConfirmButton()
    {
        return cy.get('.a-card__footer > .btn')
    }
    searchButton()
    {
        return cy.contains('جستجو')
    }

    contactUs()
    {
        return cy.get('a[href="/contact-us"]')
    }

    startDateInput()
    {
        return cy.get('input[id^="al"]').eq(2)
    }

    endDateInput()
    {
        return cy.get('input[id^="al"]').eq(3)
    }

    tehranItem()
    {
        return cy.get('[data-value="THR"] > a > .destination-item')
    }

    mashhadItem()
    {
        return cy.get('[data-value="MHD"] > a > .destination-item')
    }

    plusButton()
    {
        return cy.get(':nth-child(1) > .a-counter > :nth-child(1)')
    }

    resultText()
    {
        return cy.get('b[class="text-grays-600"]')
    }
}

export default HomePage