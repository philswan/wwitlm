module.exports = function (app) {

// BETA 07

  //Social fund question
  app.post('/beta07/outstanding-social-fund-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta07/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta07/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta07/not-sure-eligible-social-fund');
    }
  });

  //Benefits question
  app.post('/beta07/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.pcbenefittype === 'pcbenefittype1') {
        res.redirect('/beta07/borrow-amount');
    } else if (req.body.pcbenefittype === 'pcbenefittype2') {
        res.redirect('/beta07/not-eligible-current-benefits');
        // Income Support
    } else if (req.body.isbenefittype === 'isbenefittype1') {
        res.redirect('/beta07/borrow-amount');
    } else if (req.body.isbenefittype === 'isbenefittype2') {
        res.redirect('/beta07/not-eligible-current-benefits');
        // Employment and Support
    } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta07/not-eligible-current-benefits');
    } else if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta07/esa-budgeting-loan-before');
        // Job Seeker’s Allowance
    } else if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/beta07/borrow-amount');
    } else if (req.body.jsabenefittype === 'jsabenefittype2') {
        res.redirect('/beta07/jsa-budgeting-loan-before');
    } else if (req.body.jsabenefittype === 'jsabenefittype3') {
        res.redirect('/beta07/not-eligible-current-benefits');
        // None of the above
    } else {
        res.redirect('/beta07/not-eligible-current-benefits');
    }
  });

    //Current Benefits ESA part
    app.post('/beta07/esa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta07/esa-change-of-circumstances');
      } else {
        res.redirect('/beta07/esa-activity-group');
    }
  });

    app.post('/beta07/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/esa-activity-group');
      } else {
        res.redirect('/beta07/borrow-amount');
    }
  });

  app.post('/beta07/esa-activity-group', function (req, res) {
    if (req.body.duration === 'duration1') {
        res.redirect('/beta07/borrow-amount');
    } else {
      res.redirect('/beta07/esa-benefit-type');
    }
  });

  app.post('/beta07/esa-benefit-type', function (req, res) {
    if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta07/borrow-amount');
    } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta07/not-eligible-current-benefits');
    } else if (req.body.esabenefittype === 'esabenefittype3') {
        res.redirect('/beta07/not-sure-eligible-esa');
    }
  });

    //Current Benefits JSA part
    app.post('/beta07/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta07/jsa-change-of-circumstances');
      } else {
          res.redirect('/beta07/jsa-worked');
      }
    });

    app.post('/beta07/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/jsa-worked');
      } else {
        res.redirect('/beta07/borrow-amount');
      }
    });

    app.post('/beta07/jsa-worked', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta07/borrow-amount');
      } else if (req.body.duration === 'duration1') {
          res.redirect('/beta07/not-eligible-current-benefits');
        } else if (req.body.duration === 'duration2') {
          res.redirect('/beta07/jsa-partner');
      }
    });

    app.post('/beta07/jsa-partner', function (req, res) {
        if (req.body.choice === 'no') {
            res.redirect('/beta07/borrow-amount');
        } else if (req.body.duration === 'duration1') {
                res.redirect('/beta07/jsa-benefit-type');
        } else if (req.body.duration === 'duration2') {
                    res.redirect('/beta07/borrow-amount');
        }
    });

    app.post('/beta07/jsa-benefit-type', function (req, res) {
        if (req.body.duration === 'duration1') {
            res.redirect('/beta07/borrow-amount');
        } else if (req.body.duration === 'duration2') {
            res.redirect('/beta07/not-eligible-current-benefits');
        }   else if (req.body.type === 'option2') {
            res.redirect('/beta07/not-eligible-current-benefits');
        } else if (req.body.type === 'option3') {
            res.redirect('/beta07/not-sure-eligible-jsa');
        }
    });

  // Borrow amount
  app.post('/beta07/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta07/industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta07/not-eligible-borrow-amount');
    }
  });

  // Industrial action
  app.post('/beta07/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta07/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta07/eligible');
    }
  });

  // Eligible
  app.post('/beta07/eligible', function (req, res) {
    res.redirect('/beta07/partner');
  });

  // Partner
  app.post('/beta07/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta07/your-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta07/recent-partners');
    }
  });

  // Recent partners
  app.post('/beta07/recent-partners', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta07/child-benefit-you-or-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta07/child-benefit');
    }
  });

  // Your partner
  app.post('/beta07/your-partner', function (req, res) {
    res.redirect('/beta07/child-benefit-you-or-partner');
  });

  // Child benefit
  app.post('/beta07/child-benefit', function (req, res) {
    res.redirect('/beta07/repayments-credit-store-cards');
  });

  // Child benefit (you or your partner)
  app.post('/beta07/child-benefit-you-or-partner', function (req, res) {
    res.redirect('/beta07/repayments-credit-store-cards-partner');
  });

  // Debt repayments

    // Credit and store cards
    app.post('/beta07/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta07/repayments-loans');
    });
    // Credit and store cards (partner)
    app.post('/beta07/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta07/repayments-loans-partner');
    });
    // Loans
    app.post('/beta07/repayments-loans', function (req, res) {
      res.redirect('/beta07/repayments-rent-to-own');
    });
    // Loans (partner)
    app.post('/beta07/repayments-loans-partner', function (req, res) {
      res.redirect('/beta07/repayments-rent-to-own-partner');
    });
    // Rent to own
    app.post('/beta07/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta07/repayments-landlord-payments');
    });
    // Rent to own (partner)
    app.post('/beta07/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta07/repayments-landlord-payments-partner');
    });
    // Landlord payments
    app.post('/beta07/repayments-landlord-payments', function (req, res) {
      res.redirect('/beta07/loan-amount');
    });
    // Landlord payments (partner)
    app.post('/beta07/repayments-landlord-payments-partner', function (req, res) {
      res.redirect('/beta07/loan-amount-partner');
    });

  // Loan amount
  app.post('/beta07/loan-amount', function (req, res) {
    res.redirect('/beta07/about-you');
  });
  // Loan amount (partner)
  app.post('/beta07/loan-amount-partner', function (req, res) {
    res.redirect('/beta07/about-you-partner');
  });

  // About you
  app.post('/beta07/about-you', function (req, res) {
    res.redirect('/beta07/your-contact-details');
  });
  // About you (partner)
  app.post('/beta07/about-you-partner', function (req, res) {
    res.redirect('/beta07/your-contact-details-partner');
  });

  // Your contact details
  app.post('/beta07/your-contact-details', function (req, res) {
    res.redirect('/beta07/savings-under63');
  });
  // Your contact details (partner)
  app.post('/beta07/your-contact-details-partner', function (req, res) {
    res.redirect('/beta07/savings-under63-partner');
  });

  // Savings
    // Amount of savings
    app.post('/beta07/savings-under63', function (req, res) {
      res.redirect('/beta07/savings-under63-property');
    });
    // Amount of savings (partner)
    app.post('/beta07/savings-under63-partner', function (req, res) {
      res.redirect('/beta07/savings-under63-partner-property');
    });
    // Property
    app.post('/beta07/savings-under63-property', function (req, res) {
      res.redirect('/beta07/declaration');
    });
    // Property (partner)
    app.post('/beta07/savings-under63-partner-property', function (req, res) {
      res.redirect('/beta07/declaration');
    });

  // Declaration
  app.post('/beta07/declaration', function (req, res) {
    res.redirect('/beta07/what-happens-next');
  });

// END OF BETA 07
}
