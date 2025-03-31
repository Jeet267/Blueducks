import React from "react";
import "./Navbar.css";
const Navbar = () => {
  let style1 = {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
  };
  let style2 = {
    display: "flex",

    padding: "7px",
    gap: "30px",
  };
  // let style3 = {
  //   width: "150px",
  //   height: "20px",
  //   border: "2px solid black",
  //   padding: "7px",
  //   borderRadius: "10px",
  // };

  let style4 = {
    display: "flex",
    padding: "7px",
    alignItems: "space-between",
    justifyContent:"center",
    border:"none"

  };

  // let style5 = {
  //   display: "flex",
  //   padding: "7px",
  //   alignItems: "space-between",
  //   justifyContent: "space-between",
  // };

  return (
    <div className="main" style={style1}>
      <div className="icon-one" style={style2}>
        <img src="https://www.starbucks.in/assets/icon/logo.png" />
        <p>Home</p>
        <p>Gift</p>
        <p>Order</p>
        <p>Pay</p>
        <p>Store</p>
      </div>
      <div className="last-one" style={style4}>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />

            <img
              src="https://www.starbucks.in/assets/icon/search.svg"
              alt="Search"
            />

        </div>

        <div className="admin-logo">
          <img
            src="https://www.starbucks.in/assets/icon/account_thin.svg"
            alt="Admin"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
