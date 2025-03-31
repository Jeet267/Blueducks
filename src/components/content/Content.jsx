import React from "react";

let cuisine = {
  display: "flex",
};

let cuisimg = {
  'width': "10rem",
  'border-radius': "10rem",
};

let cuisdiv = {
  'margin-left': "4rem",
};

let cuisp = {
  'text-align': "center",
};

let h = {
  'margin-top': "3rem",
  'margin-left': "4rem",
};
let p ={
  'margin-top':"30rem"
}

const arr = [
  "Bestseller",
  "Drinks",
  "Food",
  "Merchandise",
  "Coffee At Home",
  "Ready to Eat",
];

const img = [
  "https://www.starbucks.in/assets/icon/Bestseller.webp",
  "https://www.starbucks.in/assets/icon/Drinks.webp",
  "https://www.starbucks.in/assets/icon/Food.webp",
  "https://www.starbucks.in/assets/icon/Merchandise.webp",
  "https://www.starbucks.in/assets/icon/CoffeeAtHome.webp",
  "https://www.starbucks.in/assets/icon/ReadyToEat.webp",
];

const Content = () => {
  return (
    <div className="p-10" style={p}>
      <h2 style={h}>Handcrafted Curations</h2>

      <div style={cuisine}>
        {/* {arr.map((item,i))} */}
        {arr.map((item, i) => (
          <div key={i} style={cuisdiv}>
            <img src={img[i]} alt={item} style={cuisimg} />
            <p style={cuisp}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
