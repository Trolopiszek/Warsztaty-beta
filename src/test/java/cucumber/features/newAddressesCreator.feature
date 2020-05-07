Feature: New Addresses Creator

  Scenario Outline: user can create new address
    Given an open browser and logged user on prod-kurs.coderslab.pl
    When user click on View My Customer Account Button
    And user click on Addresses button
    And user click on Create new address button
    And user fill a Address field with <address>
    And user fill a City field with <city>
    And user fill a Zip/Postal Code field with <postcode>
    And user click on Save button
    Then user should see a confirm of adding new address
    And browser should be close
    Examples:
    | address         | postcode         |city         |
    | Poziomkowa 123  |   00-231         |  Warszawa   |
