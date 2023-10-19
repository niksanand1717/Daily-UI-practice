import React from "react";

const Square = (props) => {
  let color = "blue";
  if (props.value === "X") {
    color = "red";
  }

  return (
    <div
      onClick={props.onClick}
      style={{
        fontWeight: "800",
        border: "1px solid green",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: color,
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
