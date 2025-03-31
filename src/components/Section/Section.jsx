import React from "react";

const Section = () => {
  const m = {
    backgroundColor: "#EDEBE9",
    'height':'25rem'
  };
  const head = {
    display: "flex",
    gap: "2rem",
    "justify-content": "space-between",
  };
  let bar = {
    "padding-left": "10rem",
  };
  let view = {
    "padding-right": "2rem",
  };
  let sec = {
    width: "27rem",
    height:'14rem',
    "background-color": "white",
    // "padding-left":"10rem",
    "margin-left": "5rem",
  };
  let im ={
    "width":"5rem",
    "height":"5rem",
    "padding":"2rem"
  }
  return (
    <div className="main" style={m}>
      <div className="heading" style={head}>
        <div>
          <h2 style={bar}>Barista Recommends</h2>
        </div>
        <div>
          <p style={view}>View Menu </p>
        </div>
      </div>
      <div className="second" style={sec}>
        <div>
            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp" style={im}/>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Section;
