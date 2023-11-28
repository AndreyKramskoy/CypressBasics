import PatientsForm from "./components/PatientForm"

class PatientPage {
    open(){
        cy.visit('/')
        cy.get('.patients > .text').click()
    }
    get addPatient(){return cy.get('.patient-operations > .e-control')}
    patientsForm = new PatientsForm()
}
export default PatientPage