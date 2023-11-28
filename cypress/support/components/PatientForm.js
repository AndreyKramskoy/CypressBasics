class PatientsForm{
get name(){return cy.get('.name-container')}
gender(value){return cy.get(`[for="doctorCheck${value}"]`)}
get bloodGroup(){return cy.get('#BloodGroup > .e-float-input > .e-input-group-icon')}
bloodGroupOption(group){return cy.get(`[data-value="${group}"]`)}
get dobData(){return cy.get('#DOB > .e-float-input > .e-input-group-icon')}
get todayButton(){return cy.get('.e-footer-container > .e-btn')}
get phone(){return cy.get('#PatientMobile')}
get email(){return cy.get('#textbox_43')}
get symptoms(){return cy.get('#textbox_44')}
get saveButton(){return cy.get('#dialog_1627125836_0 > .e-footer-content > .button-container > .e-primary')}

fill(params){
    if (params.name){
        this.name.type(params.name)
    }
    if (params.phone){
        this.phone.should('be.visible').type(params.phone)
    }
    if (params.email){
        this.email.should('be.visible').type(params.email)
    }
    if (params.symptoms){
        this.symptoms.should('be.visible').type(params.symptoms)
    }
    if (params.bloodGroup){
        this.bloodGroup.click()
        this.bloodGroupOption(params.bloodGroup).click()
    }
    if(params.value){
        this.gender(params.value).click()
    }
    }
}

export default PatientsForm