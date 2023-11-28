describe('patientPage', () =>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.patients > .text').click()
        cy.get('.patient-operations > .e-control').click()
        cy.get('#textbox_0').type('Andrey Kramskoy')
        cy.get('[for="doctorCheckMale"]').click()
        cy.get('#BloodGroup > .e-float-input > .e-input-group-icon').click()
        cy.get('[data-value="A-"]').click()
        cy.get('#DOB > .e-float-input > .e-input-group-icon').click()
        cy.get('.e-footer-container > .e-btn').click()
        cy.get('#PatientMobile').type('5454545454545454')
        cy.get('#textbox_43').type('andrey@gmail.com')
        cy.get('#textbox_44').type('without symptoms')
        cy.get('#dialog_1627125836_0 > .e-footer-content > .button-container > .e-primary').click()
    })

    it('Check the creation of a new patient', () => {      
        cy.get('.patients-detail-wrapper').should('contain', 'Andrey Kramskoy')
    })

    it('Check that patient is editable',()=>{
        cy.get('[aria-rowindex="8"] > .e-templatecell > .patient-name').click()
        cy.get('#edit').should('be.visible')
        cy.get('#edit').click()
        cy.get('#textbox_44').clear().type('headache')
        cy.get('#dialog_1627125836_0 > .e-footer-content > .button-container > .e-primary').click()
    })

    it('Check that patient can be deleted', ()=>{
        cy.get('[aria-rowindex="8"] > .e-templatecell > .patient-name').click()
        cy.get('#delete').should('be.visible')
        cy.get('#delete').click()
        cy.get('#dialog_1627125836_2_dialog-content > .ng-untouched > div').should('contain', 'Are you sure you want to delete this patient?')
        cy.get('#dialog_1627125836_2 > .e-footer-content > .button-container > .e-primary').click()
        cy.get('.patients-detail-wrapper').should('not.contain', 'Andrey Kramskoy')
    })

})
