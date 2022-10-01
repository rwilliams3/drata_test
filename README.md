# Drata Test
## Web
###### The web automation is accopmlished via the Cypress framework. The automation consists of a simple custom command that navigates to each page, validates the api response, the visibilty of the header menu, and ensures that the url pathname is correct.

To run the framework with an open console :`npx cypress open`
Note: Within the E2E module of the Cypress console, spec files can be ran individaully OR you can click "all.cy.js" to run them all. 
      Running in open console will not generate a test report


To run the framework in headless mode via CLI :` npx cypress run  --spec "cypress/e2e/all.cy.js`
Note: If ran in headless mode a report and video will automacally be generated. The video can be found in /cypress/videos and the html report 
can be found in /cypress/reports. 


## API
###### I admittedly do not have have enough prior experience with Jest to complete this task within a reasonable timeframe. I made a lackluster attempt but theres
###### not much to showcase here. Sorry
