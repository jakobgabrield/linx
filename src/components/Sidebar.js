import React from "react";
import LinkList from "./LinkList";

const Sidebar = props => {
  return (
    <div className="ui bottom attached segment pushable">
      <div className="body">
        <ul className="folders">
          <li className="folder-heading">My Folders</li>
          <li className="folder">General</li>
          <li className="folder">Folder 2</li>
          <li className="folder">Folder 3</li>
          <li className="folder">Folder 4</li>
          <li className="folder">New Folder</li>
        </ul>
      </div>
      <div className="pusher">
        <div className="ui basic segment">
          <LinkList />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
