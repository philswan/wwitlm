var cookieParser = require('cookie-parser');

module.exports = function (app) {

// BETA 12

  app.use(cookieParser());


  // Borrow amount
  // app.post('/beta12/borrow-amount', function (req, res) {
  //   if (req.body.borrowamount === 'yes') {
  //     res.redirect('/beta12/loan-before');
  //   } else if (req.body.borrowamount === 'no') {
  //     res.redirect('/beta12/not-eligible-borrow-amount');
  //   }
  // });

  // RED HEERING QUESTION

  // Borrow amount 
  app.post('/beta12/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta12/loan-before');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta12/not-eligible-borrow-amount');
    }
  });

  // END OF RED HEERING QUESTION

  // Loan before
  app.post('/beta12/loan-before', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/budgeting-loans-amount-owed');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/crisis-loans');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta12/current-benefits');
    }
  });

  // Crisis loans
  app.post('/beta12/crisis-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta12/current-benefits');
    }
  });

  // Budgeting Loans amount owed
  app.post('/beta12/budgeting-loans-amount-owed', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/change-of-circumstances');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta12/change-of-circumstances');
    }
  });

  // Change of cirumstances
  app.post('/beta12/change-of-circumstances', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/current-benefits');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/eligible');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta12/current-benefits');
    }
  });

  //Benefits question
  app.post('/beta12/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
        res.redirect('/beta12/pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
        res.redirect('/beta12/income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
        res.redirect('/beta12/esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
        res.redirect('/beta12/jsa');
    // None of the above
    } else {
        res.redirect('/beta12/not-eligible-current-benefits');
    }
  });

  // Pension Credit length
  app.post('/beta12/pension-credit', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible');} 
    else if (req.body.answers === 'answer2') {
      res.redirect('/beta12/pension-credit-previous-partner');
    } else {
      res.redirect('/beta12/not-eligible-pension-credit-length');
    }
  });

  // Pension Credit previous partner
  app.post('/beta12/pension-credit-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible-possible');
    } else {
      res.redirect('/beta12/not-eligible-pension-credit-length');
    }
  });

  // Income Support length
  app.post('/beta12/income-support', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible');} 
    else if (req.body.answers === 'answer2') {
      res.redirect('/beta12/income-support-previous-partner');
    } else {
      res.redirect('/beta12/not-eligible-income-support-length');
    }
  });

  // Income Support previous partner
  app.post('/beta12/income-support-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible-possible');
    } else {
      res.redirect('/beta12/not-eligible-income-support-length');
    }
  });

  // ESA
  app.post('/beta12/esa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/esa-partner');
    } else if (req.body.answers === 'answer2') {
      res.redirect('/beta12/esa-previous-partner');
    } else {
      res.redirect('/beta12/not-eligible-esa-length');
    }
  });

  // ESA previous partner
  app.post('/beta12/esa-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible-possible');
    } else {
      res.redirect('/beta12/not-eligible-esa-length');
    }
  });

  // JSA
  app.post('/beta12/jsa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible');
    } else if (req.body.answers === 'answer2') {
      res.redirect('/beta12/jsa-partner');
    } else if (req.body.answers === 'answer3') {
      res.redirect('/beta12/jsa-previous-partner');
    } else {
      res.redirect('/beta12/not-eligible-jsa-length');
    }
  });

  // JSA previous partner
  app.post('/beta12/jsa-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta12/eligible-possible');
    } else {
      res.redirect('/beta12/not-eligible-jsa-length');
    }
  });

    //Current Benefits ESA part

    app.post('/beta12/esa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta12/eligible');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta12/not-eligible-esa-partner-not-joint');
      } else {
        res.redirect('/beta12/esa-worked');
      }
    });

    app.post('/beta12/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta12/eligible');
      } else {
        res.redirect('/beta12/esa-partner');
      }
    });

    app.post('/beta12/esa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta12/not-eligible-esa-worked');
      } else {
        res.redirect('/beta12/eligible');
      }
    });

    //Current Benefits JSA part
    app.post('/beta12/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta12/jsa-change-of-circumstances');
      } else {
        res.redirect('/beta12/jsa-partner');
      }
    });

    app.post('/beta12/jsa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta12/eligible');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta12/not-eligible-jsa-partner-not-joint');
      } else {
        res.redirect('/beta12/jsa-worked');
      }
    });

    app.post('/beta12/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta12/borrow-amount');
      } else {
        res.redirect('/beta12/jsa-partner');
      }
    });

    app.post('/beta12/jsa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta12/not-eligible-jsa-worked');
      } else {
        res.redirect('/beta12/eligible');
      }
    });

  // Industrial action
  app.post('/beta12/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/eligible');
    }
  });

  // Eligible
  app.post('/beta12/eligible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta12/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta12/child-benefit');
    } else {
      res.redirect('/beta12/partner');
    }
  });

  // Eligible
  app.post('/beta12/eligible-possible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta12/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta12/child-benefit');
    } else {
      res.redirect('/beta12/partner');
    }
  });

  // Partner
  app.post('/beta12/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('partner', 'yes');
      res.redirect('/beta12/your-partner');
    } else if (req.body.choice === 'no') {
      res.cookie('partner', 'no');
      res.redirect('/beta12/child-benefit');
    }
  });
  // Check
  app.get('/beta12/partner/edit', function (req, res) {
    res.render('beta12/partner', {'edit':true} );
  });

  // Your partner
  app.post('/beta12/your-partner', function (req, res) {
    res.redirect('/beta12/child-benefit-you-or-partner');
  });
  // Check
  app.get('/beta12/your-partner/edit', function (req, res) {
    res.render('beta12/your-partner', {'edit':true} );
  });

  // Child benefit
  app.post('/beta12/child-benefit', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta12/repayments-credit-store-cards');
  });
  // Check
  app.get('/beta12/child-benefit/edit', function (req, res) {
    res.render('beta12/child-benefit', {'edit':true} );
  });

  // Child benefit (you or your partner)
  app.post('/beta12/child-benefit-you-or-partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta12/repayments-credit-store-cards-partner');
  });
  // Check
  app.get('/beta12/child-benefit-you-or-partner/edit', function (req, res) {
    res.render('beta12/child-benefit-you-or-partner', {'edit':true} );
  });

  // Debt repayments

    // Credit and store cards
    app.post('/beta12/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta12/repayments-loans');
    });
    // Check
    app.get('/beta12/repayments-credit-store-cards/edit', function (req, res) {
      res.render('beta12/repayments-credit-store-cards', {'edit':true} );
    });

    // Credit and store cards (partner)
    app.post('/beta12/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta12/repayments-loans-partner');
    });
    // Check
    app.get('/beta12/repayments-credit-store-cards-partner/edit', function (req, res) {
      res.render('beta12/repayments-credit-store-cards-partner', {'edit':true} );
    });

    // Loans
    app.post('/beta12/repayments-loans', function (req, res) {
      res.redirect('/beta12/repayments-rent-to-own');
    });
    // Check
    app.get('/beta12/repayments-loans/edit', function (req, res) {
      res.render('beta12/repayments-loans', {'edit':true} );
    });

    // Loans (partner)
    app.post('/beta12/repayments-loans-partner', function (req, res) {
      res.redirect('/beta12/repayments-rent-to-own-partner');
    });
    // Check
    app.get('/beta12/repayments-loans-partner/edit', function (req, res) {
      res.render('beta12/repayments-loans-partner', {'edit':true} );
    });

    // Rent to own
    app.post('/beta12/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta12/repayments-landlord-payments');
    });
    // Check
    app.get('/beta12/repayments-rent-to-own/edit', function (req, res) {
      res.render('beta12/repayments-rent-to-own', {'edit':true} );
    });

    // Rent to own (partner)
    app.post('/beta12/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta12/repayments-landlord-payments-partner');
    });
    // Check
    app.get('/beta12/repayments-rent-to-own-partner/edit', function (req, res) {
      res.render('beta12/repayments-rent-to-own-partner', {'edit':true} );
    });

    // Landlord payments
    app.post('/beta12/repayments-landlord-payments', function (req, res) {
      res.redirect('/beta12/savings');
    });
    // Check
    app.get('/beta12/repayments-landlord-payments/edit', function (req, res) {
      res.render('beta12/repayments-landlord-payments', {'edit':true} );
    });

    // Landlord payments (partner)
    app.post('/beta12/repayments-landlord-payments-partner', function (req, res) {
      res.redirect('/beta12/savings-partner');
    });
    // Check
    app.get('/beta12/repayments-landlord-payments-partner/edit', function (req, res) {
      res.render('beta12/repayments-landlord-payments-partner', {'edit':true} );
    });

  // Savings
    // Amount of savings
    app.post('/beta12/savings', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta12/loan-amount-child');
      } else {
      res.redirect('/beta12/loan-amount');
      }
    });
    // Check
    app.get('/beta12/savings/edit', function (req, res) {
      res.render('beta12/savings', {'edit':true} );
    });

    // Amount of savings (partner)
    app.post('/beta12/savings-partner', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta12/loan-amount-child');
      } else {
      res.redirect('/beta12/loan-amount-partner');
      }
    });
    // Check
    app.get('/beta12/savings-partner/edit', function (req, res) {
      res.render('beta12/savings-partner', {'edit':true} );
    });

  // Check your answers save
  app.get('/beta12/check-your-answers/saved', function (req, res) {
    res.render('beta12/check-your-answers', {'saved':true} );
  });

  // Loan amount
  app.post('/beta12/loan-amount', function (req, res) {
    res.redirect('/beta12/about-you');
  });
  // Check
  app.get('/beta12/loan-amount/edit', function (req, res) {
    res.render('beta12/loan-amount', {'edit':true} );
  });

  // Loan amount (partner)
  app.post('/beta12/loan-amount-partner', function (req, res) {
    res.redirect('/beta12/about-you-partner');
  });
  // Check
  app.get('/beta12/loan-amount-partner/edit', function (req, res) {
    res.render('beta12/loan-amount-partner', {'edit':true} );
  });

  // Loan amount (child)
  app.post('/beta12/loan-amount-child', function (req, res) {
    if (req.cookies.partner === 'no') {
      res.redirect('/beta12/about-you');
    } else {
      res.redirect('/beta12/about-you-partner');
    }
  });
  // Check
  app.get('/beta12/loan-amount-child/edit', function (req, res) {
    res.render('beta12/loan-amount-child', {'edit':true} );
  });

  // About you
  app.post('/beta12/about-you', function (req, res) {
    res.redirect('/beta12/your-address');
  });
  // Check
  app.get('/beta12/about-you/edit', function (req, res) {
    res.render('beta12/about-you', {'edit':true} );
  });

  // About you (partner)
  app.post('/beta12/about-you-partner', function (req, res) {
    res.redirect('/beta12/your-address-partner');
  });
  // Check
  app.get('/beta12/about-you-partner/edit', function (req, res) {
    res.render('beta12/about-you-partner', {'edit':true} );
  });

  // Your address
  app.post('/beta12/your-address', function (req, res) {
    res.redirect('/beta12/your-contact-preferences');
  });
  // Check
  app.get('/beta12/your-address/edit', function (req, res) {
    res.render('beta12/your-address', {'edit':true} );
  });

  // Your address (partner)
  app.post('/beta12/your-address-partner', function (req, res) {
    res.redirect('/beta12/your-contact-preferences-partner');
  });
  // Check
  app.get('/beta12/your-address-partner/edit', function (req, res) {
    res.render('beta12/your-address-partner', {'edit':true} );
  });

  // Your contact preferences
  app.post('/beta12/your-contact-preferences', function (req, res) {
    res.redirect('/beta12/your-contact-text-updates');
  });
  // Check
  app.get('/beta12/your-contact-preferences/edit', function (req, res) {
    res.render('beta12/your-contact-preferences', {'edit':true} );
  });

  // Your contact preferences (partner)
  app.post('/beta12/your-contact-preferences-partner', function (req, res) {
    res.redirect('/beta12/your-contact-text-updates-partner');
  });
  // Check
  app.get('/beta12/your-contact-preferences-partner/edit', function (req, res) {
    res.render('beta12/your-contact-preferences-partner', {'edit':true} );
  });

  // Text updates
  app.post('/beta12/your-contact-text-updates', function (req, res) {
    res.redirect('/beta12/declaration');
  });
  // Check
  app.get('/beta12/your-contact-text-updates/edit', function (req, res) {
    res.render('beta12/your-contact-text-updates', {'edit':true} );
  });

  // text updates (partner)
  app.post('/beta12/your-contact-text-updates-partner', function (req, res) {
    res.redirect('/beta12/declaration');
  });
  // Check
  app.get('/beta12/your-contact-text-updates-partner/edit', function (req, res) {
    res.render('beta12/your-contact-text-updates-partner', {'edit':true} );
  });

  // Check your answers partner save
  app.get('/beta12/check-your-answers-partner/saved', function (req, res) {
    res.render('beta12/check-your-answers-partner', {'saved':true} );
  });

  // Declaration
  app.post('/beta12/declaration', function (req, res) {
    res.redirect('/beta12/what-happens-next');
  });

  // Loan offer
  app.post('/beta12/loan-offer-partial', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/loan-offer-accept-partial');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/loan-offer-reject-partial');
    }
  });

  app.post('/beta12/loan-offer-full', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta12/loan-offer-accept-full');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta12/loan-offer-reject-full');
    }
  });

// END OF BETA 12
}
