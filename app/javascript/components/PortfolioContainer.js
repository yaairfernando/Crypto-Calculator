import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(e){
    axios.post('http://localhost:3000/search', {
      search: e.target.value
    })
    .then((data) => {
      this.setState({ search_results: [...data.data.currencies]})
    })
    .catch((data) => {
      debugger
    })
  }

  handleSelect(e){
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    const activeCurrency = this.state.search_results.filter(item => item.id == parseInt(id));
    this.setState({ active_currency: activeCurrency[0], search_results: [] })
  }

  render() {
    const validateSearch = this.state.active_currency ? <Calculate/> :
    <Search 
      handleSelect={this.handleSelect} 
      search_results={this.state.search_results} 
      handleChange={this.handleChange}
    />
    return(
      <div>
        {validateSearch}
      </div>
    )
  }
}

export default PortfolioContainer;