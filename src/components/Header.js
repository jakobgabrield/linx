import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 class="ui block center aligned header">{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
