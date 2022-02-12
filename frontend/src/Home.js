import React from 'react';
import './styles.scss';
import * as API_CATEGORIES from './api/category_api';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    API_CATEGORIES.getCategories((result, status, err) => {
      if (result !== null && status === 200) {
        this.setState({categories: result})
      }
    })
  }

  displayCategories() {
    let categoriesView = []
    let categoriesLength = this.state.categories.length;
    if (categoriesLength !== 0) {
      for (let i = 0; i < categoriesLength; i++) {
        categoriesView.push(this.categoryCard(this.state.categories[i]));
      }
    }
    return categoriesView
  }

  categoryCard(category) {
    return (
      <div key={category.id} className="Card">
        <h3>{category.name}</h3>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">

        <div className="Categories">
          {this.displayCategories()}
        </div>

        <div className="Recommended">

        </div>
      </div>
    );
  }
}

export default Home;
