Feature: As a visitor to the website i can add an owner to have access to this information

  Scenario: user can add owner
    Given i'm on the home page of the website petclinic
    And i click on the "find owners" link
    And I click on "Add Owner" button
    And I fill form in the following:
      |FIRSTNAME  |LASTNAME |ADDRESS           |CITY            |TELEPHONE  |
      |jeremy     |dufour   |rue du pere noel  |henin beaumont  |0303030303 |
    When I click "Add Owner" button
    Then I'm redirected on page with title Owner Information
    And I check that the owner's information is displayed