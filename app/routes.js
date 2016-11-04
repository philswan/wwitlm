module.exports = {

	bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // Include Alpha routes
    require('./routes-includes/alpha06-routes.js')(app);
    require('./routes-includes/alpha07-routes.js')(app);

    // Include Beta routes
    require('./routes-includes/beta01-routes.js')(app);
    require('./routes-includes/beta02-routes.js')(app);
    require('./routes-includes/beta03-routes.js')(app);
    require('./routes-includes/beta04-routes.js')(app);
    require('./routes-includes/beta05-routes.js')(app);
    require('./routes-includes/beta06-routes.js')(app);
    require('./routes-includes/beta07-routes.js')(app);
    require('./routes-includes/beta08-routes.js')(app);
    require('./routes-includes/beta09-routes.js')(app);
    require('./routes-includes/beta10-routes.js')(app);
    require('./routes-includes/beta11-routes.js')(app);
    require('./routes-includes/beta12-routes.js')(app);
    require('./routes-includes/beta13-routes.js')(app);
    require('./routes-includes/beta14-routes.js')(app);
    require('./routes-includes/beta15-routes.js')(app);
    require('./routes-includes/beta16-routes.js')(app);
    require('./routes-includes/beta17-routes.js')(app);

    // Include MVP routes
    require('./routes-includes/mvp01-routes.js')(app);
    require('./routes-includes/mvp02-routes.js')(app);
    

		//////////////////////////////////////////////////////////
		// SANDPIT
		//////////////////////////////////////////////////////////

		// loan offer - channel question
		app.post('/sandpit/loan-offer/channel/1-1', function (req, res) {
			res.redirect('/sandpit/loan-offer/channel/1-2');
		});

		app.post('/sandpit/loan-offer/channel/1-2', function (req, res) {
			res.redirect('/sandpit/loan-offer/channel/1-3');
		});

		//loan offer - accept/reject version 1
		app.post('/sandpit/loan-offer/version-1/loan-offer', function (req, res) {
			if (req.body.choice === 'yes') {
				res.redirect('/sandpit/loan-offer/version-1/loan-offer-accept');
			} else if (req.body.choice === 'no') {
				res.redirect('/sandpit/loan-offer/version-1/loan-offer-reject');
			}
		});

		//loan offer - accept/reject partial offer version 1
		app.post('/sandpit/loan-offer/version-1/partial-loan-offer', function (req, res) {
			if (req.body.choice === 'yes') {
				res.redirect('/sandpit/loan-offer/version-1/partial-loan-offer-accept');
			} else if (req.body.choice === 'no') {
				res.redirect('/sandpit/loan-offer/version-1/partial-loan-offer-reject');
			}
		});

		//loan offer - accept/reject version 2
		app.post('/sandpit/loan-offer/version-2/loan-offer-partial', function (req, res) {
			if (req.body.choice === 'yes') {
				res.redirect('/sandpit/loan-offer/version-2/loan-offer-accept-partial');
			} else if (req.body.choice === 'no') {
				res.redirect('/sandpit/loan-offer/version-2/loan-offer-reject-partial');
			}
		});

		app.post('/sandpit/loan-offer/version-2/loan-offer-full', function (req, res) {
			if (req.body.choice === 'yes') {
				res.redirect('/sandpit/loan-offer/version-2/loan-offer-accept-full');
			} else if (req.body.choice === 'no') {
				res.redirect('/sandpit/loan-offer/version-2/loan-offer-reject-full');
			}
		});

		//current benefits question - v1
		app.post('/sandpit/current-benefits-question/v1/current-benefits', function (req, res) {
			if (req.body.esabenefittype === 'esabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v1/current-benefits-esa');
			} else if (req.body.jsabenefittype === 'jsabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v1/current-benefits-jsa');
			} else if (req.body.choice === 'no') {
				res.redirect('/sandpit/loan-offer/version-1/loan-offer-reject');
			}
		});

		//Current benefits question - v2

		app.post('/sandpit/current-benefits-question/v2/current-benefits', function (req, res) {
			// Pension Credit
			if (req.body.pcbenefittype === 'pcbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.pcbenefittype === 'pcbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
				// Income Support
			} else if (req.body.isbenefittype === 'isbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.isbenefittype === 'isbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
				// Employment and Support
			} else if (req.body.esabenefittype === 'esabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.esabenefittype === 'esabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v2/current-benefits-esa');
			} else if (req.body.esabenefittype === 'esabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
				// Job Seeker’s Allowance
			} else if (req.body.jsabenefittype === 'jsabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.jsabenefittype === 'jsabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v2/current-benefits-jsa');
			} else if (req.body.jsabenefittype === 'jsabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
				// None of the above
			} else {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
			}
		});

		// Current benefits ESA part
		app.post('/sandpit/current-benefits-question/v2/current-benefits-esa', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.duration === 'duration2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
			} else if (req.body.type === 'option2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
			} else if (req.body.type === 'option3') {
				res.redirect('/sandpit/current-benefits-question/v2/not-sure-eligible-esa');
			}
		});

		// Current benefits JSA part
		app.post('/sandpit/current-benefits-question/v2/current-benefits-jsa', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
			} else if (req.body.duration === 'duration2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
			} else if (req.body.type === 'option2') {
				res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
			} else if (req.body.type === 'option3') {
				res.redirect('/sandpit/current-benefits-question/v2/not-sure-eligible-jsa');
			}
		});

		//Current benefits question - v3

		app.post('/sandpit/current-benefits-question/v3/current-benefits', function (req, res) {
			// Pension Credit
			if (req.body.pcbenefittype === 'pcbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.pcbenefittype === 'pcbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
				// Income Support
			} else if (req.body.isbenefittype === 'isbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.isbenefittype === 'isbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
				// Employment and Support
			} else if (req.body.esabenefittype === 'esabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-esa-activity-group');
			} else if (req.body.esabenefittype === 'esabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-esa');
			} else if (req.body.esabenefittype === 'esabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
				// Job Seeker’s Allowance
			} else if (req.body.jsabenefittype === 'jsabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.jsabenefittype === 'jsabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-jsa-worked');
			} else if (req.body.jsabenefittype === 'jsabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
				// None of the above
			} else {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			}
		});

		// Current benefits ESA activity group

		app.post('/sandpit/current-benefits-question/v3/current-benefits-esa-activity-group', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-esa');
			}
		});

		// Current benefits ESA part

		app.post('/sandpit/current-benefits-question/v3/current-benefits-esa', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.duration === 'duration2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option3') {
				res.redirect('/sandpit/current-benefits-question/v3/not-sure-eligible-esa');
			}
		});

		app.post('/sandpit/current-benefits-question/v3/current-benefits-esa', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.duration === 'duration2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option3') {
				res.redirect('/sandpit/current-benefits-question/v3/not-sure-eligible-esa');
			}
		});

		// Current benefits JSA part

		// hours worked
		app.post('/sandpit/current-benefits-question/v3/current-benefits-jsa-worked', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-jsa-partner');
			}
		});

		// partner
		app.post('/sandpit/current-benefits-question/v3/current-benefits-jsa-partner', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/current-benefits-jsa-type');
			} else {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			}
		});

		app.post('/sandpit/current-benefits-question/v3/current-benefits-jsa-type', function (req, res) {
			if (req.body.duration === 'duration1') {
				res.redirect('/sandpit/current-benefits-question/v3/borrow-amount');
			} else if (req.body.duration === 'duration2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option2') {
				res.redirect('/sandpit/current-benefits-question/v3/not-eligible-current-benefits');
			} else if (req.body.type === 'option3') {
				res.redirect('/sandpit/current-benefits-question/v3/not-sure-eligible-jsa');
			}
		});

		//Current benefits question v5

		//Benefits question
		app.post('/sandpit/current-benefits-question/v5/current-benefits', function (req, res) {
			// Pension Credit
			if (req.body.pcbenefittype === 'pcbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.pcbenefittype === 'pcbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// Income Support
			} else if (req.body.isbenefittype === 'isbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.isbenefittype === 'isbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// Employment and Support
			} else if (req.body.esabenefittype === 'esabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
			} else if (req.body.esabenefittype === 'esabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/esa-budgeting-loan-before');
				// Job Seeker’s Allowance
			} else if (req.body.jsabenefittype === 'jsabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.jsabenefittype === 'jsabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/jsa-budgeting-loan-before');
			} else if (req.body.jsabenefittype === 'jsabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// None of the above
			} else {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
			}
		});

			//Current Benefits ESA part v5
			app.post('/sandpit/current-benefits-question/v5/esa-budgeting-loan-before', function (req, res) {
				if (req.body.esabenefitbefore === 'esabenefitbefore1') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-change-of-circumstances');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/esa-benefit-type');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-change-of-circumstances', function (req, res) {
				if (req.body.choice === 'yes') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-benefit-type');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-benefit-type', function (req, res) {
				if (req.body.esabenefittype === 'esabenefittype1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.esabenefittype === 'esabenefittype2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				} else if (req.body.esabenefittype === 'esabenefittype3') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-activity-group');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-activity-group', function (req, res) {
				if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/not-sure-eligible-esa');
				}
			});

			//Current Benefits JSA part v5
			app.post('/sandpit/current-benefits-question/v5/jsa-budgeting-loan-before', function (req, res) {
				if (req.body.esabenefitbefore === 'esabenefitbefore1') {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-change-of-circumstances');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-worked');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-change-of-circumstances', function (req, res) {
				if (req.body.choice === 'yes') {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-worked');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-worked', function (req, res) {
				if (req.body.choice === 'no') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				}	else if (req.body.duration === 'duration2') {
						res.redirect('/sandpit/current-benefits-question/v5/jsa-partner');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-partner', function (req, res) {
				if (req.body.choice === 'no') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration1') {
						res.redirect('/sandpit/current-benefits-question/v5/jsa-benefit-type');
				} else if (req.body.duration === 'duration2') {
							res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-benefit-type', function (req, res) {
				if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				}	else if (req.body.type === 'option2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				} else if (req.body.type === 'option3') {
					res.redirect('/sandpit/current-benefits-question/v5/not-sure-eligible-jsa');
				}
			});


			// Applying for someone else
			app.post('/sandpit/applying-for-someone-else/v1/', function (req, res) {
				if (req.body.options === 'yes') {
					res.redirect('/sandpit/applying-for-someone-else/v1/written-consent');
				}
			});

			app.post('/sandpit/applying-for-someone-else/v1/written-consent', function (req, res) {
				if (req.body.options === 'no') {
					res.redirect('/sandpit/applying-for-someone-else/v1/written-consent-detail');
				}
			});


			//DEBT - REPAYMENTS

			//v3 - Credit and store cards
			app.post('/sandpit/debt-repayments/v3/credit-store-cards', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v3/loans');
			});
			//v3 - Loans
			app.post('/sandpit/debt-repayments/v3/loans', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v3/mobile-phone-contract');
			});
			//v3 - Mobile phone
			app.post('/sandpit/debt-repayments/v3/mobile-phone-contract', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v3/rent-to-own');
			});
			//v3 - Rent to own
			app.post('/sandpit/debt-repayments/v3/rent-to-own', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v3/about-you');
			});


			//v5 - Credit and store cards
			app.post('/sandpit/debt-repayments/v5/credit-store-cards', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v5/loans');
			});
			//v5 - Loans
			app.post('/sandpit/debt-repayments/v5/loans', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v5/rent-to-own');
			});
			//v5 - Rent to own
			app.post('/sandpit/debt-repayments/v5/rent-to-own', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v5/landlord-payments');
			});
			//v5 - Landlord payments
			app.post('/sandpit/debt-repayments/v5/landlord-payments', function (req, res) {
				res.redirect('/sandpit/debt-repayments/v5/about-you');
			});


			//SAVINGS

			//Single - under 63
			app.post('/sandpit/savings/v3/savings-under63-single', function (req, res) {
				res.redirect('/sandpit/savings/v3/savings-under63-single-property');
			});

			//Single - over 63
			app.post('/sandpit/savings/v3/savings-over63-single', function (req, res) {
				res.redirect('/sandpit/savings/v3/savings-over63-single-property');
			});

			//With partner - under 63
			app.post('/sandpit/savings/v3/savings-under63-partner', function (req, res) {
				res.redirect('/sandpit/savings/v3/savings-under63-partner-property');
			});

			//With partner - over 63
			app.post('/sandpit/savings/v3/savings-over63-partner', function (req, res) {
				res.redirect('/sandpit/savings/v3/savings-over63-partner-property');
			});


			//////////////////////////////////////////////////////////
			// END OF SANDPIT
			//////////////////////////////////////////////////////////

			// loan offer - updates 2
			app.post('/sandpit/loan-offer/channel/2-1', function (req, res) {
				res.redirect('/sandpit/loan-offer/channel/2-2');
			});
			app.post('/sandpit/loan-offer/channel/2-2', function (req, res) {
				res.redirect('/sandpit/loan-offer/channel/2-3');
			});

			// eligibilityV1
			app.post('/eligibilityV1/less-than-100', function (req, res) {
				if (req.body.lt100 === 'Yes') {
					res.redirect('/eligibilityV1/about-benefit-pension-credit');
				}
			});

			app.post('/eligibilityV1/about-benefit-pension-credit', function(req, res) {

				var pension = req.body['pension-credit'];
				var pensionLength = req.body['pc-how-long'];

				if (pension === 'No' || pensionLength === 'No') {
					res.redirect('/eligibilityV1/about-benefit-income-support');
				} else if (pension === 'Yes' && pensionLength === 'Yes') {
					res.redirect('/eligibilityV1/partner');
				}

			});

			app.post('/eligibilityV1/about-benefit-income-support', function(req, res) {

				var income = req.body['income-support'];
				var incomeLength = req.body['is-how-long'];

				if (income === 'No' || incomeLength === 'No') {
					res.redirect('/eligibilityV1/about-benefit-jsa');
				} else if (income === 'Yes' && incomeLength === 'Yes') {
					res.redirect('/eligibilityV1/partner');
				}

			});

			app.post('/eligibilityV1/about-benefit-jsa', function(req, res) {

				var jsa = req.body['jsa'];
				var jsaType = req.body['jsa-type'];
				var jsaLength = req.body['jsa-length'];

				if (jsa === 'No') {
					res.redirect('/eligibilityV1/about-benefit-esa');
				} else if (jsa === 'Yes' && jsaType === 'Contribution' || jsaType === 'Unsure') {
					res.redirect('/eligibilityV1/eligibility-exit');
				} else if (jsaType === 'Income' && jsaLength === 'over6') {
					res.redirect('/eligibilityV1/partner');
				} else if (jsaType === 'Income' && jsaLength === 'under6') {
					res.redirect('/eligibilityV1/eligibility-exit');
				}

			});

			app.post('/eligibilityV1/about-benefit-esa', function(req, res) {

				var esa = req.body['esa'];
				var esaType = req.body['esa-type'];
				var esaLength = req.body['esa-length'];

				if (esa === 'No') {
					res.redirect('/eligibilityV1/eligibility-exit');
				} else if (esa === 'Yes' && esaType === 'Contribution' || esaType === 'Unsure') {
					res.redirect('/eligibilityV1/eligibility-exit');
				} else if (esaType === 'Income' && esaLength === 'over6') {
					res.redirect('/eligibilityV1/partner');
				} else if (esaType === 'Income' && esaLength === 'under6') {
					res.redirect('/eligibilityV1/eligibility-exit');
				}

			});

			app.post('/eligibilityV1/about-benefit', function (req, res) {
				if (req.body.benefit === 'Yes') {
					res.redirect('/eligibilityV1/partner')
				} else {
					res.redirect('/eligibilityV1/overview')
				}
			});

			app.post('/eligibilityV1/partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibilityV1/partner-yes')
				} else {
					res.redirect('/eligibilityV1/partner-no')
				}
			});

			app.post('/eligibilityV1/debt-repayments-partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibilityV1/debt-repayment')
				} else {
					res.redirect('/eligibilityV1/personal-details')
				}
			});

			app.post('/eligibilityV1/children', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibilityV1/loan-amount-child')
				} else {
					res.redirect('/eligibilityV1/loan-amount-partner')
				}
			});

			app.post('/eligibilityV1/children-no-partner', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibilityV1/loan-amount-child-single')
				} else {
					res.redirect('/eligibilityV1/loan-amount-single')
				}
			});

			//eligibilityV2

			app.post('/eligibilityV2/before-you-start', function (req, res) {

				var amount       = req.body['less-than-100'];
				var benefit      = req.body['benefit'];
				var oweSocial    = req.body['owe-social-fund'];
				var savings      = req.body['savings'];
				var industrial   = req.body['industrial-action'];

				if (amount === 'Yes' && benefit === 'Yes' && oweSocial === 'No' && savings === 'No' && industrial === 'No') {
					res.redirect('/eligibilityV2/partner')
				} else if (amount === 'Yes' && benefit === 'Yes' && oweSocial === 'Yes' && savings === 'Yes' && industrial === 'Yes') {
					res.redirect('/eligibilityV2/eligibility-exit');
				} else if (benefit === 'No') {
					res.redirect('/eligibilityV2/eligibility-exit-benefit');
				} else if (amount === 'No') {
					res.redirect('eligibilityV2/eligibility-exit-100');
				}
				else {
					res.redirect('/eligibilityV2/eligibility-exit')
				}
			});

			app.post('/eligibilityV2/less-than-100', function (req, res) {
				if (req.body.lt100 === 'No') {
					res.redirect('/eligibilityV2/about-benefit')
				} else {
					res.redirect('/eligibilityV2/about-benefit')
				}
			});

			app.post('/eligibilityV2/about-benefit', function (req, res) {
				if (req.body.benefit === 'Yes') {
					res.redirect('/eligibilityV2/partner')
				} else {
					res.redirect('/eligibilityV2/overview')
				}
			});

			app.post('/eligibilityV2/partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibilityV2/partner-yes')
				} else {
					res.redirect('/eligibilityV2/partner-no')
				}
			});

			app.post('/eligibilityV2/debt-repayments-partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibilityV2/debt-repayment')
				} else {
					res.redirect('/eligibilityV2/personal-details')
				}
			});

			app.post('/eligibilityV2/children', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibilityV2/loan-amount-child')
				} else {
					res.redirect('/eligibilityV2/loan-amount-partner')
				}
			});

			app.post('/eligibilityV2/children-no-partner', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibilityV2/loan-amount-child-single')
				} else {
					res.redirect('/eligibilityV2/loan-amount-single')
				}
			});

			//eligiblity-v3

			app.post('/eligibility-v3/before-you-start', function (req, res) {


			});

			app.post('/eligibility-v3/less-than-100', function (req, res) {
				if (req.body.lt100 === 'No') {
					res.redirect('/eligibility-v3/eligibility-exit-100')
				} else {
					res.redirect('/eligibility-v3/about-benefit')
				}
			});

			app.post('/eligibility-v3/social-fund-debt', function (req, res) {
				if (req.body.socialfund === 'No') {
					res.redirect('/eligibility-v3/savings')
				} else if (req.body.socialfund ==='Yes') {
					res.redirect('/eligibility-v3/eligibility-exit-social-fund-la')
				} else {
					res.redirect('/eligibility-v3/eligibility-exit-social-fund')
				}

			});

			app.post('/eligibility-v3/savings', function (req, res) {
				if (req.body.savings === 'No') {
					res.redirect('/eligibility-v3/industrial-action')
				} else {
					res.redirect('/eligibility-v3/eligibility-exit-savings')
				}

			});

			app.post('/eligibility-v3/industrial-action', function (req, res) {
				if (req.body.industrialaction=== 'No') {
					res.redirect('/eligibility-v3/eligibility-confirmation')
				} else {
					res.redirect('/eligibility-v3/eligibility-exit-industrial-action')
				}

			});

			app.post('/eligibility-v3/about-benefit', function (req, res) {
				var hasEnoughBenefit=(
					req.body.incomesupport6 === 'Yes' ||
					req.body.pensioncredit6 === 'Yes' ||
					req.body.jsa6 === 'Yes' ||
					req.body.esa6 === 'Yes'
				)
				var needsMoreInfo=(
					req.body.esatype === 'Unsure' ||
					req.body.jsatype === 'Unsure'
				)
				if (hasEnoughBenefit){
					res.redirect('/eligibility-v3/social-fund-debt')
				} else if (needsMoreInfo){
					res.redirect('/eligibility-v3/eligibility-exit-benefit')
				} else {
					res.redirect('/eligibility-v3/eligibility-exit-benefit-la')
				}
			});

			app.post('/eligibility-v3/partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v3/partner-yes')
				} else {
					res.redirect('/eligibility-v3/partner-no')
				}
			});

			app.post('/eligibility-v3/debt-repayments-partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v3/debt-repayment')
				} else {
					res.redirect('/eligibility-v3/personal-details')
				}
			});

			app.post('/eligibility-v3/children', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v3/loan-amount-child')
				} else {
					res.redirect('/eligibility-v3/loan-amount-partner')
				}
			});

			app.post('/eligibility-v3/children-no-partner', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v3/loan-amount-child-single')
				} else {
					res.redirect('/eligibility-v3/loan-amount-single')
				}
			});

			//eligibilty-v4

			app.post('/eligibility-v4/before-you-start', function (req, res) {


			});

			app.post('/eligibility-v4/less-than-100', function (req, res) {
				if (req.body.lt100 === 'No') {
					res.redirect('/eligibility-v4/eligibility-exit-100')
				} else {
					res.redirect('/eligibility-v4/savings')
				}
			});

			app.post('/eligibility-v4/social-fund-debt', function (req, res) {
				if (req.body.socialfund === 'No') {
					res.redirect('/eligibility-v4/about-benefit')
				} else if (req.body.socialfund ==='Yes') {
					res.redirect('/eligibility-v4/eligibility-exit-social-fund-la')
				} else {
					res.redirect('/eligibility-v4/eligibility-exit-social-fund')
				}

			});

			app.post('/eligibility-v4/savings', function (req, res) {
				if (req.body.savings === 'No') {
					res.redirect('/eligibility-v4/industrial-action')
				} else {
					res.redirect('/eligibility-v4/eligibility-exit-savings')
				}

			});

			app.post('/eligibility-v4/industrial-action', function (req, res) {
				if (req.body.industrialaction=== 'No') {
					res.redirect('/eligibility-v4/eligibility-confirmation')
				} else {
					res.redirect('/eligibility-v4/eligibility-exit-industrial-action')
				}

			});

			app.post('/eligibility-v4/about-benefit', function (req, res) {
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
					res.redirect('/eligibility-v4/less-than-100')
				} else if (needsMoreInfo){
					res.redirect('/eligibility-v4/eligibility-exit-benefit')
				} else {
					res.redirect('/eligibility-v4/eligibility-exit-benefit-la')
				}
			});

			app.post('/eligibility-v4/partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v4/partner-yes')
				} else {
					res.redirect('/eligibility-v4/partner-no')
				}
			});

			app.post('/eligibility-v4/debt-repayments-partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v4/debt-repayment')
				} else {
					res.redirect('/eligibility-v4/personal-details')
				}
			});

			app.post('/eligibility-v4/children', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v4/loan-amount-child')
				} else {
					res.redirect('/eligibility-v4/loan-amount-partner')
				}
			});

			app.post('/eligibility-v4/children-no-partner', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v4/loan-amount-child-single')
				} else {
					res.redirect('/eligibility-v4/loan-amount-single')
				}
			});

			//eligibility-v5

			app.post('/eligibility-v5/before-you-start', function (req, res) {


			});

			app.post('/eligibility-v5/less-than-100', function (req, res) {
				if (req.body.lt100 === 'No') {
					res.redirect('/eligibility-v5/eligibility-exit-100')
				} else {
					res.redirect('/eligibility-v5/industrial-action')
				}
			});

			app.post('/eligibility-v5/social-fund-debt', function (req, res) {
				if (req.body.socialfund === 'No') {
					res.redirect('/eligibility-v5/about-benefit')
				} else if (req.body.socialfund ==='Yes') {
					res.redirect('/eligibility-v5/eligibility-exit-social-fund-la')
				} else {
					res.redirect('/eligibility-v5/eligibility-exit-social-fund')
				}

			});

			app.post('/eligibility-v5/industrial-action', function (req, res) {
				if (req.body.industrialaction=== 'No') {
					res.redirect('/eligibility-v5/eligibility-confirmation')
				} else {
					res.redirect('/eligibility-v5/eligibility-exit-industrial-action')
				}

			});

			app.post('/eligibility-v5/about-benefit', function (req, res) {
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
					res.redirect('/eligibility-v5/less-than-100')
				} else if (needsMoreInfo){
					res.redirect('/eligibility-v5/eligibility-exit-benefit')
				} else {
					res.redirect('/eligibility-v5/eligibility-exit-benefit-la')
				}
			});

			app.post('/eligibility-v5/partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v5/partner-yes')
				} else {
					res.redirect('/eligibility-v5/partner-no')
				}
			});

			app.post('/eligibility-v5/debt-repayments-partner', function (req, res) {
				if (req.body.partner === 'Yes') {
					res.redirect('/eligibility-v5/debt-repayment')
				} else {
					res.redirect('/eligibility-v5/personal-details')
				}
			});

			app.post('/eligibility-v5/children', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v5/loan-amount-child')
				} else {
					res.redirect('/eligibility-v5/loan-amount-partner')
				}
			});

			app.post('/eligibility-v5/children-no-partner', function (req, res) {
				if (req.body.children === 'Yes') {
					res.redirect('/eligibility-v5/loan-amount-child-single')
				} else {
					res.redirect('/eligibility-v5/loan-amount-single')
				}
			});

	}
}