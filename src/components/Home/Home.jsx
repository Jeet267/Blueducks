import React from 'react'
// import './Home.css'
const Home = () => {
    let style7 ={
        "width":"100%",
        "height":"70px",
        "background-color": "#1E3932"
        
    }
    let style8 ={
        "display":"flex",
        "color":"white",
        "justifyContent":"space-between",
    }
    let style9 ={
        "padding-left":"70px"

    }

    let style10 ={
        "padding-right":"70px",
        // "width": "60px",

    }
    const style11 = {
        margin: "95px",
        // paddingLeft: "0px", // Uncomment if needed
        width: "80%",
        height: "400%",
        backgroundColor: "#f5b042",
        display: "flex",  // Ensures flex properties work
        justifyContent: "center",
        alignItems: "center",
      };
      
  return (
    <div className='part-one' style={style7}>
        <div className='part-two' style={style8}>
            <h3 style={style9}>Starbucks</h3>
            <h4 style={style10}>Know more</h4>
        </div>

        <div className='part-three'style={style11} >
            <div>

            </div>
            




        </div>

      
    </div>
  )
}

export default Home
