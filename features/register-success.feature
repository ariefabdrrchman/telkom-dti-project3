# ./features/register-success.feature

Feature: Register
    As a new user
    I want to be able to register

    Scenario: User success to register
        Given user browse register page
        And user fill full name field
        And user fill email
        And user fill username
        And user fill password
        And user click accept terms and conditions
        When user click make an account
        Then user see home page
