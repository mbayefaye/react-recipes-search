import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
    render() {
        const { recipes, handleDetail, handleSubmit, handleChange, value, error } = this.props;
        return (
            <React.Fragment>
				<RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
				<div className="container my-5">
					{/*title*/}
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
							<h1 className="text-slanted">recipe list</h1>
						</div>
					</div>
					{/* end of title*/}

					{/*recipe row */}
					<div className="row">
					{
						error ? (<h1 className="text-danger text-center">{error}</h1>) :

						(recipes.map(recipe => {
							return (
								<Recipe
									key={recipe.recipe_id}
									recipe={recipe}
									handleDetail ={()=>handleDetail(0,recipe.recipe_id)}
								/>
							);
						})
						)
			        }
						
					</div>
					{/* end of recipe row */}
				</div>
			</React.Fragment>
        );
    }
}

export default RecipeList;