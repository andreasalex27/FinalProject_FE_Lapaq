import React from "react";

function ButtonSubmitHomepage({name}) {
  
  const styleButton = {
    borderColor: "#DDDD",
    backgroundColor: "#B31312",
    color: "white",
    fontWeight: "500",
  };

  return (
    <div>
      <button type="button" className="btn btn-sm" style={styleButton}>
        {name}
      </button>
    </div>
  );
}

export default ButtonSubmitHomepage;
