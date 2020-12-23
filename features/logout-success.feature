# ./features/logout-success.feature

Feature: Logout
    As a user
    I want to be able to logout

    Scenario: User success to logout
        Given user browse log in for user page
        And user fill the email field
        And user fill the password field
        And user click the button of login
        And user can see its homepage
        And user click toggle down
        When user click logout button
        Then user see homepage
