# ./features/login-failUsername.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: User fails to login because unregistered account
        Given user browse login page
        And user fill email field with unregistered email
        And user fill password field with unregistered password
        When user push the login button
        Then user can see pop up or warning message
