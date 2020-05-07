$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("newAddressesCreator.feature");
formatter.feature({
  "line": 1,
  "name": "New Addresses Creator",
  "description": "",
  "id": "new-addresses-creator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with \u003caddress\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;",
  "rows": [
    {
      "cells": [
        "address",
        "postcode",
        "city"
      ],
      "line": 15,
      "id": "new-addresses-creator;user-can-create-new-address;;1"
    },
    {
      "cells": [
        "Poziomkowa 123",
        "00-231",
        "Warszawa"
      ],
      "line": 16,
      "id": "new-addresses-creator;user-can-create-new-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with Poziomkowa 123",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with Warszawa",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with 00-231",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressesCreatorSteps.anOpenBrowserAndLoggedUserOnProdKursCoderslabPl()"
});
formatter.result({
  "duration": 2640634185,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnViewMyCustomerAccountButton()"
});
formatter.result({
  "duration": 333122926,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnAddressesButton()"
});
formatter.result({
  "duration": 329042494,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnCreateNewAddressButton()"
});
formatter.result({
  "duration": 356594467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Poziomkowa 123",
      "offset": 30
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillAddressFieldWith(String)"
});
formatter.result({
  "duration": 89704932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Warszawa",
      "offset": 27
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillCityFieldWith(String)"
});
formatter.result({
  "duration": 82681570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 00-231",
      "offset": 38
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillZipCodeFieldWith(String)"
});
formatter.result({
  "duration": 64667330,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnSaveButton()"
});
formatter.result({
  "duration": 449413299,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userShouldSeeAConfirmOfAddingNewAddress()"
});
formatter.result({
  "duration": 39662908,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.browserShouldBeClose()"
});
formatter.result({
  "duration": 102437433,
  "status": "passed"
});
});