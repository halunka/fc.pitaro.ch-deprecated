Feature: Authorable Landing Page
  As a footballer
  I want to add scores to the Landing Page
  So that fans can check out how good we play

  Scenario: Visitors can see a game score
    Given I am a new visitor
    When I navigate to the Landing Page
    Then I see the derby "FC Pitaro Fotografie vs Chur 97"
