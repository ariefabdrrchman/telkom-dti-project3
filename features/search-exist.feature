# ./features/search-exist.feature

Feature: Search
    As a non user
    I want to be able to use search feature

    Scenario: User success to search an existing game
        Given user browse games page
        And user fill search field
        When user click search button
        Then user can see the game
