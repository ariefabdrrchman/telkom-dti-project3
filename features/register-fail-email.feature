# ./features/register-fail-email.feature

Feature: Register
    As a new user
    I want to be able to register

    Scenario: User fails to register because registered email
        Given user browse page for register or sign up
        And user fill fullname box
        And user fill registered email
        And user fill username field with unregistered username
        And user fill user the password
        And user click the accept terms and conditions button
        When user click make account button
        Then user see error message
