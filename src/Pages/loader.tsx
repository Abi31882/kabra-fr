import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "250px",
      }}
    >
      <ReactLoading color="black" height="screen" type="spin" />
    </div>
  );
};

export default Loader;
