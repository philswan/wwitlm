module.exports = function (app) {

// BETA 06

  app.post('/beta06/outstanding-social-fund-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta06/not-sure-eligible-social-fund');
    }
  });

  app.post('/beta06/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
      res.redirect('/beta06/current-benefits-pc');
      // Income Support
    } else if (req.body.benefit === 'is') {
      res.redirect('/beta06/current-benefits-is');
      // Employment and Support Allowance
    } else if (req.body.benefit === 'esa') {
      if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta06/current-benefits-esa');
      } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta06/not-eligible-current-benefits');
      } else {
        res.redirect('/beta06/not-sure-eligible-esa');
      }
      // Jobseeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
      if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/beta06/current-benefits-jsa');
      } else if (req.body.jsabenefittype === 'jsabenefittype2') {
        res.redirect('/beta06/not-eligible-current-benefits');
      } else {
        res.redirect('/beta06/not-sure-eligible-jsa');
      }
      // Not eligible
    } else {
      res.redirect('/beta06/not-eligible-current-benefits');
    }
  });

  // Pension Credit question
  app.post('/beta06/current-benefits-pc', function (req, res) {
    if (req.body.duration === 'over6') {
      res.redirect('/beta06/borrow-amount');
    } else if (req.body.duration === 'under6') {
      res.redirect('/beta06/not-eligible-current-benefits');
    }
  });

  // Income Support question
  app.post('/beta06/current-benefits-is', function (req, res) {
    if (req.body.duration === 'over6') {
      res.redirect('/beta06/borrow-amount');
    } else if (req.body.duration === 'under6') {
      res.redirect('/beta06/not-eligible-current-benefits');
    }
  });

  // ESA question
  app.post('/beta06/current-benefits-esa', function (req, res) {
    if (req.body.duration === 'over6') {
      res.redirect('/beta06/borrow-amount');
    } else if (req.body.duration === 'under6') {
      res.redirect('/beta06/not-eligible-current-benefits');
    }
  });

  // JSA question
  app.post('/beta06/current-benefits-jsa', function (req, res) {
    if (req.body.duration === 'over6') {
      res.redirect('/beta06/borrow-amount');
    } else if (req.body.duration === 'under6') {
      res.redirect('/beta06/not-eligible-current-benefits');
    }
  });

  // Borrow amount
  app.post('/beta06/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta06/industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta06/not-eligible-borrow-amount');
    }
  });

  // Industrial action
  app.post('/beta06/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/eligible');
    }
  });

  // Eligable
  app.post('/beta06/eligible', function (req, res) {
    res.redirect('/beta06/partner');
  });

  // Partner
  app.post('/beta06/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/your-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/recent-partners');
    }
  });

  // Recent partners
  app.post('/beta06/recent-partners', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/child-benefit-you-or-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/child-benefit');
    }
  });

  // Your partner
  app.post('/beta06/your-partner', function (req, res) {
    res.redirect('/beta06/child-benefit-you-or-partner');
  });

  // Child benefit
  app.post('/beta06/child-benefit', function (req, res) {
    res.redirect('/beta06/loan-amount');
  });

  // Child benefit (you or your partner)
  app.post('/beta06/child-benefit-you-or-partner', function (req, res) {
    res.redirect('/beta06/loan-amount');
  });

  // Loan amount
  app.post('/beta06/loan-amount', function (req, res) {
    res.redirect('/beta06/savings');
  });

  // Savings
  app.post('/beta06/savings', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/debt-repayments');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/debt-repayments');
    }
  });

  // Debt repayments
  app.post('/beta06/debt-repayments', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/debt-repayments-detail');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/about-you');
    }
  });

  // Debt repayments detail
  app.post('/beta06/debt-repayments-detail', function (req, res) {
    res.redirect('/beta06/debt-repayments-other');
  });

  // Other debt repayments
  app.post('/beta06/debt-repayments-other', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta06/debt-repayments-detail');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta06/about-you');
    }
  });

  // About you
  app.post('/beta06/about-you', function (req, res) {
    res.redirect('/beta06/your-contact-details');
  });

  // Your contact details
  app.post('/beta06/your-contact-details', function (req, res) {
    res.redirect('/beta06/declaration');
  });

  // Declaration
  app.post('/beta06/declaration', function (req, res) {
    res.redirect('/beta06/what-happens-next');
  });

// END OF BETA 06
}