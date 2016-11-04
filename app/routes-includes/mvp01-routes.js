module.exports = function (app) {

// MVPV01

  app.post('/MVPv01/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/MVPv01/partner')
    } else {
      res.redirect('/MVPv01/overview')
    }
  });

  app.post('/MVPv01/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/MVPv01/partner-yes')
    } else {
      res.redirect('/MVPv01/partner-no')
    }
  });

  app.post('/MVPv01/money-you-owe', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/MVPv01/debt-repayment')
    } else {
      res.redirect('/MVPv01/personal-details')
    }
  });

  app.post('/MVPv01/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/MVPv01/loan-amount-child')
    } else {
      res.redirect('/MVPv01/loan-amount-partner')
    }
  });

  app.post('/MVPv01/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/MVPv01/loan-amount-child-single')
    } else {
      res.redirect('/MVPv01/loan-amount-single')
    }
  });

// END OF MVPV01
}