Feature: Login
Scenario Outline: Filling the simple form


Given open the browser and enter url
When enter First Name<fname>
And enter last name<lname>
And enter email<email>
And enter contact<contact>
And enter message<msg>
And click on login

Examples:
|fname|Mohit|
|lname|Gupta|
|email|MohitGupta9185@gmail.com|
|msg|Hey login|