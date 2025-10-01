import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb3() {
  const container = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f7fb",
    minHeight: "100vh",
  };

  const header = {
    textAlign: "center",
    background: "hsla(210, 57%, 95%, 1.00)",
    color: "#1810f8ff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "40px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const section = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  };

  const serviceList = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
    alignItems: "center",
  };

  const serviceItem = {
    background: "#eaf2ff",
    padding: "15px 20px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#1064f6",
    border: "1px solid #1064f6",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const gallery = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "contain",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#f4f7fb",
  };

  const caption = {
    marginTop: "12px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "16px",
  };

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h1>🏢 Build B - Floor 3</h1>
        <h2>Welcome to Information Technology Center And Ethiopian Constraction Corporation</h2>
      </div>

      {/* Services */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "15px" }}>Our Services for Software Team</h2>
        <div style={serviceList}>
          <div style={serviceItem}>Software Team </div>
          <div style={serviceItem}>Web Development</div>
          <div style={serviceItem}>System Development</div>
          <div style={serviceItem}>Mobile Application Development</div>
          <div style={serviceItem}>E-electronics Invoice Testing</div>
          <div style={serviceItem}>API Testing</div>
          <div style={serviceItem}>System Development & Support</div>
          <div style={serviceItem}>Project Participation</div>
        </div>
      </div>

      {/* Directors */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "0px" }}>Representative Persons</h2>
        <div style={gallery}>
          <div style={{ textAlign: "center" }}>
            <img src={zdImage} alt="ZD" style={imgStyle} />
            <p style={caption}>
              E-Data Management <br /> Dawit Wibshet
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={zddImage} alt="ZDD" style={imgStyle} />
            <p style={caption}>
              Technology Center Management <br /> Kililu Tamene
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={morImage} alt="MOR" style={imgStyle} />
            <p style={caption}>
              Technology Development & Administration <br /> Kuratu Lemma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floorb3;
