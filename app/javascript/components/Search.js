import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const search_results = this.props.search_results.map(currency => 
      <li key={currency.id} data-id={currency.id} onClick={this.props.handleSelect} className="currency-list-item">
        <a href="#" className="currency">
          <span>
            {currency.name}
          </span> 
          <span>
            {currency.currency_symbol}
          </span>
        </a>
      </li>
    )

    return(
      <div>
        <h1>Cryptocurrency Calculator</h1>
        <form>
          <div className="form-group">
            <input
              onChange={this.props.handleChange} 
              autoComplete="off" type="text" name="name" placeholder="Search here...." 
              value={this.props.name} className="field" 
            />
          </div>
          <div className="currency-list">
            {search_results}
          </div>
        </form>
      </div>
    )
  };
};

export default Search;