import React from "react";

function Floorb6() {
  // Styles
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

  const descStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "16px",
    maxWidth: "600px",
  };

  const listItemStyle = {
    background: "#fff",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    fontWeight: "600",
    color: "#0b3556",
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#0b3556",
  };

  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const galleryItemStyle = {
    width: "200px",
    textAlign: "center",
    background: "#fff",
    padding: "14px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  };

  const captionStyle = {
    fontWeight: "600",
    color: "#0b3556",
    marginTop: "8px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Build A – Floor 6</h2>
      <p style={descStyle}>
        This floor is dedicated to the <strong>Minister's Office</strong> and key advisory staff, ensuring executive operations.
      </p>

      {/* Services / Office Features */}
      <h3 style={sectionTitle}>Office Features</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>🏛 Minister Office</li>
        <li style={listItemStyle}>👤 Minister & Advisors</li>
        <li style={listItemStyle}>📂 Ministry of Revenue Executive Office</li>
      </ul>

      {/* Representatives / Gallery */}
      <h3 style={sectionTitle}>Representative Persons</h3>
      <div style={galleryStyle}>
        <div style={galleryItemStyle}>
          <p style={captionStyle}>Minister Aynalem</p>
        </div>
        <div style={galleryItemStyle}>
          <p style={captionStyle}>Executive Office</p>
        </div>
        <div style={galleryItemStyle}>
          <p style={captionStyle}>Senior Advisor</p>
        </div>
      </div>
    </div>
  );
}

export default Floorb6;
