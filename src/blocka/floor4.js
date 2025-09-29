import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb4() {
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
      <h2 style={h2Style}>Welcome to Build A- Floor 4</h2>
      <h3 style={h3Style}> Internal Audit </h3>
      <ul style={listStyle}>ours Servise for thise floor
        <h3/>
        <li>1.Audit</li>
        <li>2.Check Auditfainancial</li>
        
        
      </ul>
<h1>Representative Person </h1>
    </div>
  );
}

export default Floorb4;
