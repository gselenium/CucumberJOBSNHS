$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\gktech\\testcases\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Upload my resume Jobs NHS portal",
  "description": "In order to get the good job\r\nI am uploading my resume.",
  "id": "upload-my-resume-jobs-nhs-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into JOBS NHS portal",
  "description": "",
  "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loguname\" as \"\u003cUserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"\u003cHomepage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;",
  "rows": [
    {
      "cells": [
        "browser",
        "UserName",
        "Password",
        "Homepage"
      ],
      "line": 15,
      "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;;1"
    },
    {
      "cells": [
        "Mozilla",
        "vardhan.kg",
        "testing123",
        "Jobs NHS home page"
      ],
      "line": 16,
      "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;;2"
    },
    {
      "cells": [
        "Mozilla",
        "govardhan",
        "selenium123",
        "My Jobs Home page"
      ],
      "line": 17,
      "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login into JOBS NHS portal",
  "description": "",
  "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loguname\" as \"vardhan.kg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"testing123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"Jobs NHS home page\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.I_Open_Browser(String)"
});
formatter.result({
  "duration": 11982078529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 3610805398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loglink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 476958630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loguname",
      "offset": 9
    },
    {
      "val": "vardhan.kg",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 407469015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logpass",
      "offset": 9
    },
    {
      "val": "testing123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 284157853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logbutton",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 1891247423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jobs NHS home page",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.I_got(String)"
});
formatter.result({
  "duration": 158439,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into JOBS NHS portal",
  "description": "",
  "id": "upload-my-resume-jobs-nhs-portal;login-into-jobs-nhs-portal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"loglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loguname\" as \"govardhan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"selenium123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"My Jobs Home page\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.I_Open_Browser(String)"
});
formatter.result({
  "duration": 8888840849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 3705806173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loglink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 405175090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loguname",
      "offset": 9
    },
    {
      "val": "govardhan",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 593222282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logpass",
      "offset": 9
    },
    {
      "val": "selenium123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 406546745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logbutton",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 2009459759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Jobs Home page",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.I_got(String)"
});
formatter.result({
  "duration": 754512,
  "status": "passed"
});
formatter.uri("main\\resources\\com\\gktech\\testcases\\registration.feature");
formatter.feature({
  "line": 1,
  "name": "I want to Register in JOBs NHS",
  "description": "in order to get the job in NHS\r\nI am uploading my resume.",
  "id": "i-want-to-register-in-jobs-nhs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"\u003cFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"\u003cSurName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"\u003cRegEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regpass\" as \"\u003cRegPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regsecQues\" as \"\u003cSecurityQue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regsecans\" as \"\u003cSecAns\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \"regchebox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;",
  "rows": [
    {
      "cells": [
        "browser",
        "FirstName",
        "SurName",
        "Country",
        "RegEmail",
        "RegPass",
        "SecurityQue",
        "SecAns"
      ],
      "line": 21,
      "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;;1"
    },
    {
      "cells": [
        "Mozilla",
        "Govardhan",
        "Karnati",
        "India",
        "gova@gmail.com",
        "test@123",
        "A memorable place?",
        "singapur"
      ],
      "line": 22,
      "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;;2"
    },
    {
      "cells": [
        "Mozilla",
        "Naresh",
        "Bandaru",
        "Aruba",
        "test@gmail.com",
        "sele@1234",
        "A memorable name?",
        "Delhi"
      ],
      "line": 23,
      "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"Govardhan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"Karnati\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"gova@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regpass\" as \"test@123\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regsecQues\" as \"A memorable place?\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regsecans\" as \"singapur\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \"regchebox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.I_Open_Browser(String)"
});
formatter.result({
  "duration": 8105884865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 4330399032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reglink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 1381020592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regfname",
      "offset": 9
    },
    {
      "val": "Govardhan",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 3694148930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsurname",
      "offset": 9
    },
    {
      "val": "Karnati",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 905405658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcountry",
      "offset": 9
    },
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 794533804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regemail",
      "offset": 9
    },
    {
      "val": "gova@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 906350621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regpass",
      "offset": 9
    },
    {
      "val": "test@123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 1373878667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecQues",
      "offset": 9
    },
    {
      "val": "A memorable place?",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 815800329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecans",
      "offset": 9
    },
    {
      "val": "singapur",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 779869455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regchebox",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 852774227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcreate",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 3763991082,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "i-want-to-register-in-jobs-nhs;register-jobs-nhs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"Naresh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"Bandaru\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"Aruba\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"test@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regpass\" as \"sele@1234\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regsecQues\" as \"A memorable name?\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regsecans\" as \"Delhi\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \"regchebox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.I_Open_Browser(String)"
});
formatter.result({
  "duration": 14358600013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 4946348237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reglink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 1075713726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regfname",
      "offset": 9
    },
    {
      "val": "Naresh",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 2484674746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsurname",
      "offset": 9
    },
    {
      "val": "Bandaru",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 387489860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcountry",
      "offset": 9
    },
    {
      "val": "Aruba",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 334565865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regemail",
      "offset": 9
    },
    {
      "val": "test@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 454808329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regpass",
      "offset": 9
    },
    {
      "val": "sele@1234",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 413296015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecQues",
      "offset": 9
    },
    {
      "val": "A memorable name?",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 370910463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecans",
      "offset": 9
    },
    {
      "val": "Delhi",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 513331999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regchebox",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 466483401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcreate",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 12884471003,
  "status": "passed"
});
});