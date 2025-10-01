import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb5() {
  const container = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f7fb",
    minHeight: "100vh",
  };

  const header = {
    textAlign: "center",
    background: "hsla(191, 57%, 95%, 1.00)",
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
    objectFit: "contain", // ensures full image visible
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
        <h1>🏢 Build B - Floor 5</h1>
        <h1> እንኳን በደህና መጡ ወደ መረጃ ቴክኖሎጅ መሠረተ ልማት አስተዳደር ዳ/ት</h1>
      </div>

      {/* Services */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "15px" }}>Our Services</h2>
        <div style={serviceList}>
  <div style={serviceItem}>Internal employer IT support</div>
  <div style={serviceItem}>Printer connect to desktop</div>
  <div style={serviceItem}>Internet connect on desktop</div>
  <div style={serviceItem}>Give internet connection</div>
  <div style={serviceItem}>Evaluating PC desktop</div>
</div>

      </div>

      {/* Representative Persons */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "0px" }}>
          Representative Persons
        </h2>
        <div style={gallery}>
          <div style={{ textAlign: "center" }}>
            <img src={zdImage} alt="ZD" style={imgStyle} />
            <p style={caption}>
              ኢ-ዳታ ዘርፍ አስተዳደር <br /> Dawit Wibeshet
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={zddImage} alt="ZDD" style={imgStyle} />
            <p style={caption}>
              ቴክኖሎጅ ማዕከል አስተዳደር <br /> Kililu Tamene
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={morImage} alt="MOR" style={imgStyle} />
            <p style={caption}>
              ቴክኖሎጅ ልማትና አስተዳደር <br /> Kuratu Lemma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floorb5;
