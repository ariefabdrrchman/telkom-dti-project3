# ./features/login-fail-password.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: User fails to login because invalid password
        Given user browse login page
        And user fill email field with right username
        And user fill password field with wrong password
        When user click the log in button
        Then user can see popup message
