# ./features/search-byUser-nonExist.feature

Feature: Search
    As a user
    I want to be able to use search feature

    Scenario: User success to search a non-existing game
        Given user browse user login pages
        And user fill in email field
        And user fill in password field
        And user click button of login
        And user able to see homepage
        And user went game page
        And user fill search field with non exist game
        When user click search button icon
        Then user see the game which doesn't exist
