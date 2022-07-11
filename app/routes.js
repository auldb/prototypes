const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'juggling-balls-answer'

router.post('/motr-v0-6/route-decision-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var routeDecision = req.session.data['route-decision']

  // Check whether the variable matches a condition
  if (routeDecision == "Set up a new MOT reminder"){
    // Send user to next page
    res.redirect('https://www.reminders.mot-testing.service.gov.uk/vrm')
  } else {
    // Send user to ineligible page
    res.redirect('/motr-v0-6/contact-method')
  }

})


router.post('/motr-v0-6/contact-method-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var contactMethod = req.session.data['contact-method']

  // Check whether the variable matches a condition
  if (contactMethod == "email"){
    // Send user to next page
    res.redirect('/motr-v0-6/email')


  } else {
    // Send user to ineligible page
    res.redirect('/motr-v0-6/mobile')
  }

})


module.exports = router
