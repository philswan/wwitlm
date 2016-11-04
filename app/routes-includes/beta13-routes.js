var cookieParser = require('cookie-parser');

module.exports = function (app) {

// BETA 12

  app.use(cookieParser());


  // Borrow amount
  // app.post('/beta13/borrow-amount', function (req, res) {
  //   if (req.body.borrowamount === 'yes') {
  //     res.redirect('/beta13/loan-before');
  //   } else if (req.body.borrowamount === 'no') {
  //     res.redirect('/beta13/not-eligible-borrow-amount');
  //   }
  // });

  // RED HEERING QUESTION

  // Borrow amount 
  app.post('/beta13/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta13/loan-before');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta13/not-eligible-borrow-amount');
    }
  });

  // END OF RED HEERING QUESTION

  // Loan before
  app.post('/beta13/loan-before', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/budgeting-loans-amount-owed');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/crisis-loans');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta13/current-benefits');
    }
  });

  // Crisis loans
  app.post('/beta13/crisis-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta13/current-benefits');
    }
  });

  // Budgeting Loans amount owed
  app.post('/beta13/budgeting-loans-amount-owed', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/change-of-circumstances');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta13/change-of-circumstances');
    }
  });

  // Change of cirumstances
  app.post('/beta13/change-of-circumstances', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/current-benefits');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/eligible');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta13/current-benefits');
    }
  });

  //Benefits question
  app.post('/beta13/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
        res.redirect('/beta13/pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
        res.redirect('/beta13/income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
        res.redirect('/beta13/esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
        res.redirect('/beta13/jsa');
    // None of the above
    } else {
        res.redirect('/beta13/not-eligible-current-benefits');
    }
  });

  // Pension Credit length
  app.post('/beta13/pension-credit', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible');} 
    else if (req.body.answers === 'answer2') {
      res.redirect('/beta13/pension-credit-previous-partner');
    } else {
      res.redirect('/beta13/not-eligible-pension-credit-length');
    }
  });

  // Pension Credit previous partner
  app.post('/beta13/pension-credit-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible-possible');
    } else {
      res.redirect('/beta13/not-eligible-pension-credit-length');
    }
  });

  // Income Support length
  app.post('/beta13/income-support', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible');} 
    else if (req.body.answers === 'answer2') {
      res.redirect('/beta13/income-support-previous-partner');
    } else {
      res.redirect('/beta13/not-eligible-income-support-length');
    }
  });

  // Income Support previous partner
  app.post('/beta13/income-support-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible-possible');
    } else {
      res.redirect('/beta13/not-eligible-income-support-length');
    }
  });

  // ESA
  app.post('/beta13/esa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/esa-partner');
    } else if (req.body.answers === 'answer2') {
      res.redirect('/beta13/esa-previous-partner');
    } else {
      res.redirect('/beta13/not-eligible-esa-length');
    }
  });

  // ESA previous partner
  app.post('/beta13/esa-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible-possible');
    } else {
      res.redirect('/beta13/not-eligible-esa-length');
    }
  });

  // JSA
  app.post('/beta13/jsa', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible');
    } else if (req.body.answers === 'answer2') {
      res.redirect('/beta13/jsa-partner');
    } else if (req.body.answers === 'answer3') {
      res.redirect('/beta13/jsa-previous-partner');
    } else {
      res.redirect('/beta13/not-eligible-jsa-length');
    }
  });

  // JSA previous partner
  app.post('/beta13/jsa-previous-partner', function (req, res) {
    if (req.body.answers === 'answer1') {
      res.redirect('/beta13/eligible-possible');
    } else {
      res.redirect('/beta13/not-eligible-jsa-length');
    }
  });

    //Current Benefits ESA part

    app.post('/beta13/esa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta13/eligible');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta13/not-eligible-esa-partner-not-joint');
      } else {
        res.redirect('/beta13/esa-worked');
      }
    });

    app.post('/beta13/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta13/eligible');
      } else {
        res.redirect('/beta13/esa-partner');
      }
    });

    app.post('/beta13/esa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta13/not-eligible-esa-worked');
      } else {
        res.redirect('/beta13/eligible');
      }
    });

    //Current Benefits JSA part
    app.post('/beta13/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta13/jsa-change-of-circumstances');
      } else {
        res.redirect('/beta13/jsa-partner');
      }
    });

    app.post('/beta13/jsa-partner', function (req, res) {

      if (req.body.choice==='yes') {
        res.cookie('partner' , 'yes');
      } else {
        res.cookie('partner', 'no');
      }
      if (req.body.option === 'option1') {
        res.redirect('/beta13/eligible');
      } else if (req.body.option === 'option2') {
        res.redirect('/beta13/not-eligible-jsa-partner-not-joint');
      } else {
        res.redirect('/beta13/jsa-worked');
      }
    });

    app.post('/beta13/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta13/borrow-amount');
      } else {
        res.redirect('/beta13/jsa-partner');
      }
    });

    app.post('/beta13/jsa-worked', function (req, res) {
      if (req.body.choice3 === 'more') {
        res.redirect('/beta13/not-eligible-jsa-worked');
      } else {
        res.redirect('/beta13/eligible');
      }
    });

  // Industrial action
  app.post('/beta13/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/eligible');
    }
  });

  // Eligible
  app.post('/beta13/eligible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta13/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta13/child-benefit');
    } else {
      res.redirect('/beta13/partner');
    }
  });

  // Eligible
  app.post('/beta13/eligible-possible', function (req, res) {
    if ( req.cookies.partner === 'yes') {
        res.redirect('/beta13/your-partner');
    } else if (req.cookies.partner === 'no') {
      res.redirect('/beta13/child-benefit');
    } else {
      res.redirect('/beta13/partner');
    }
  });

  // Partner
  app.post('/beta13/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('partner', 'yes');
      res.redirect('/beta13/your-partner');
    } else if (req.body.choice === 'no') {
      res.cookie('partner', 'no');
      res.redirect('/beta13/child-benefit');
    }
  });
  // Check
  app.get('/beta13/partner/edit', function (req, res) {
    res.render('beta13/partner', {'edit':true} );
  });

  // Your partner
  app.post('/beta13/your-partner', function (req, res) {
    res.redirect('/beta13/child-benefit-you-or-partner');
  });
  // Check
  app.get('/beta13/your-partner/edit', function (req, res) {
    res.render('beta13/your-partner', {'edit':true} );
  });

  // Child benefit
  app.post('/beta13/child-benefit', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta13/savings');
  });
  // Check
  app.get('/beta13/child-benefit/edit', function (req, res) {
    res.render('beta13/child-benefit', {'edit':true} );
  });

  // Child benefit (you or your partner)
  app.post('/beta13/child-benefit-you-or-partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.cookie('children', 'yes');
    } else {
      res.cookie('children', 'no');
    }
    res.redirect('/beta13/savings-partner');
  });
  // Check
  app.get('/beta13/child-benefit-you-or-partner/edit', function (req, res) {
    res.render('beta13/child-benefit-you-or-partner', {'edit':true} );
  });

  // Savings
    // Amount of savings
    app.post('/beta13/savings', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta13/repayments-credit-store-cards');
      } else {
      res.redirect('/beta13/repayments-credit-store-cards');
      }
    });
    // Check
    app.get('/beta13/savings/edit', function (req, res) {
      res.render('beta13/savings', {'edit':true} );
    });

    // Amount of savings (partner)
    app.post('/beta13/savings-partner', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta13/repayments-credit-store-cards-partner');
      } else {
      res.redirect('/beta13/repayments-credit-store-cards-partner');
      }
    });
    // Check
    app.get('/beta13/savings-partner/edit', function (req, res) {
      res.render('beta13/savings-partner', {'edit':true} );
    });

  // Check your answers save
  app.get('/beta13/check-your-answers/saved', function (req, res) {
    res.render('beta13/check-your-answers', {'saved':true} );
  });





  // Debt repayments

    // Credit and store cards
    app.post('/beta13/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta13/repayments-loans');
    });
    // Check
    app.get('/beta13/repayments-credit-store-cards/edit', function (req, res) {
      res.render('beta13/repayments-credit-store-cards', {'edit':true} );
    });

    // Credit and store cards (partner)
    app.post('/beta13/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta13/repayments-loans-partner');
    });
    // Check
    app.get('/beta13/repayments-credit-store-cards-partner/edit', function (req, res) {
      res.render('beta13/repayments-credit-store-cards-partner', {'edit':true} );
    });

    // Loans
    app.post('/beta13/repayments-loans', function (req, res) {
      res.redirect('/beta13/repayments-rent-to-own');
    });
    // Check
    app.get('/beta13/repayments-loans/edit', function (req, res) {
      res.render('beta13/repayments-loans', {'edit':true} );
    });

    // Loans (partner)
    app.post('/beta13/repayments-loans-partner', function (req, res) {
      res.redirect('/beta13/repayments-rent-to-own-partner');
    });
    // Check
    app.get('/beta13/repayments-loans-partner/edit', function (req, res) {
      res.render('beta13/repayments-loans-partner', {'edit':true} );
    });

    // Rent to own
    app.post('/beta13/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta13/repayments-landlord-payments');
    });
    // Check
    app.get('/beta13/repayments-rent-to-own/edit', function (req, res) {
      res.render('beta13/repayments-rent-to-own', {'edit':true} );
    });

    // Rent to own (partner)
    app.post('/beta13/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta13/repayments-landlord-payments-partner');
    });
    // Check
    app.get('/beta13/repayments-rent-to-own-partner/edit', function (req, res) {
      res.render('beta13/repayments-rent-to-own-partner', {'edit':true} );
    });

    // Landlord payments
    app.post('/beta13/repayments-landlord-payments', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta13/loan-amount-child');
      } else {
      res.redirect('/beta13/loan-amount');
      }
    });
    // Check
    app.get('/beta13/repayments-landlord-payments/edit', function (req, res) {
      res.render('beta13/repayments-landlord-payments', {'edit':true} );
    });

    // Landlord payments (partner)
    app.post('/beta13/repayments-landlord-payments-partner', function (req, res) {
      if (req.cookies.children === 'yes') {
        res.redirect('/beta13/loan-amount-child');
      } else {
      res.redirect('/beta13/loan-amount-partner');
      }
    });
    // Check
    app.get('/beta13/repayments-landlord-payments-partner/edit', function (req, res) {
      res.render('beta13/repayments-landlord-payments-partner', {'edit':true} );
    });



  // Loan amount
  app.post('/beta13/loan-amount', function (req, res) {
    res.redirect('/beta13/about-you');
  });
  // Check
  app.get('/beta13/loan-amount/edit', function (req, res) {
    res.render('beta13/loan-amount', {'edit':true} );
  });

  // Loan amount (partner)
  app.post('/beta13/loan-amount-partner', function (req, res) {
    res.redirect('/beta13/about-you-partner');
  });
  // Check
  app.get('/beta13/loan-amount-partner/edit', function (req, res) {
    res.render('beta13/loan-amount-partner', {'edit':true} );
  });

  // Loan amount (child)
  app.post('/beta13/loan-amount-child', function (req, res) {
    if (req.cookies.partner === 'no') {
      res.redirect('/beta13/about-you');
    } else {
      res.redirect('/beta13/about-you-partner');
    }
  });
  // Check
  app.get('/beta13/loan-amount-child/edit', function (req, res) {
    res.render('beta13/loan-amount-child', {'edit':true} );
  });

  // About you
  app.post('/beta13/about-you', function (req, res) {
    res.redirect('/beta13/your-address');
  });
  // Check
  app.get('/beta13/about-you/edit', function (req, res) {
    res.render('beta13/about-you', {'edit':true} );
  });

  // About you (partner)
  app.post('/beta13/about-you-partner', function (req, res) {
    res.redirect('/beta13/your-address-partner');
  });
  // Check
  app.get('/beta13/about-you-partner/edit', function (req, res) {
    res.render('beta13/about-you-partner', {'edit':true} );
  });

  // Your address
  app.post('/beta13/your-address', function (req, res) {
    res.redirect('/beta13/your-contact-preferences');
  });
  // Check
  app.get('/beta13/your-address/edit', function (req, res) {
    res.render('beta13/your-address', {'edit':true} );
  });

  // Your address (partner)
  app.post('/beta13/your-address-partner', function (req, res) {
    res.redirect('/beta13/your-contact-preferences-partner');
  });
  // Check
  app.get('/beta13/your-address-partner/edit', function (req, res) {
    res.render('beta13/your-address-partner', {'edit':true} );
  });

  // Your contact preferences
  app.post('/beta13/your-contact-preferences', function (req, res) {
    res.redirect('/beta13/your-contact-text-updates');
  });
  // Check
  app.get('/beta13/your-contact-preferences/edit', function (req, res) {
    res.render('beta13/your-contact-preferences', {'edit':true} );
  });

  // Your contact preferences (partner)
  app.post('/beta13/your-contact-preferences-partner', function (req, res) {
    res.redirect('/beta13/your-contact-text-updates-partner');
  });
  // Check
  app.get('/beta13/your-contact-preferences-partner/edit', function (req, res) {
    res.render('beta13/your-contact-preferences-partner', {'edit':true} );
  });

  // Text updates
  app.post('/beta13/your-contact-text-updates', function (req, res) {
    res.redirect('/beta13/declaration');
  });
  // Check
  app.get('/beta13/your-contact-text-updates/edit', function (req, res) {
    res.render('beta13/your-contact-text-updates', {'edit':true} );
  });

  // text updates (partner)
  app.post('/beta13/your-contact-text-updates-partner', function (req, res) {
    res.redirect('/beta13/declaration');
  });
  // Check
  app.get('/beta13/your-contact-text-updates-partner/edit', function (req, res) {
    res.render('beta13/your-contact-text-updates-partner', {'edit':true} );
  });

  // Check your answers partner save
  app.get('/beta13/check-your-answers-partner/saved', function (req, res) {
    res.render('beta13/check-your-answers-partner', {'saved':true} );
  });

  // Declaration
  app.post('/beta13/declaration', function (req, res) {
    res.redirect('/beta13/what-happens-next');
  });

  // Loan offer
  app.post('/beta13/loan-offer-partial', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/loan-offer-accept-partial');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/loan-offer-reject-partial');
    }
  });

  app.post('/beta13/loan-offer-full', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta13/loan-offer-accept-full');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta13/loan-offer-reject-full');
    }
  });

// END OF BETA 12
}
