import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb1() {
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
      <h2 style={h2Style}>Welcome to Build B - Floor 2</h2>
      <h3 style={h3Style}>Record and store </h3>
   

      <ul style={listStyle}><h3>our services</h3>
        <li>1.Record Room </li>
        <li>2.store</li>
        <li>3.external letter</li>
        <li>4.internal letter</li>
      </ul>
<h1>Name of Directors</h1>
      {/* Gallery */}
      {/* <div style={galleryStyle}>
        <div style={galleryItemStyle}>
          <img src={zdImage} alt="ZD" style={imgStyle} />
          <p style={captionStyle}>Dawit Tamene</p>
        </div>
        <div style={galleryItemStyle}>
          <img src={zddImage} alt="ZDD" style={imgStyle} />
          <p style={captionStyle}>Kllu Tamene</p>
           
        </div>
        <div style={galleryItemStyle}>
          <img src={morImage} alt="MOR" style={imgStyle} />
          <p style={captionStyle}>Kuratu Lemma</p>
        </div>
      </div> */}
    </div>
  );
}

export default Floorb1;
