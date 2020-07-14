import React, { Component } from 'react';
import { TiLightbulb } from 'react-icons/ti';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { FaShieldAlt } from 'react-icons/fa';
// import { FiSmile } from 'react-icons/fi';
import UserConsumer from '../../../../context/context';
export default class AboutStatus extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { aboutStatus } = value;
					return (
						<section className="content-status d-grid">
							{aboutStatus.map((status) => {
								return (
									<div className="status-item">
										<div className="status-item-icon">
											<span>
											<TiLightbulb/>	
											</span>
										</div>
                                <p className="counter">{status.count}</p>
                                <h4 className="status-title">{status.title}</h4>
									</div>
								);
							})}
						</section>
					);
				}}
			</UserConsumer>
		);
	}
}
