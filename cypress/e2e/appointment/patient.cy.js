import PatientPage from "../../support/PatientPage"

describe('patientPage', () =>{
    beforeEach(()=>{
        const patientPage = new PatientPage()
        
        patientPage.open()
        patientPage.addPatient.click()
        patientPage.patientsForm.fill({
            name:'Andrey Kramskoy',
            phone: '5454545454545454',
            email: 'andrey@gmail.com',
            symptoms: 'without symptoms',
            bloodGroup: 'A-',
            value: 'Male'
        })
        patientPage.patientsForm.dobData.click()
        patientPage.patientsForm.todayButton.click()
        patientPage.patientsForm.saveButton.click()
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
