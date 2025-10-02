import React from "react";

function Floorb0() {
  // Container styles
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg,#f9fcff,#eef7fb)",
    borderRadius: "12px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    maxWidth: "900px",
    margin: "20px auto",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0b3556",
    marginBottom: "10px",
  };

  const subTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "20px",
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0b3556",
    marginTop: "30px",
    marginBottom: "16px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "0 auto 40px",
    maxWidth: "400px",
    textAlign: "left",
  };

  const listItemStyle = {
    background: "#fff",
    padding: "12px 16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#0b3556",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome To Build B - Ground Floor</h2>
      <h3 style={subTitleStyle}>Store & Day Care</h3>

      <h2 style={sectionTitle}>Our Services</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>🏬 Store Room</li>
        <li style={listItemStyle}>👶 Day Care Room</li>
      </ul>

      <h2 style={sectionTitle}>Directors</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Director 1</li>
        <li style={listItemStyle}>Director 2</li>
      </ul>
    </div>
  );
}

export default Floorb0;
