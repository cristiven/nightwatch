Feature: Ecosia Search

Scenario: Searching Ecosia

  Given I open Ecosia's search page
  When I'm looking for Nightwatch "Nightwatch"
  Then The search must match