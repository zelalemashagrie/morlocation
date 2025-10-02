import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb0() {
  // Inline styles
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg,#f9fcff,#eef7fb)",
    borderRadius: "12px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    maxWidth: "1000px",
    margin: "20px auto",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0b3556",
    marginBottom: "10px"
  };

  const subTitleStyle = {
    fontSize: "20px",
    fontWeight: "500",
    color: "#444",
    marginBottom: "20px"
  };

  const descStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px"
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "16px",
    maxWidth: "600px"
  };

  const listItemStyle = {
    background: "#fff",
    padding: "14px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    fontWeight: "600",
    color: "#0b3556"
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#0b3556"
  };

  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  };

  const galleryItemStyle = {
    width: "200px",
    textAlign: "center"
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    marginBottom: "10px"
  };

  const captionStyle = {
    fontWeight: "600",
    color: "#333"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Build B – Ground Floor</h2>
      <h3 style={subTitleStyle}>Welcome to the Ministry Office</h3>
      <p style={descStyle}>
        This floor hosts the main Call Center and the Central Data Center, 
        ensuring smooth communication and secure data management.
      </p>
 {/* Services */}
      <h3 style={sectionTitle}>Our Services</h3>
      {/* Feature List */}
      <ul style={listStyle}>
        <li style={listItemStyle}>📞 Call Center</li>
        <li style={listItemStyle}>💾 Data Center</li>
        <li style={listItemStyle}>🏢 Visitor Reception</li>
      </ul>

    
      <h3 style={sectionTitle}>Representative Persons</h3>
      {/* <div style={galleryStyle}>
        <div style={galleryItemStyle}>
          <img src={zdImage} alt="Rep 1" style={imgStyle} />
          <div style={captionStyle}>Zelalem A.</div>
        </div>
        <div style={galleryItemStyle}>
          <img src={zddImage} alt="Rep 2" style={imgStyle} />
          <div style={captionStyle}>Daniel D.</div>
        </div>
        <div style={galleryItemStyle}>
          <img src={morImage} alt="Rep 3" style={imgStyle} />
          <div style={captionStyle}>MOR HQ</div>
        </div>
      </div> */}
    </div>
  );
}

export default Floorb0;
