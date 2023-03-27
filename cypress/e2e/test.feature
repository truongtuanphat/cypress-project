Feature: Test feature

  Scenario Outline: Test scenario Outline
    Given I navigate to the 'home-page' page
    When I click element with text '<page-name>'
    Then I am on the '<path>' page
    Examples:
      | page-name                       | path                                                  |
      | GTO Sales Overview              | /sit/#/gto-submission/gto-sales-overview              |
      | Update GTO Sales Entry By Month | /sit/#/gto-submission/update-gto-sales-entry-by-month |
  @focus
  Scenario: Test scenario
    Given I navigate to the 'sales/ntd-request' page
    When I select option 'Junction 8' in the 'Property Name' dropdown
    And I select option 'All' in the 'Contract Name' dropdown
    And I select option 'All' in the 'Unit No' dropdown
    And I select option 'All' in the 'Status' dropdown
    And I click search button