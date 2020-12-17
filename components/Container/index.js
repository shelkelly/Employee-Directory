import React from "react";

function Container(props) {
  return <div>
      <div className="container" style={props.style}>{props.children}</div>
    </div>
}

export default Container;