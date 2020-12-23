# ./features/register-fail-password.feature

Feature: Register
    As a new user
    I want to be able to register

    Scenario: User fails to register because password less than 8 characters
        Given user browse page to sign up or register
        And user fill name field
        And user fill unregistered email in the field
        And user fill unregistered username in the field
        And user fill incorrect password
        And user click the button of accept terms and conditions
        When user click the make an account button
        Then user see error
