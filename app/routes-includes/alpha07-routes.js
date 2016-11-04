module.exports = function (app) {

// ALPHA 07

  app.post('/alpha07/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/alpha07/partner')
    } else {
      res.redirect('/alpha07/overview')
    }
  });

  app.post('/alpha07/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/alpha07/partner-yes')
    } else {
      res.redirect('/alpha07/partner-no')
    }
  });

  app.post('/alpha07/money-you-owe', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/alpha07/debt-repayment')
    } else {
      res.redirect('/alpha07/personal-details')
    }
  });

// END OF ALPHA 07
}