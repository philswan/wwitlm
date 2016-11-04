module.exports = function (app) {

// BETA 05
  app.post('/beta05/less-than-100', function (req, res) {
    if (req.body.lt100 === 'No') {
      res.redirect('/beta05/about-benefit')
    } else {
      res.redirect('/beta05/about-benefit')
    }
  });

  app.post('/beta05/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta05/partner')
    } else {
      res.redirect('/beta05/overview')
    }
  });

  app.post('/beta05/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta0/5partner-yes')
    } else {
      res.redirect('/beta05/partner-no')
    }
  });

  app.post('/beta05/debt-repayments-partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta05/debt-repayment')
    } else {
      res.redirect('/beta05/personal-details')
    }
  });

  app.post('/beta05/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta05/loan-amount-child')
    } else {
      res.redirect('/beta05/loan-amount-partner')
    }
  });

  app.post('/beta05/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta05/loan-amount-child-single')
    } else {
      res.redirect('/beta05/loan-amount-single')
    }
  });

  //beta05_validation
  app.post('/beta05_validation/less-than-100', function (req, res) {
    if (req.body.lt100 === 'No') {
      res.redirect('/beta05_validation/about-benefit')
    } else {
      res.redirect('/beta05_validation/about-benefit')
    }
  });

  app.post('/beta05_validation/about-benefit', function (req, res) {
    if (req.body.benefit === 'Yes') {
      res.redirect('/beta05_validation/partner')
    } else {
      res.redirect('/beta05_validation/overview')
    }
  });

  app.post('/beta05_validation/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta05_validation/partner-yes')
    } else {
      res.redirect('/beta05_validation/partner-no')
    }
  });

  app.post('/beta05_validation/debt-repayments-partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/beta05_validation/debt-repayment')
    } else {
      res.redirect('/beta05_validation/personal-details')
    }
  });

  app.post('/beta05_validation/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta05_validation/loan-amount-child')
    } else {
      res.redirect('/beta05_validation/loan-amount-partner')
    }
  });

  app.post('/beta05_validation/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/beta05_validation/loan-amount-child-single')
    } else {
      res.redirect('/beta05_validation/loan-amount-single')
    }
  });

// END OF BETA 05
}