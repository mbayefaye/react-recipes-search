import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipesDetail from "./components/RecipesDetail";

class App extends Component {
	state = {
		recipes: recipes,
		url:"https://www.food2fork.com/api/search?key=8053e23e22233a0684fb54328f24902c&q=chicken%20breast&page=2",
		detail_id: 35382,

		pageIndex: 1,
		search: "",
		base_url:"https://www.food2fork.com/api/search?key=8053e23e22233a0684fb54328f24902c",
		query:'&q=',
		error:""
	};

	async getRecipes() {
		try {
			// statements
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			if (jsonData.recipes.length === 0) {
				this.setState(()=>{
					return{
					error:"sorry but your search did not return any results"

					}
				})
			}else {
				this.setState(()=>{
					return {
						recipes:jsonData.recipes
					}
				})
			}
			this.setState({
				recipes: jsonData.recipes
			});
		} catch (e) {
			// statements
			console.log(e);
		}
	}

	componentDidMount() {
		this.getRecipes();
	}

	displayPage = index => {
		switch (index) {
			default:
			case 1:
				return (
					<RecipeList
						recipes={this.state.recipes}
						handleDetail={this.handleDetail}
						value={this.state.search}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						error={this.state.error}

					/>
				);
			case 0:
				return (
					<RecipesDetail
						id={this.state.detail_id}
						handleIndex={this.handleIndex}
					/>
				);
		}
	};

	handleIndex = index => {
		this.setState({
			pageIndex: index
		});
	};

	handleDetail = (index, id) => {
		this.setState({
			pageIndex: index,
			detail_id: id
		});
	};

	handleChange = e => {
		this.setState({
			search:e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		const {base_url ,query,search} = this.state;
		this.setState(()=>{
			return {url:`${base_url}${query}${search}`,search:""}
		},()=>{
			this.getRecipes()

		})
		
	};

	render() {
		return (
			<React.Fragment>
				{this.displayPage(this.state.pageIndex)}
			</React.Fragment>
		);
	}
}

export default App;
