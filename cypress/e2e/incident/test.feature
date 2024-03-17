Feature: Test feature

  Scenario Outline: Test scenario Outline
    Given I login to system with default user
    When I search for "incident_list.do" in the menu
    Then I wait for the table to show