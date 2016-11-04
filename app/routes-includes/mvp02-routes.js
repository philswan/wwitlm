module.exports = function (app) {

  //MVPv02
  app.post('/MVPv02/before-you-start', function (req, res) {
  });

  app.post('/MVPv02/less-than-100', function (req, res) {
    if (req.body.lt100 === 'No') {
      res.redirect('/MVPv02/eligibility-exit-100')
    } else {
      res.redirect('/MVPv02/industrial-action')
    }
  });

  app.post('/MVPv02/social-fund-debt', function (req, res) {
    if (req.body.socialfund === 'No') {
      res.redirect('/MVPv02/about-benefit')
    } else if (req.body.socialfund ==='Yes') {
      res.redirect('/MVPv02/eligibility-exit-social-fund-la')
    } else {
      res.redirect('/MVPv02/eligibility-exit-social-fund')
    }

  });

  app.post('/MVPv02/industrial-action', function (req, res) {
    if (req.body.industrialaction=== 'No') {
      res.redirect('/MVPv02/eligibility-confirmation')
    } else {
      res.redirect('/MVPv02/eligibility-exit-industrial-action')
    }

  });

  app.post('/MVPv02/about-benefit', function (req, res) {
    var hasEnoughBenefit=(
      req.body.incomesupport6 === 'Yes' ||
      req.body.pensioncredit6 === 'Yes' ||
      req.body.jsalength === 'Yes' ||
      req.body.esalength === 'Yes'
    )
    var needsMoreInfo=(
      req.body.esatype === 'Unsure' ||
      req.body.jsatype === 'Unsure'
    )
    if (hasEnoughBenefit){
      res.redirect('/MVPv02/less-than-100')
    } else if (needsMoreInfo){
      res.redirect('/MVPv02/eligibility-exit-benefit')
    } else {
      res.redirect('/MVPv02/eligibility-exit-benefit-la')
    }
  });

  app.post('/MVPv02/partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/MVPv02/partner-yes')
    } else {
      res.redirect('/MVPv02/partner-no')
    }
  });

  app.post('/MVPv02/debt-repayments-partner', function (req, res) {
    if (req.body.partner === 'Yes') {
      res.redirect('/MVPv02/debt-repayment')
    } else {
      res.redirect('/MVPv02/personal-details')
    }
  });

  app.post('/MVPv02/children', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/MVPv02/loan-amount-child')
    } else {
      res.redirect('/MVPv02/loan-amount-partner')
    }
  });

  app.post('/MVPv02/children-no-partner', function (req, res) {
    if (req.body.children === 'Yes') {
      res.redirect('/MVPv02/loan-amount-child-single')
    } else {
      res.redirect('/MVPv02/loan-amount-single')
    }
  });

// END OF MVPV02
}