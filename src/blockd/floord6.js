import React from "react";
import hallmage from "../assets/halld.png";
import halldImage from "../assets/halldd.png";
import halld6Image from "../assets/halld6.png";

function Floord6() {
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

  const h3Style = {
    color: "#555",
    marginBottom: "15px"
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
      <h2 style={h2Style}>Build d - Floor 6</h2>
      <h3 style={h3Style}>Meeting Hall</h3>
  

      <ul style={listStyle}>
        <li>Meeting</li>
        <li>Hall</li>
        
      </ul>
<h1>Meeting Hall Img</h1>
      {/* Gallery */}
      <div style={galleryStyle}>
        <div style={galleryItemStyle}>
          <img src={hallmage} alt="ZD" style={imgStyle} />
          <p style={captionStyle}>Meeting Hall</p>
        </div>
        <div style={galleryItemStyle}>
          <img src={halldImage} alt="ZDD" style={imgStyle} />
          <p style={captionStyle}>Meeting Hall</p>
        </div>
        <div style={galleryItemStyle}>
          <img src={halld6Image} alt="MOR" style={imgStyle} />
          <p style={captionStyle}>Meeting Hall</p>
        </div>
      </div>
    </div>
  );
}

export default Floord6;
