var cookieParser = require('cookie-parser');

module.exports = function (app) {

// BETA 11

  app.use(cookieParser());

  //Social fund question
  app.post('/beta11/outstanding-social-fund-loans', function (req, res) {

    // reset partner cookie to null
    res.cookie('partner' , '');

    if (req.body.choice === 'yes') {
      res.redirect('/beta11/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta11/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta11/not-sure-eligible-social-fund');
    }
  });

  //Benefits question
  app.post('/beta11/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
        res.redirect('/beta11/pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
        res.redirect('/beta11/income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
        res.redirect('/beta11/esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
        res.redirect('/beta11/jsa');
    // None of the above
    } else {
        res.redirect('/beta11/not-eligible-current-benefits');
    }
  });

  // Pension Credit length
  app.post('/beta11/pension-credit', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta11/borrow-amount');
    } else {
      res.redirect('/beta11/not-eligible-pension-credit-length');
    }
  });

  // Income Support length
  app.post('/beta11/income-support', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta11/borrow-amount');
    } else {
      res.redirect('/beta11/not-eligible-income-support-length');
    }
  });

  // ESA
  app.post('/beta11/esa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta11/esa-budgeting-loan-before');
    } else {
      res.redirect('/beta11/not-eligible-esa-length');
    }
  });

  // JSA
  app.post('/beta11/jsa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta11/borrow-amount');
    } else if (req.body.answers === 'answer2') {
      res.redirect('/beta11/jsa-budgeting-loan-before');
    } else {
      res.redirect('/beta11/not-eligible-jsa-length');
    }
  });

    //Current Benefits ESA part
    app.post('/beta11/esa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta11/esa-change-of-circumstances');
      } else {
        res.redirect('/beta11/esa-partner');
      }
    });

    app.post('/beta11/esa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta11/borrow-amount');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta11/not-eligible-esa-partner-not-joint');
      } else {
        res.redirect('/beta11/jsa-worked');
      }
    });

    app.post('/beta11/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta11/borrow-amount');
      } else {
        res.redirect('/beta11/esa-partner');
      }
    });

    app.post('/beta11/esa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta11/not-eligible-esa-worked');
      } else {
        res.redirect('/beta11/borrow-amount');
      }
    });

    //Current Benefits JSA part
    app.post('/beta11/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta11/jsa-change-of-circumstances');
      } else {
        res.redirect('/beta11/jsa-partner');
      }
    });

    app.post('/beta11/jsa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta11/borrow-amount');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta11/not-eligible-jsa-partner-not-joint');
      } else {
        res.redirect('/beta11/jsa-worked');
      }
    });

    app.post('/beta11/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta11/borrow-amount');
      } else {
        res.redirect('/beta11/jsa-partner');
      }
    });

    app.post('/beta11/jsa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta11/not-eligible-jsa-worked');
      } else {
        res.redirect('/beta11/borrow-amount');
      }
    });

  // Borrow amount
  app.post('/beta11/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta11/industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta11/not-eligible-borrow-amount');
    }
  });

  // Industrial action
  app.post('/beta11/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta11/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta11/eligible');
    }
  });

  // Eligible
  app.post('/beta11/eligible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta11/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta11/recent-partners');
    } else {
      res.redirect('/beta11/partner');
    }
  });

  // Partner
  app.post('/beta11/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('partner', 'yes');
      res.redirect('/beta11/your-partner');
    } else if (req.body.choice === 'no') {
      res.cookie('partner', 'no');
      res.redirect('/beta11/recent-partners');
    }
  });
  // Check
  app.get('/beta11/partner/edit', function (req, res) {
    res.render('beta11/partner', {'edit':true} );
  });

  // Recent partners
  app.post('/beta11/recent-partners', function (req, res) {
    if (req.cookies.partner === 'yes') {
      res.redirect('/beta11/child-benefit-you-or-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta11/child-benefit');
    }
  });
  // Check
  app.get('/beta11/recent-partners/edit', function (req, res) {
    res.render('beta11/recent-partners', {'edit':true} );
  });

  // Your partner
  app.post('/beta11/your-partner', function (req, res) {
    res.redirect('/beta11/child-benefit-you-or-partner');
  });
  // Check
  app.get('/beta11/your-partner/edit', function (req, res) {
    res.render('beta11/your-partner', {'edit':true} );
  });

  // Child benefit
  app.post('/beta11/child-benefit', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta11/repayments-credit-store-cards');
  });
  // Check
  app.get('/beta11/child-benefit/edit', function (req, res) {
    res.render('beta11/child-benefit', {'edit':true} );
  });

  // Child benefit (you or your partner)
  app.post('/beta11/child-benefit-you-or-partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta11/repayments-credit-store-cards-partner');
  });
  // Check
  app.get('/beta11/child-benefit-you-or-partner/edit', function (req, res) {
    res.render('beta11/child-benefit-you-or-partner', {'edit':true} );
  });

  // Debt repayments

    // Credit and store cards
    app.post('/beta11/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta11/repayments-loans');
    });
    // Check
    app.get('/beta11/repayments-credit-store-cards/edit', function (req, res) {
      res.render('beta11/repayments-credit-store-cards', {'edit':true} );
    });

    // Credit and store cards (partner)
    app.post('/beta11/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta11/repayments-loans-partner');
    });
    // Check
    app.get('/beta11/repayments-credit-store-cards-partner/edit', function (req, res) {
      res.render('beta11/repayments-credit-store-cards-partner', {'edit':true} );
    });

    // Loans
    app.post('/beta11/repayments-loans', function (req, res) {
      res.redirect('/beta11/repayments-rent-to-own');
    });
    // Check
    app.get('/beta11/repayments-loans/edit', function (req, res) {
      res.render('beta11/repayments-loans', {'edit':true} );
    });

    // Loans (partner)
    app.post('/beta11/repayments-loans-partner', function (req, res) {
      res.redirect('/beta11/repayments-rent-to-own-partner');
    });
    // Check
    app.get('/beta11/repayments-loans-partner/edit', function (req, res) {
      res.render('beta11/repayments-loans-partner', {'edit':true} );
    });

    // Rent to own
    app.post('/beta11/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta11/repayments-landlord-payments');
    });
    // Check
    app.get('/beta11/repayments-rent-to-own/edit', function (req, res) {
      res.render('beta11/repayments-rent-to-own', {'edit':true} );
    });

    // Rent to own (partner)
    app.post('/beta11/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta11/repayments-landlord-payments-partner');
    });
    // Check
    app.get('/beta11/repayments-rent-to-own-partner/edit', function (req, res) {
      res.render('beta11/repayments-rent-to-own-partner', {'edit':true} );
    });

    // Landlord payments
    app.post('/beta11/repayments-landlord-payments', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta11/loan-amount-child');
      } else {
      res.redirect('/beta11/loan-amount');
      }
    });
    // Check
    app.get('/beta11/repayments-landlord-payments/edit', function (req, res) {
      res.render('beta11/repayments-landlord-payments', {'edit':true} );
    });


    // Landlord payments (partner)
    app.post('/beta11/repayments-landlord-payments-partner', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta11/loan-amount-child');
      } else {
      res.redirect('/beta11/loan-amount-partner');
      }
    });
    // Check
    app.get('/beta11/repayments-landlord-payments-partner/edit', function (req, res) {
      res.render('beta11/repayments-landlord-payments-partner', {'edit':true} );
    });

  // Loan amount
  app.post('/beta11/loan-amount', function (req, res) {
    res.redirect('/beta11/about-you');
  });
  // Check
  app.get('/beta11/loan-amount/edit', function (req, res) {
    res.render('beta11/loan-amount', {'edit':true} );
  });

  // Loan amount (partner)
  app.post('/beta11/loan-amount-partner', function (req, res) {
    res.redirect('/beta11/about-you-partner');
  });
  // Check
  app.get('/beta11/loan-amount-partner/edit', function (req, res) {
    res.render('beta11/loan-amount-partner', {'edit':true} );
  });

  // Loan amount (child)
  app.post('/beta11/loan-amount-child', function (req, res) {
    if (req.cookies.partner === 'no') {
      res.redirect('/beta11/about-you');
    } else {
      res.redirect('/beta11/about-you-partner');
    }
  });
  // Check
  app.get('/beta11/loan-amount-child/edit', function (req, res) {
    res.render('beta11/loan-amount-child', {'edit':true} );
  });

  // About you
  app.post('/beta11/about-you', function (req, res) {
    res.redirect('/beta11/your-address');
  });
  // Check
  app.get('/beta11/about-you/edit', function (req, res) {
    res.render('beta11/about-you', {'edit':true} );
  });

  // About you (partner)
  app.post('/beta11/about-you-partner', function (req, res) {
    res.redirect('/beta11/your-address-partner');
  });
  // Check
  app.get('/beta11/about-you-partner/edit', function (req, res) {
    res.render('beta11/about-you-partner', {'edit':true} );
  });

  // Your address
  app.post('/beta11/your-address', function (req, res) {
    res.redirect('/beta11/your-contact-preferences');
  });
  // Check
  app.get('/beta11/your-address/edit', function (req, res) {
    res.render('beta11/your-address', {'edit':true} );
  });

  // Your address (partner)
  app.post('/beta11/your-address-partner', function (req, res) {
    res.redirect('/beta11/your-contact-preferences-partner');
  });
  // Check
  app.get('/beta11/your-address-partner/edit', function (req, res) {
    res.render('beta11/your-address-partner', {'edit':true} );
  });

  // Your contact preferences
  app.post('/beta11/your-contact-preferences', function (req, res) {
    res.redirect('/beta11/your-contact-text-updates');
  });
  // Check
  app.get('/beta11/your-contact-preferences/edit', function (req, res) {
    res.render('beta11/your-contact-preferences', {'edit':true} );
  });

  // Your contact preferences (partner)
  app.post('/beta11/your-contact-preferences-partner', function (req, res) {
    res.redirect('/beta11/your-contact-text-updates-partner');
  });
  // Check
  app.get('/beta11/your-contact-preferences-partner/edit', function (req, res) {
    res.render('beta11/your-contact-preferences-partner', {'edit':true} );
  });

  // Text updates
  app.post('/beta11/your-contact-text-updates', function (req, res) {
    res.redirect('/beta11/savings-under63');
  });
  // Check
  app.get('/beta11/your-contact-text-updates/edit', function (req, res) {
    res.render('beta11/your-contact-text-updates', {'edit':true} );
  });

  // text updates (partner)
  app.post('/beta11/your-contact-text-updates-partner', function (req, res) {
    res.redirect('/beta11/savings-under63-partner');
  });
  // Check
  app.get('/beta11/your-contact-text-updates-partner/edit', function (req, res) {
    res.render('beta11/your-contact-text-updates-partner', {'edit':true} );
  });

  // Savings
    // Amount of savings
    app.post('/beta11/savings-under63', function (req, res) {
      res.redirect('/beta11/declaration');
    });
    // Check
    app.get('/beta11/savings-under63/edit', function (req, res) {
      res.render('beta11/savings-under63', {'edit':true} );
    });

    // Amount of savings (partner)
    app.post('/beta11/savings-under63-partner', function (req, res) {
      res.redirect('/beta11/declaration');
    });
    // Check
    app.get('/beta11/savings-under63-partner/edit', function (req, res) {
      res.render('beta11/savings-under63-partner', {'edit':true} );
    });

  // Check your answers save
  app.get('/beta11/check-your-answers/saved', function (req, res) {
    res.render('beta11/check-your-answers', {'saved':true} );
  });

  // Check your answers partner save
  app.get('/beta11/check-your-answers-partner/saved', function (req, res) {
    res.render('beta11/check-your-answers-partner', {'saved':true} );
  });

  // Declaration
  app.post('/beta11/declaration', function (req, res) {
    res.redirect('/beta11/what-happens-next');
  });

  // Loan offer
  app.post('/beta11/loan-offer-partial', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta11/loan-offer-accept-partial');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta11/loan-offer-reject-partial');
    }
  });

  app.post('/beta11/loan-offer-full', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta11/loan-offer-accept-full');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta11/loan-offer-reject-full');
    }
  });

// END OF BETA 11
}
