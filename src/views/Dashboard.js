import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
import Swipe from '../components/Swipe.js';
import LoginService from '../services/LoginService';
import { diningHallStrings } from '../components/Constants.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getURL, sortSwipes } from '../Utils.js';
import Footer from '../components/Footer.js';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			swipes: [],
			loading: false,
		};
	}

	getFilteredResults(event) {
		event.preventDefault();
		let form = {
			'locations': []
		};
		diningHallStrings.forEach(key => {
			if (document.getElementById(key).checked) {
				form['locations'].push(key);
			}
		});
		this.getSwipes(form);
	}

	getSwipes(form={}) {
		this.setState({
			loading: true,
		});
		fetch(
			getURL() + '/getswipes?filters=' + JSON.stringify(form),
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
		).then(
			response => response.json()
		).then(data => {
			let swipeDatas = sortSwipes(Object.values(data));
			let swipes = swipeDatas.map(
				swipeData => <Swipe swipe={swipeData} key={swipeData.id} />
			);
			this.setState({
				swipes: swipes,
				loading: false,
			});
		});
	}

	makeCheckboxes(strings) {
		let checks = [];
		strings.forEach(s => {
			checks.push(
				<rb.Form.Check type='checkbox' label={s} key={s} id={s} name={s} defaultChecked />
			);
		});
		return checks;
	}

	componentDidMount() {
		this.getSwipes();
	}

	render() {
		if (!LoginService.isLoggedIn()) {
			return LoginService.redirectLogin();
		}
		let swipes = this.state.swipes;
		let diningHallCheckboxes = this.makeCheckboxes(diningHallStrings);
		return (
			<>
				<SwipeNav />
				<div className='container'>
					<h1 className='pagetitle'>Swipe Dashboard</h1>
				</div>
				<div className='container'>
					<div className='row container' id='middashboard'>
						<div className='col'>
							<rb.Accordion>
								<rb.Card>
									<rb.Card.Header>
										<rb.Accordion.Toggle as={rb.Button} eventKey="0">
											Filters
										</rb.Accordion.Toggle>
									</rb.Card.Header>
									<rb.Accordion.Collapse eventKey="0">
										<rb.Card.Body>
											<rb.Form onSubmit={(e) => this.getFilteredResults(e)} id='filterform' name='filterform'>
												<h2>Dining Halls:</h2>
												<rb.Form.Group>
													{diningHallCheckboxes}
												</rb.Form.Group>
												<rb.Accordion.Toggle type='submit' as={rb.Button} eventKey="0">
													Apply Filters
                        </rb.Accordion.Toggle>
											</rb.Form>
										</rb.Card.Body>
									</rb.Accordion.Collapse>
								</rb.Card>
							</rb.Accordion>
						</div>
						<div className='col' id='addswipebuttoncol'>
							<rb.Button className='btn-block' href='/#/addswipe' id='addswipebutton'>Add Swipe</rb.Button>
						</div>
					</div>
				</div>
				<div className='container'>
					<br />
					<b>Swipes happening in the next 48 hours will be shown.</b>
				</div>
				<div className='container'>
					{this.state.loading ? 'loading' : (swipes.length === 0 ? 'No swipes available.' : swipes)}
				</div>
				<Footer />
			</>
		);
	}
}