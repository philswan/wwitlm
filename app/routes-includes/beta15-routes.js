var cookieParser = require('cookie-parser');

module.exports = function (app) {
  app.use(cookieParser());

  
  // Cool cookie stuff that James did
  app.use(function(req, res, next) {
    res.locals.hasPartner = (req.cookies.partner === 'yes' ) ? true : false
    res.cookie('test', 'my test')
    next()
  })

  app.use(function(req, res, next) {
    res.locals.hasChildren = (req.cookies.children === 'yes' ) ? true : false
    res.cookie('test', 'my test')
    next()
  })

  /////////////////////////////////////////////////////////
  // 1. BORROW AMOUNT
  /////////////////////////////////////////////////////////

  // Borrow amount
  app.post('/beta15/1-borrow-amount', function (req, res) {
    if (req.body.choice1==='yes') {
      res.cookie('partner', req.body.choice1);
    } else {
      res.cookie('partner', 'no');
    }
    if (req.body.choice2==='yes') {
      res.cookie('children', req.body.choice2);
    } else {
      res.cookie('children', 'no');
    }
      res.redirect('/beta15/2-benefit');
  });

  /////////////////////////////////////////////////////////
  // 2. BENEFITS
  /////////////////////////////////////////////////////////

  // Benefit
  app.get('/beta15/2-benefit', function (req, res) {
    res.render('beta15/2-benefit', {'partner': res.locals.hasPartner} );
  });

  app.post('/beta15/2-benefit', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
      res.redirect('/beta15/2-pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
      res.redirect('/beta15/2-income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
      res.redirect('/beta15/2-esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
      res.redirect('/beta15/2-jsa');
    // None of the above
    } else {
      res.redirect('/beta15/x-benefit');
    }
  });

  // ESA
  app.get('/beta15/2-esa', function (req, res) {
    res.render('beta15/2-esa', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-esa', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/beta15/2-esa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/beta15/2-esa-previous-partner');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // ESA type
  app.get('/beta15/2-esa-type', function (req, res) {
    res.render('beta15/2-esa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-esa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/beta15/x-esa-type');
    } else {
      res.redirect('/beta15/3-savings');
    }
  });

  // ESA previous partner
  app.get('/beta15/2-esa-previous-partner', function (req, res) {
    res.render('beta15/2-esa-previous-partner', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-esa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/beta15/3-savings');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });
  
  // Benefit JSA
  app.get('/beta15/2-jsa', function (req, res) {
    res.render('beta15/2-jsa', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-jsa', function (req, res) {
    if (req.body.answers === '12') {
      res.redirect('/beta15/3-savings');
    } else if (req.body.answers === '6') {
      res.redirect('/beta15/2-jsa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/beta15/2-jsa-previous-partner');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // JSA type
  app.get('/beta15/2-jsa-type', function (req, res) {
    res.render('beta15/2-jsa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-jsa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/beta15/x-jsa-type');
    } else {
      res.redirect('/beta15/3-savings');
    }
  });

  // JSA previous partner
  app.get('/beta15/2-jsa-previous-partner', function (req, res) {
    res.render('beta15/2-jsa-previous-partner', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-jsa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/beta15/3-savings');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // Income Support
  app.get('/beta15/2-income-support', function (req, res) {
    res.render('beta15/2-income-support', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-income-support', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/beta15/3-savings');
    } else if (req.body.answers === '3') {
      res.redirect('/beta15/2-income-support-previous-partner');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // Income Support previous partner
  app.get('/beta15/2-income-support-previous-partner', function (req, res) {
    res.render('beta15/2-income-support-previous-partner', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-income-support-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/beta15/3-savings');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // Benefit Pension Credit
  app.get('/beta15/2-pension-credit', function (req, res) {
    res.render('beta15/2-pension-credit', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-pension-credit', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/beta15/3-savings');
    } else if (req.body.answers === '3') {
      res.redirect('/beta15/2-pension-credit-previous-partner');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  // Pension Credit previous partner
  app.get('/beta15/2-pension-credit-previous-partner', function (req, res) {
    res.render('beta15/2-pension-credit-previous-partner', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/2-pension-credit-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/beta15/3-savings');
    } else {
      res.redirect('/beta15/x-benefit-length');
    }
  });

  /////////////////////////////////////////////////////////
  // 3. SAVINGS
  /////////////////////////////////////////////////////////

  // Savings
  app.get('/beta15/3-savings', function (req, res) {
    res.render('beta15/3-savings', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/3-savings', function (req, res) {
    res.redirect('/beta15/4-social-fund');
  });

  /////////////////////////////////////////////////////////
  // 4. REPAYMENTS
  /////////////////////////////////////////////////////////

  // Social fund
  app.get('/beta15/4-social-fund', function (req, res) {
    res.render('beta15/4-social-fund', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/4-social-fund', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/beta15/x-social-fund');
    } else {
      res.redirect('/beta15/4-outgoings');
    }
  });

  // Credit and store cards
  app.get('/beta15/4-credit-store-cards', function (req, res) {
    res.render('beta15/4-credit-store-cards', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/4-credit-store-cards', function (req, res) {
    res.redirect('/beta15/4-loans');
  });

  // Loans
  app.get('/beta15/4-loans', function (req, res) {
    res.render('beta15/4-loans', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/4-loans', function (req, res) {
    res.redirect('/beta15/4-rent-to-own');
  });

  // Rent to own
  app.get('/beta15/4-rent-to-own', function (req, res) {
    res.render('beta15/4-rent-to-own', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/4-rent-to-own', function (req, res) {
    res.redirect('/beta15/4-landlord');
  });

  // Landlord
  app.get('/beta15/4-landlord', function (req, res) {
    res.render('beta15/4-landlord', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/4-landlord', function (req, res) {
    res.redirect('/beta15/5-about-you');
  });

  /////////////////////////////////////////////////////////
  // 5. ABOUT YOU / PARTNER / CHILDREN
  /////////////////////////////////////////////////////////

  // About you
  app.get('/beta15/5-about-you', function (req, res) {
    res.render('beta15/5-about-you', {'partner': res.locals.hasPartner, 'children': res.locals.hasChildren});
  });

  app.post('/beta15/5-about-you', function (req, res) {
    if (req.cookies.partner === 'yes' ) {
      res.redirect('/beta15/5-about-your-partner');
    } else {
      res.redirect('/beta15/6-contact-address');
    }
  });

  // About your partner
  app.get('/beta15/5-about-your-partner', function (req, res) {
    res.render('beta15/5-about-your-partner', {'partner': res.locals.hasPartner, 'children': res.locals.hasChildren});
  });
  app.post('/beta15/5-about-your-partner', function (req, res) {
    res.redirect('/beta15/6-contact-address');
  });

  // About your children
  app.get('/beta15/5-about-your-children', function (req, res) {
    res.render('beta15/5-about-your-children', {'partner': res.locals.hasPartner, 'children': res.locals.hasChildren});
  });
  app.post('/beta15/5-about-your-children', function (req, res) {
    res.redirect('/beta15/6-contact-address');
  });

  /////////////////////////////////////////////////////////
  // 6. CONTACT
  /////////////////////////////////////////////////////////

  // Contact address
  app.get('/beta15/6-contact-address', function (req, res) {
    res.render('beta15/6-contact-address', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/6-contact-address', function (req, res) {
    res.redirect('/beta15/6-notifications');
  });

  // Notifications
  app.get('/beta15/6-notifications', function (req, res) {
    res.render('beta15/6-notifications', {'partner': res.locals.hasPartner} );
  });
  app.post('/beta15/6-notifications', function (req, res) {
    res.redirect('/beta15/7-summary');
  });

}