# Created by Sam Davies at 20/07/2016
Feature: Calculate the budget for a student
  As a standard User
  I want input my spending
  So that know how much I have spent

  Background:
    Given the university "Aberdeen" exists
    Given this set of options
      | Model            | Instance Name     | Value |
      | Accommodation    | Halls             | 500   |
      | Catering         | Self Catered      | 30    |
      | Item             | Pans              | 6     |
      | Item             | Plates            | 2     |
      | HomeTrips        | Once a month      | 40    |
      | GymMembership    | Yes               | 150   |
      | Haircut          | Twice a semester  | 120   |
      | Shopping         | £200 - £300       | 250   |
      | Drinks           | beer              | 3.2   |
      | Drinks           | wine              | 3     |
      | RoundsForFriends | 1 round per night | 20    |
      | PostNightMeal    | Yes               | 6     |
      | Taxi             | Yes Taxi          | 15    |

  Scenario: Calculate spending on the Budget Page
    When I visit the "budget" page
    And I select "Aberdeen" for the question "What university do you go to?"
    And I enter "budget" "2000" for the question "What’s your total maintenance loan"
    And I select option "Halls" for the question "What type of accommodation are you living in"
    And I select option "Self Catered" for the question "Are you catered or self-catered?"
    Then I have "1370" left

  Scenario: Calculate spending on the Expenses Page
    When I visit the "expenses" page
    And I select option "Pans" for the question "Do you need the following items?"
    And I select option "Plates" for the question "Do you need the following items?"
    And I select option "Once a month" for the question "How regularly do you plan on going home?"
    And I select option "Yes" for the question "Are you going to get a gym membership?"
    And I select option "Twice a semester" for the question "How regularly do you get your hair cut?"
    And I select option "£200 - £300" for the question "How much do you spend shopping online per month?"
    Then I have "-568" left

  Scenario: Calculate spending on the Going Out Page
    When I visit the "going-out" page
    And I select option "Monday" for the question "How many drinks you plan on having on an average night out?"
    And I select option "Tuesday" for the question "How many drinks you plan on having on an average night out?"
    And I select option "2 beer" for the question "How many drinks do you plan on having on an average night out?"
    And I select option "1 wine" for the question "How many drinks do you plan on having on an average night out?"
    And I select option "1 round per night" for the question "Do you buy rounds for friends?"
    And I select option "Yes" for the question "After a night out, do you get a post night out snack?"
    And I select option "Yes Taxi" for the question "Do you get a taxi back after a night out?"
    Then I have "-100.8" left

#  Scenario: Calculate spending for overspend
#    When I visit the "budget" page
#    And I select "Aberdeen" for the question "What university do you go to?"
#    And I enter "budget" "2000" for the question "What’s your total maintenance loan"
#    And I select option "Halls" for the question "What type of accommodation are you living in"
#    And I select option "Self Catered" for the question "Are you catered or self-catered?"
#    And I click "Continue to your expenses >"
#    And I select option "Pans" for the question "Do you need the following items?"
#    And I select option "Plates" for the question "Do you need the following items?"
#    And I select option "Once a month" for the question "How regularly do you plan on going home?"
#    And I select option "Yes" for the question "Are you going to get a gym membership?"
#    And I select option "Twice a semester" for the question "How regularly do you get your hair cut?"
#    And I select option "£200 - £300" for the question "How much do you spend shopping online per month?"
#    And I click "Continue to going out >"
#    And I select option "Monday" for the question "How many drinks you plan on having on an average night out?"
#    And I select option "Tuesday" for the question "How many drinks you plan on having on an average night out?"
#    And I select option "2 beer" for the question "How many drinks do you plan on having on an average night out?"
#    And I select option "1 wine" for the question "How many drinks do you plan on having on an average night out?"
#    And I select option "1 round per night" for the question "Do you buy rounds for friends?"
#    And I select option "Yes" for the question "After a night out, do you get a post night out snack?"
#    And I select option "Yes" for the question "Do you get a taxi back after a night out?"
#    And I click "Show me the results!"
#    Then the headline should show "You have overspent by £TBC over freshers"
#    And the summary should show "Fair enough, you plan..."
#    And the advice should show "Sadly, your overspending means.."
