import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
        </form>
      </div>
    )
  };
};

export default Search;