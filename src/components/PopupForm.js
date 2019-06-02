import React from "react";

class PopupForm extends React.Component {
  state = { url: "", linkName: "", description: "", timeAndDate: "" };

  onURLInput = event => {
    this.setState({
      url: event.target.value
    });
  };

  onLinkNameInput = event => {
    this.setState({
      linkName: event.target.value
    });
  };

  onDescriptionInput = event => {
    this.setState({
      description: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.url !== "") {
      this.setState({ timeAndDate: Date.now() });
      this.props.onClickAway(
        this.state.url,
        this.state.linkName,
        this.state.description,
        this.state.timeAndDate
      );

      this.setState({ url: "", linkName: "", description: "" });
    }
  };

  onCancel = event => {
    event.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <form onSubmit={this.onFormSubmit}>
            <h2>New Link</h2>
            <div />
            <input
              value={this.state.url}
              type="text"
              placeholder="URL"
              onChange={this.onURLInput}
              id="link-input"
            />
            <div />
            <input
              value={this.state.linkName}
              type="text"
              placeholder="Link Name"
              onChange={this.onLinkNameInput}
              id="link-name-input"
            />
            <div />
            <textarea
              value={this.state.description}
              rows="2"
              placeholder="Description"
              onChange={this.onDescriptionInput}
              id="link-description-input"
            />
            <div />
            <button class="ui button" type="submit">
              Add Link
            </button>
            <button class="ui button" onClick={this.onCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupForm;
