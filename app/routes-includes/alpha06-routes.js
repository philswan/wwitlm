module.exports = function (app) {

// ALPHA 06

  app.post('/alpha06/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/alpha06/partner')
    } else {
      res.redirect('/alpha06/overview')
    }
  });

  app.post('/alpha06/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/alpha06/partner-yes')
    } else {
      res.redirect('/alpha06/partner-no')
    }
  });

  app.post('/alpha06/money-you-owe', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/alpha06/debt-repayment')
    } else {
      res.redirect('/alpha06/personal-details')
    }
  });

// END OF ALPHA 06
}