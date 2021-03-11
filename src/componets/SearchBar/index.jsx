import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };
  //event handler
  onFormSubmit = (event) => { //inputChangeHandler
    event.preventDefault(); //baraye inke vaqti enter mikoni safe refresh nashe
    
    //! pass to App.js (upper component)
    this.props.onSubmit(this.state.searchTerm);
    
    this.setState({ searchTerm: "" });
  };

  render() {
    return (
      <div className="searchbar-container">
        <form className="search-form" action="" onSubmit={this.onFormSubmit}>
          {/* age parantez bezari dg kari nadare va render mikone ino. pas bedone parantez bashe ta har vaqt taqir kard render kone */}
          <input
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            placeholder="search here..."
            value={this.state.searchTerm}
            type="text"
          />
          <button type="submit">search</button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
