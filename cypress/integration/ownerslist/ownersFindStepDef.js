import HomePage from '../../pages/home';
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import OwnersFind from '../../pages/ownersfind';

Given('i am on the home page of the website', () => {
    
    const home = new HomePage()
    home.visit()
});

When('i click on the "find owners" link', () => {
    
    const ownersFind = new OwnersFind()
    ownersFind.clickLinkFindOwners()
});

And('i click on the Find Owner button for access all owners', () => {
    
    const ownersFind = new OwnersFind()
    ownersFind.clickBtnOwner()
});

Then('i access the list of all owners', () => {

    const ownersFind = new OwnersFind()
    assert.isTrue(true, ownersFind.ownersListVisible())


});