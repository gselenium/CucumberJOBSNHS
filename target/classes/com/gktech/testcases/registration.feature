Feature: I want to Register in JOBs NHS
in order to get the job in NHS
I am uploading my resume.

Scenario Outline: Register JOBS NHS
Given I open "<browser>"
When I navigate "appurl"
Then I click on "reglink"
Then I enter "regfname" as "<FirstName>"
And I enter "regsurname" as "<SurName>"
And I enter "regcountry" as "<Country>"
And I enter "regemail" as "<RegEmail>"
And I enter "regpass" as "<RegPass>"
And I enter "regsecQues" as "<SecurityQue>"
And I enter "regsecans" as "<SecAns>"
Then I click on "regchebox"
Then I click on "regcreate"


 Examples:
 |browser	|FirstName	|SurName	|Country	|RegEmail		|RegPass	|SecurityQue		|SecAns		|
 |Mozilla	|Govardhan	|Karnati	|India		|gova@gmail.com	|test@123	|A memorable place?	|singapur	|
 |Mozilla	|Naresh		|Bandaru	|Aruba		|test@gmail.com	|sele@1234	|A memorable name?	|Delhi		|

