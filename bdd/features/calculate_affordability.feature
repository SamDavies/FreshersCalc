# Created by Sam Davies at 30/07/2016
Feature: Calculate the affordability of items for a student
  As a standard User
  I want input my spending
  So that know how much I have spent

  Scenario: Calculate round the world trips
    Given I visit the "budget" page
    And I enter "budget" "5401" for the question "What’s your total maintenance loan"
    When I click the "Results" link
    Then the page contains "2 round the world trips"

  Scenario: Calculate pints of ale
    Given I visit the "budget" page
    And I enter "budget" "116" for the question "What’s your total maintenance loan"
    When I click the "Results" link
    Then the page contains "33 pints of nice ale"

  Scenario: Calculate English breakfast
    Given I visit the "budget" page
    And I enter "budget" "72" for the question "What’s your total maintenance loan"
    When I click the "Results" link
    Then the page contains "24 Wetherspoon's English breakfasts"

  Scenario: Calculate 1p sweets
    Given I visit the "budget" page
    And I enter "budget" "9" for the question "What’s your total maintenance loan"
    When I click the "Results" link
    Then the page contains "100's of 1p sweets"

  Scenario: Calculate 1p sweets with only 1 sweet
    Given I visit the "budget" page
    And I enter "budget" "0.011" for the question "What’s your total maintenance loan"
    When I click the "Results" link
    Then the page contains "1 sweet exactly!"