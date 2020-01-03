import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  constructor(props){
    super(props);
  };

  render() {
    const portfolioItems = this.props.portfolio.map((curr, index) => 
      <PortfolioItem key={index} item={curr} />
    )
    const total = this.props.portfolio.reduce((prev, curr) => prev + curr.value, 0)
    return(
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value-header">
            Total Portfolio:
          </div>
          <div className="portfolio-vaue-content">
            {total}
          </div>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    )
  };
};

export default Portfolio;