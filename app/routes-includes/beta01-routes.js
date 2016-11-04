module.exports = function (app) {

// BETA 01

  app.post('/beta01/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta01/partner')
    } else {
      res.redirect('/beta02/overview')
    }
  });

  app.post('/beta01/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta01/partner-yes')
    } else {
      res.redirect('/beta01/partner-no')
    }
  });

  app.post('/beta01/money-you-owe', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta01/debt-repayment')
    } else {
      res.redirect('/beta01/personal-details')
    }
  });

  app.post('/beta01/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta01/loan-amount-child')
    } else {
      res.redirect('/beta01/loan-amount-partner')
    }
  });

  app.post('/beta01/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta01/loan-amount-child')
    } else {
      res.redirect('/beta01/loan-amount-single')
    }
  });

// END OF BETA 01
}