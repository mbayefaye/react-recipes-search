import React, { Component } from "react";

class Recipe extends Component {
	render() {
		const {
			image_url,
			title,
			source_url,
			publisher,
			recipe_id
		} = this.props.recipe;
      const {handleDetail} = this.props

		return (
			<div>
				<React.Fragment>
					<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={image_url}
								alt="recipe"
								className="img-card-top"
								style={{ height: "14rem" }}
							/>
							<div className="card-body text-capitalize">
								<h6>{title}</h6>
								<h6 className="text-warning text-slanted">
									provided by {publisher}
								</h6>
							</div>
							<div className="card-footer">
								<button
									type="button"
									className="btn btn-primary
									text-capitalize"
									onClick ={handleDetail}
								>
									details
								</button>
								<a
									href={source_url}
									className="btn btn-success mx-2"
									target="_blank"
									rel="noopener noreferrer"

								>
									recipe url
								</a>
							</div>
						</div>
					</div>
				</React.Fragment>
			</div>
		);
	}
}

export default Recipe;
