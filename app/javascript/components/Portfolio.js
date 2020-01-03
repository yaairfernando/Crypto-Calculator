import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return(
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value-header">
            Total Portfolio:
          </div>
          <div className="portfolio-vaue-content">
            Total
          </div>
        </div>
        <div className="portfolio-items">
        
        </div>
      </div>
    )
  };
};

export default Portfolio;