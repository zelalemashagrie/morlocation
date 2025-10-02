import React from "react";

function Floorb1() {
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
    transition: "transform 0.2s ease",
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#0b3556",
  };

  const repListStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const repItemStyle = {
    background: "#fff",
    padding: "14px 20px",
    borderRadius: "8px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
    fontWeight: "600",
    color: "#333",
    minWidth: "180px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Build A – Floor 1</h2>
      <p style={descStyle}>
        This floor provides key public services, including{" "}
        <strong>Government Offices</strong> and{" "}
        <strong>TIN Registration</strong>, ensuring efficient and reliable
        support for citizens.
      </p>
 {/* Services */}
      <h3 style={sectionTitle}>Our Services</h3>
      {/* Features */}
      <ul style={listStyle}>
        <li style={listItemStyle}>🏛 Government Office</li>
        <li style={listItemStyle}>🧾 TIN Registration</li>
      </ul>

      {/* Representatives */}
      <h3 style={sectionTitle}>Representative Persons</h3>
      <div style={repListStyle}>
        <div style={repItemStyle}>👤 Office Head</div>
        <div style={repItemStyle}>👤 TIN Manager</div>
      </div>
    </div>
  );
}

export default Floorb1;
