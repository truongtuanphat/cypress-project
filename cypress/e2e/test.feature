Feature: Test feature

  Scenario Outline: Test scenario
    Given I login into portal with default user
    When I click element with text '<page-name>'
    Then I am on the '<path>' page
    Examples:
        | page-name                       | path                                                  |
        | GTO Sales Overview              | /sit/#/gto-submission/gto-sales-overview              |
        | Update GTO Sales Entry By Month | /sit/#/gto-submission/update-gto-sales-entry-by-month |