**QA Engineer test.**

1. Consider the below scenario and write an automated test using one of preferred javascript framework (can be webdriver/puppeteer/cypress.js/intern.js/etc). Make sure the solution is a working script that we can run (must be valid javascript). Please send us instructions on how to run. The scenario is as follows:
User already created an account in our application (piktochart.com). After signing in, he/she goes to infographics and searches for an organization structure template. Pick one from the search result list and edits the name in the structure. When you are done, save the template and check how it looks like in presentation mode. When work is done, user logs out.

2. Consider the following piece of pseudocode function and write tests to achieve highest coverage. Consider different types of code coverage. You may use preferred testing framework, but tests must be written in javascript.
if a < 100
  if b > 0
    print “You can open the window”
  else
    print “You cannot open the window”
  end
elsif a >= 100 && a < 500
  print “You are allowed to open the doors”
else
  print “You are allowed to turn on the light”
end


**Running tests.**
1. **npm run start-e2e-test** - to install dependencies and run Piktochart test <br />
   **npm run e2e-test** - to run test after npm install