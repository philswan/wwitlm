var cookieParser = require('cookie-parser');

module.exports = function (app) {

// BETA 09

  app.use(cookieParser());

  //Social fund question
  app.post('/beta09/outstanding-social-fund-loans', function (req, res) {

    // reset partner cookie to null
    res.cookie('partner' , '');

    if (req.body.choice === 'yes') {
      res.redirect('/beta09/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta09/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta09/not-sure-eligible-social-fund');
    }
  });

  //Benefits question
  app.post('/beta09/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.pcbenefittype === 'pcbenefittype1') {
        res.redirect('/beta09/borrow-amount');
    } else if (req.body.pcbenefittype === 'pcbenefittype2') {
        res.redirect('/beta09/not-eligible-pension-credit-length');
    // Income Support
    } else if (req.body.isbenefittype === 'isbenefittype1') {
        res.redirect('/beta09/borrow-amount');
    } else if (req.body.isbenefittype === 'isbenefittype2') {
        res.redirect('/beta09/not-eligible-income-support-length');
    // Employment and Support
    } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta09/not-eligible-esa-length');
    } else if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta09/esa-budgeting-loan-before');
    // Job Seeker’s Allowance
    } else if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/beta09/borrow-amount');
    } else if (req.body.jsabenefittype === 'jsabenefittype2') {
        res.redirect('/beta09/jsa-budgeting-loan-before');
    } else if (req.body.jsabenefittype === 'jsabenefittype3') {
        res.redirect('/beta09/not-eligible-jsa-length');
    // None of the above
    } else {
        res.redirect('/beta09/not-eligible-current-benefits');
    }
  });

    //Current Benefits ESA part
    app.post('/beta09/esa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta09/esa-change-of-circumstances');
      } else {
        res.redirect('/beta09/esa-partner');
      }
    });

    app.post('/beta09/esa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta09/borrow-amount');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta09/not-eligible-esa-partner-not-joint');
      } else {
        res.redirect('/beta09/jsa-worked');
      }
    });

    app.post('/beta09/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta09/borrow-amount');
      } else {
        res.redirect('/beta09/esa-partner');
      }
    });

    app.post('/beta09/esa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta09/not-eligible-esa-worked');
      } else {
        res.redirect('/beta09/borrow-amount');
      }
    });

    //Current Benefits JSA part
    app.post('/beta09/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta09/jsa-change-of-circumstances');
      } else {
        res.redirect('/beta09/jsa-partner');
      }
    });

    app.post('/beta09/jsa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta09/borrow-amount');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta09/not-eligible-jsa-partner-not-joint');
      } else {
        res.redirect('/beta09/jsa-worked');
      }
    });

    app.post('/beta09/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta09/borrow-amount');
      } else {
        res.redirect('/beta09/jsa-partner');
      }
    });

    app.post('/beta09/jsa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta09/not-eligible-jsa-worked');
      } else {
        res.redirect('/beta09/borrow-amount');
      }
    });

  // Borrow amount
  app.post('/beta09/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta09/industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta09/not-eligible-borrow-amount');
    }
  });

  // Industrial action
  app.post('/beta09/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta09/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta09/eligible');
    }
  });

  // Eligible
  app.post('/beta09/eligible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta09/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta09/recent-partners');
    } else {
      res.redirect('/beta09/partner');
    }
  });

  // Partner
  app.post('/beta09/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('partner', 'yes');
      res.redirect('/beta09/your-partner');
    } else if (req.body.choice === 'no') {
      res.cookie('partner', 'no');
      res.redirect('/beta09/recent-partners');
    }
  });
  // Check
  app.get('/beta09/partner/edit', function (req, res) {
    res.render('beta09/partner', {'edit':true} );
  });

  // Recent partners
  app.post('/beta09/recent-partners', function (req, res) {
    if (req.cookies.partner === 'yes') {
      res.redirect('/beta09/child-benefit-you-or-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta09/child-benefit');
    }
  });
  // Check
  app.get('/beta09/recent-partners/edit', function (req, res) {
    res.render('beta09/recent-partners', {'edit':true} );
  });

  // Your partner
  app.post('/beta09/your-partner', function (req, res) {
    res.redirect('/beta09/child-benefit-you-or-partner');
  });
  // Check
  app.get('/beta09/your-partner/edit', function (req, res) {
    res.render('beta09/your-partner', {'edit':true} );
  });

  // Child benefit
  app.post('/beta09/child-benefit', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta09/repayments-credit-store-cards');
  });
  // Check
  app.get('/beta09/child-benefit/edit', function (req, res) {
    res.render('beta09/child-benefit', {'edit':true} );
  });

  // Child benefit (you or your partner)
  app.post('/beta09/child-benefit-you-or-partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta09/repayments-credit-store-cards-partner');
  });
  // Check
  app.get('/beta09/child-benefit-you-or-partner/edit', function (req, res) {
    res.render('beta09/child-benefit-you-or-partner', {'edit':true} );
  });

  // Debt repayments

    // Credit and store cards
    app.post('/beta09/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta09/repayments-loans');
    });
    // Check
    app.get('/beta09/repayments-credit-store-cards/edit', function (req, res) {
      res.render('beta09/repayments-credit-store-cards', {'edit':true} );
    });

    // Credit and store cards (partner)
    app.post('/beta09/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta09/repayments-loans-partner');
    });
    // Check
    app.get('/beta09/repayments-credit-store-cards-partner/edit', function (req, res) {
      res.render('beta09/repayments-credit-store-cards-partner', {'edit':true} );
    });

    // Loans
    app.post('/beta09/repayments-loans', function (req, res) {
      res.redirect('/beta09/repayments-rent-to-own');
    });
    // Check
    app.get('/beta09/repayments-loans/edit', function (req, res) {
      res.render('beta09/repayments-loans', {'edit':true} );
    });

    // Loans (partner)
    app.post('/beta09/repayments-loans-partner', function (req, res) {
      res.redirect('/beta09/repayments-rent-to-own-partner');
    });
    // Check
    app.get('/beta09/repayments-loans-partner/edit', function (req, res) {
      res.render('beta09/repayments-loans-partner', {'edit':true} );
    });

    // Rent to own
    app.post('/beta09/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta09/repayments-landlord-payments');
    });
    // Check
    app.get('/beta09/repayments-rent-to-own/edit', function (req, res) {
      res.render('beta09/repayments-rent-to-own', {'edit':true} );
    });

    // Rent to own (partner)
    app.post('/beta09/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta09/repayments-landlord-payments-partner');
    });
    // Check
    app.get('/beta09/repayments-rent-to-own-partner/edit', function (req, res) {
      res.render('beta09/repayments-rent-to-own-partner', {'edit':true} );
    });

    // Landlord payments
    app.post('/beta09/repayments-landlord-payments', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta09/loan-amount-child');
      } else {
      res.redirect('/beta09/loan-amount');
      }
    });
    // Check
    app.get('/beta09/repayments-landlord-payments/edit', function (req, res) {
      res.render('beta09/repayments-landlord-payments', {'edit':true} );
    });


    // Landlord payments (partner)
    app.post('/beta09/repayments-landlord-payments-partner', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta09/loan-amount-child');
      } else {
      res.redirect('/beta09/loan-amount-partner');
      }
    });
    // Check
    app.get('/beta09/repayments-landlord-payments-partner/edit', function (req, res) {
      res.render('beta09/repayments-landlord-payments-partner', {'edit':true} );
    });

  // Loan amount
  app.post('/beta09/loan-amount', function (req, res) {
    res.redirect('/beta09/about-you');
  });
  // Check
  app.get('/beta09/loan-amount/edit', function (req, res) {
    res.render('beta09/loan-amount', {'edit':true} );
  });

  // Loan amount (partner)
  app.post('/beta09/loan-amount-partner', function (req, res) {
    res.redirect('/beta09/about-you-partner');
  });
  // Check
  app.get('/beta09/loan-amount-partner/edit', function (req, res) {
    res.render('beta09/loan-amount-partner', {'edit':true} );
  });

  // Loan amount (child)
  app.post('/beta09/loan-amount-child', function (req, res) {
    if (req.cookies.partner === 'no') {
      res.redirect('/beta09/about-you');
    } else {
      res.redirect('/beta09/about-you-partner');
    }
  });
  // Check
  app.get('/beta09/loan-amount-child/edit', function (req, res) {
    res.render('beta09/loan-amount-child', {'edit':true} );
  });

  // About you
  app.post('/beta09/about-you', function (req, res) {
    res.redirect('/beta09/your-address');
  });
  // Check
  app.get('/beta09/about-you/edit', function (req, res) {
    res.render('beta09/about-you', {'edit':true} );
  });

  // About you (partner)
  app.post('/beta09/about-you-partner', function (req, res) {
    res.redirect('/beta09/your-address-partner');
  });
  // Check
  app.get('/beta09/about-you-partner/edit', function (req, res) {
    res.render('beta09/about-you-partner', {'edit':true} );
  });

  // Your address
  app.post('/beta09/your-address', function (req, res) {
    res.redirect('/beta09/your-contact-preferences');
  });
  // Check
  app.get('/beta09/your-address/edit', function (req, res) {
    res.render('beta09/your-address', {'edit':true} );
  });

  // Your address (partner)
  app.post('/beta09/your-address-partner', function (req, res) {
    res.redirect('/beta09/your-contact-preferences-partner');
  });
  // Check
  app.get('/beta09/your-address-partner/edit', function (req, res) {
    res.render('beta09/your-address-partner', {'edit':true} );
  });

  // Your contact preferences
  app.post('/beta09/your-contact-preferences', function (req, res) {
    res.redirect('/beta09/your-contact-text-updates');
  });
  // Check
  app.get('/beta09/your-contact-preferences/edit', function (req, res) {
    res.render('beta09/your-contact-preferences', {'edit':true} );
  });

  // Your contact preferences (partner)
  app.post('/beta09/your-contact-preferences-partner', function (req, res) {
    res.redirect('/beta09/your-contact-text-updates-partner');
  });
  // Check
  app.get('/beta09/your-contact-preferences-partner/edit', function (req, res) {
    res.render('beta09/your-contact-preferences-partner', {'edit':true} );
  });

  // Text updates
  app.post('/beta09/your-contact-text-updates', function (req, res) {
    res.redirect('/beta09/savings-under63');
  });
  // Check
  app.get('/beta09/your-contact-text-updates/edit', function (req, res) {
    res.render('beta09/your-contact-text-updates', {'edit':true} );
  });

  // text updates (partner)
  app.post('/beta09/your-contact-text-updates-partner', function (req, res) {
    res.redirect('/beta09/savings-under63-partner');
  });
  // Check
  app.get('/beta09/your-contact-text-updates-partner/edit', function (req, res) {
    res.render('beta09/your-contact-text-updates-partner', {'edit':true} );
  });

  // Savings
    // Amount of savings
    app.post('/beta09/savings-under63', function (req, res) {
      res.redirect('/beta09/savings-under63-property');
    });
    // Check
    app.get('/beta09/savings-under63/edit', function (req, res) {
      res.render('beta09/savings-under63', {'edit':true} );
    });

    // Amount of savings (partner)
    app.post('/beta09/savings-under63-partner', function (req, res) {
      res.redirect('/beta09/savings-under63-partner-property');
    });
    // Check
    app.get('/beta09/savings-under63-partner/edit', function (req, res) {
      res.render('beta09/savings-under63-partner', {'edit':true} );
    });

    // Property
    app.post('/beta09/savings-under63-property', function (req, res) {
      res.redirect('/beta09/declaration');
    });
    // Check
    app.get('/beta09/savings-under63-property/edit', function (req, res) {
      res.render('beta09/savings-under63-property', {'edit':true} );
    });

    // Property (partner)
    app.post('/beta09/savings-under63-partner-property', function (req, res) {
      res.redirect('/beta09/declaration');
    });
    // Check
    app.get('/beta09/savings-under63-partner-property/edit', function (req, res) {
      res.render('beta09/savings-under63-partner-property', {'edit':true} );
    });

  // Check your answers save
  app.get('/beta09/check-your-answers/saved', function (req, res) {
    res.render('beta09/check-your-answers', {'saved':true} );
  });

  // Check your answers partner save
  app.get('/beta09/check-your-answers-partner/saved', function (req, res) {
    res.render('beta09/check-your-answers-partner', {'saved':true} );
  });

  // Declaration
  app.post('/beta09/declaration', function (req, res) {
    res.redirect('/beta09/what-happens-next');
  });

  // Loan offer
  app.post('/beta09/loan-offer-partial', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta09/loan-offer-accept-partial');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta09/loan-offer-reject-partial');
    }
  });

  app.post('/beta09/loan-offer-full', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta09/loan-offer-accept-full');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta09/loan-offer-reject-full');
    }
  });

// END OF BETA 09
}
