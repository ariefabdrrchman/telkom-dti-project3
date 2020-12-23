# ./features/login-success.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: User success to login
        Given user browse login page
        And user fill email field
        And user fill password field
        When user click login button
        Then user can see home page
