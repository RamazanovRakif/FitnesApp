import React, { Component } from 'react';
import './Customers.scss';
import UserConsumer from '../../../../context/context';

class Customers extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { customers } = value;
					return (
						<div>
							<section className="customers">
								<div className="customers__content section-gap">
									<div className="wrapper">
										<div className="header__title__full">
											<h4 className="header__title">
												<span className="sub-title">Testimonials</span>
												Happy Clients
											</h4>
										</div>

										<div className="customer d-grid">
											{customers.map((customer) => {
												return (
													<div className="customer__card" key={customer.id}>
														<img src={require(`../../../../images/${customer.img}`)} className="img-responsive" alt="" />

														<div className="customer__card-body">
															<p className="customer__card-text">
																{customer.description}
															</p>
															<a href="#link" className="customer__link">
																<h3 className="customer__card-title">
																	{customer.name}
																</h3>
															</a>
														</div>
													</div>
  												);
											})}
										</div>
									</div>
								</div>
							</section>
							
						</div>
					);
				}}
			</UserConsumer>
		);
	}
}

export default Customers;
