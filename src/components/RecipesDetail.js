import React, { Component } from "react";
import { recipe } from "../tempDetails";
class RecipDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: recipe,
			url: `https://www.food2fork.com/api/get?key=8053e23e22233a0684fb54328f24902c&rId=${
				this.props.id
			}`
		};
	}

	async componentDidMount() {
		try {
			// statements
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			this.setState({
				recipe: jsonData.recipe
			});
		} catch (e) {
			// statements
			console.log(e);
		}
	}

	render() {
		const {
			image_url,
			publisher,
			publisher_url,
			source_url,
			title,
			ingredients
		} = this.state.recipe;

		const { handleIndex } = this.props;
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3">
							<button
								type="button"
								className="btn btn-warning text-capitalize mb-4"
								onClick={() => this.props.handleIndex(1)}
							>
								back to recipe list
							</button>
							<img
								src={image_url}
								alt="recipe"
								className="d-block w-100"
							/>
						</div>
						{/*details*/}
						<div className="col-10 mx-auto col-md-6 my-3">
							<h6 className="text-uppercase">{title}</h6>
							<h6 className="text-warning text-capitalize text-slanted">
								provided by {publisher}
							</h6>
							<a
								href={publisher_url}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary mt-2 text-capitalize"
							>
								publisher webpage
							</a>

							<a
								href={source_url}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-success mt-2 mx-3 text-capitalize"
							>
								recipe url
							</a>
							<ul className="list-group mt-4">
								<h2 className="mt-3 mb-4">ingredients</h2>
								{ingredients.map((item, index) => {
									return (
										<li
											key={index}
											className="list-group-item"
										>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default RecipDetails;
