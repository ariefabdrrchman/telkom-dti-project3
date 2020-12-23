# ./features/search-byUser-exist.feature

Feature: Search
    As a user
    I want to be able to use search feature

    Scenario: User success to search an exist game
        Given user browse login pages
        And user fill email box
        And user fill password box
        And user click login
        And user can see homepage
        And user go to game page
        And user fill search with game
        When user click the search button
        Then user see the game
