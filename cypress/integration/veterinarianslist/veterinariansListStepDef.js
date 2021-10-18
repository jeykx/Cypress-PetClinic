import HomePage from '../../pages/home';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import VeterinariansPage from '../../pages/veterinarians';

Given('i am on the home page of the website petclinic', () => {
    
    const home = new HomePage()
    home.visit()
});

When('click on the "veterinarians" link', () => {
    
    const vets = new VeterinariansPage()
    vets.clickLinkVeterinarians()
});

Then('i am redirected to the list of vets', () => {

    const vets = new VeterinariansPage()
    assert.isTrue(true, vets.assertVerifyVetsPage())


});