import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
//import NewLinkForm from "./NewLinkForm";
import PopupForm from "./PopupForm";
import fire from "../config/Fire";

class Home extends React.Component {
  constructor() {
    super();
    this.db = fire.database();
    this.ref = this.db.ref("links");
  }

  state = { visible: false };

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  newLinkCreated = (url, linkName, description) => {
    const newLinkInfo = {
      url: url,
      linkName: linkName,
      description: description
    };

    this.ref.push(newLinkInfo);
    this.closeModal();
  };

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui raised very padded segment">
          <Header title="LINX" />
          <Sidebar />
          <section>
            <button className="ui button" onClick={this.openModal}>
              <h3>+</h3>
            </button>
            <button className="ui button" onClick={this.logout}>
              Logout
            </button>
            {this.state.visible ? (
              <PopupForm
                visible={this.state.visible}
                onClickAway={this.newLinkCreated}
                onCancel={this.closeModal}
              />
            ) : null}
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
