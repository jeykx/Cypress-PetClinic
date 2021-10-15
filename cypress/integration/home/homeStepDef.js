import HomePage from '../../pages/home';
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('i enter the url in the Google Chrome web browser', () => {
    
    const home = new HomePage()
    home.visit()
});

Then('i am redirected to the home page of the website', () => {

    const home = new HomePage()
    home.HomeTitleAssert()

});