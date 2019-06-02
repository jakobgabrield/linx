import React from "react";
import Snapshot from "./Snapshot";
import fire from "../config/Fire";

class LinkList extends React.Component {
  constructor() {
    super();
    this.db = fire.database();
    this.ref = this.db.ref("links");
  }

  state = { links: [] };

  componentDidMount() {
    this.ref.on("value", snapshot => {
      const links = this.snapshotToArray(snapshot.val());
      this.setState({ links: links });
    });
  }

  snapshotToArray = snapshot => {
    var returnArr = [];

    for (let index in snapshot) {
      const element = snapshot[index];
      returnArr.push(element);
    }

    return returnArr;
  };

  createLink(link) {
    return (
      <Snapshot
        link={link.url}
        linkName={link.linkName}
        linkDescription={link.description}
      />
    );
  }

  render() {
    const linkList = this.state.links.map(this.createLink);

    return (
      <div className="twelve wide stretched column LinkList">{linkList}</div>
    );
  }
}

export default LinkList;
