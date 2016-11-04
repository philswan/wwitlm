module.exports = function (app) {

// BETA 04

  app.post('/beta04/less-than-100', function (req, res) {
    if (req.body.lt100 === 'No') {
      res.redirect('/beta04/about-benefit')
    } else {
      res.redirect('/beta04/about-benefit')
    }
  });

  app.post('/beta04/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta04/partner')
    } else {
      res.redirect('/beta04/overview')
    }
  });

  app.post('/beta04/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta04/partner-yes')
    } else {
      res.redirect('/beta04/partner-no')
    }
  });

  app.post('/beta04/debt-repayments-partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta04/debt-repayment')
    } else {
      res.redirect('/beta04/personal-details')
    }
  });

  app.post('/beta04/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta04/loan-amount-child')
    } else {
      res.redirect('/beta04/loan-amount-partner')
    }
  });

  app.post('/beta04/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta04/loan-amount-child-single')
    } else {
      res.redirect('/beta04/loan-amount-single')
    }
  });

// END OF BETA 04
}