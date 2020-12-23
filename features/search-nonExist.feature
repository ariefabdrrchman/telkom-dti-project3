# ./features/search-nonExist.feature

Feature: Search
    As non user
    I want to be able to use search feature

    Scenario: User success to search not existing game
        Given user browse game page to search
        And user fill non exist game on search field
        When user clicking the search button
        Then user can see warning pop up
