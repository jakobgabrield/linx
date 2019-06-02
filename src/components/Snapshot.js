import React from "react";

const Snapshot = props => {
  const baseURL = "//image.thum.io/get/width/290/crop/600/";
  const url = props.link;

  return (
    <div className="Snapshot">
      <a href={url}>
        <div className="ui card">
          <img alt="Some Image" src={baseURL + url} />
          <div className="content">
            <div className="header">{props.linkName}</div>
            <div className="description">{props.linkDescription}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Snapshot;
