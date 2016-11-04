module.exports = function (app) {

// BETA 03

  app.post('/beta03/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta03/partner')
    } else {
      res.redirect('/beta03/overview')
    }
  });

  app.post('/beta03/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta03/partner-yes')
    } else {
      res.redirect('/beta03/partner-no')
    }
  });

  app.post('/beta03/debt-repayments-partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta03/debt-repayment')
    } else {
      res.redirect('/beta03/personal-details')
    }
  });

  app.post('/beta03/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta03/loan-amount-child')
    } else {
      res.redirect('/beta03/loan-amount-partner')
    }
  });

  app.post('/beta03/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta03/loan-amount-child-single')
    } else {
      res.redirect('/beta03/loan-amount-single')
    }
  });

// END OF BETA 03
}