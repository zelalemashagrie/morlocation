import React from "react";
import minstImage from "../assets/minst.png";
import doorImage from "../assets/door.png";
import mtrImage from "../assets/mtr.png";

function Floorb6() {
  // Styles as objects
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const h2Style = {
    color: "#333",
    marginBottom: "5px"
  };


  const pStyle = {
    color: "#666",
    marginBottom: "15px"
  };

  const listStyle = {
    textAlign: "left",
    display: "inline-block",
    marginBottom: "30px"
  };

  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  };

  const galleryItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
    marginBottom: "8px"
  };

  const captionStyle = {
    fontWeight: "bold",
    color: "#333"
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>Welcome to Build A- Floor 6</h2>
      <p style={pStyle}>Minister office</p>

      <ul style={listStyle}>
        <li>Minister office</li>
        <li>minister</li>
        <li>ministry of revenues minister office</li>
        
      </ul>
<h1>Ministry Of Minister</h1>
      {/* Gallery */}
      <div style={galleryStyle}>
        <div style={galleryItemStyle}>
          <img src={mtrImage} alt="mtr" style={imgStyle} />
          <p style={captionStyle}>Minister Aynalem</p>
        </div>
        <div style={galleryItemStyle}>
          <img src={doorImage} alt="door" style={imgStyle} />
          <p style={captionStyle}>MOR img</p>
        </div>
        <div style={galleryItemStyle}>
          <img src={minstImage} alt="minst" style={imgStyle} />
          <p style={captionStyle}>Minister Aynalem</p>
        </div>
      </div>
    </div>
  );
}

export default Floorb6;
