Feature: Upload my resume Jobs NHS portal
In order to get the good job
I am uploading my resume.

Scenario Outline: Login into JOBS NHS portal
Given I open "<browser>"
When I navigate "appurl"
Then I click on "loglink"
Then I enter "loguname" as "<UserName>"
And I enter "logpass" as "<Password>"
And I click on "logbutton"
Then I got the "<Homepage>"

 Examples:
 |browser	|UserName	|Password	|Homepage			|
 |Mozilla	|vardhan.kg	|testing123	|Jobs NHS home page	|
 |Mozilla	|govardhan	|selenium123|My Jobs Home page	|
 
 