module.exports = function (app) {

// BETA 02

  app.post('/beta02/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta02/partner')
    } else {
      res.redirect('/beta02/overview')
    }
  });

  app.post('/beta02/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta02/partner-yes')
    } else {
      res.redirect('/beta02/partner-no')
    }
  });

  app.post('/beta02/money-you-owe', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta02/debt-repayment')
    } else {
      res.redirect('/beta02/personal-details')
    }
  });

  app.post('/beta02/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta02/loan-amount-child')
    } else {
      res.redirect('/beta02/loan-amount-partner')
    }
  });

  app.post('/beta02/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta02/loan-amount-child')
    } else {
      res.redirect('/beta02/loan-amount-single')
    }
  });

// END OF BETA 02
}