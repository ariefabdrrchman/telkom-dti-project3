# ./features/register-fail.feature

Feature: Register
    As a new user
    I want to be able to register

    Scenario: User fails to register because registered account
        Given user browse page for sign up or register
        And user fill fullname field
        And user fill email with registered email
        And user fill username field with already registered username
        And user fill the password
        And user click button of accept terms and conditions
        When user click the make account button
        Then user see error pop up message or alert
