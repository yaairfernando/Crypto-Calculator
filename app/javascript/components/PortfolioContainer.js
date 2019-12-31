import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: '', 
      portfolio: [], 
      search_results: [],
      active_currency: null,
      amount: ''
    };
  }

  render() {
    return(
      <div>
        <Search />
        <Calculate />
      </div>
    )
  }
}

export default PortfolioContainer;