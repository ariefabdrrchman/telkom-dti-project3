# ./features/register-fail-username.feature

Feature: Register
    As a new user
    I want to be able to register

    Scenario: User fails to register because registered username
        Given user browse page for register
        And user fill full name box
        And user fill unregistered email
        And user fill username field with registered username
        And user fill user password
        And user click accept terms and conditions button
        When user click make account
        Then user see pop up error message
