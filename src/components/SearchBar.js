import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="ui icon input">
        <input type="text" placeholder="Search..." />
        <button class="ui button">
          <i class="plus icon" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
