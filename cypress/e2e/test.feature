Feature: Test feature

  Scenario Outline: Test scenario Outline
    Given I navigate to the 'home-page' page
    When I click element with text '<page-name>'
    Then I am on the '<path>' page
    Examples:
      | page-name                       | path                                                  |
      | GTO Sales Overview              | /sit/#/gto-submission/gto-sales-overview              |
      | Update GTO Sales Entry By Month | /sit/#/gto-submission/update-gto-sales-entry-by-month |

  Scenario: Test scenario
    Given I navigate to the 'sales/ntd-request' page
    When I select Sales Month from '2023-01' to '2023-05'
    And I select option 'All' in the 'Property Name' dropdown
    And I select option 'All' in the 'Contract name' dropdown
    And I select option 'All' in the 'unit No' dropdown
    And I select option 'All' in the 'status' dropdown
    And I click search button
    And I click the cell in row 2 and column 'Request ID'
    Then The row with text '03/01/2023' in table should have below values:
      | column              | value                                   |
      | Unit No             | 04-01/02E                               |
      | Current NTD Status  | Yes                                     |
      | Adjusted NTD        | No                                      |
      | NTD Reason Code     | 2 - Closed for renovation/ fitting out  |