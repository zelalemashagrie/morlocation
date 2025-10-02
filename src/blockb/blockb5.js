import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb5() {
  const container = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f7fb",
    minHeight: "100vh",
  };

  const header = {
    textAlign: "center",
    background: "hsla(191, 57%, 95%, 1)",
    color: "#1064f6",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "40px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  };

  const section = {
    background: "#fff",
    padding: "25px 20px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  };

  const serviceList = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
    marginTop: "20px",
  };

  const serviceItem = {
    background: "#eaf2ff",
    padding: "15px 20px",
    borderRadius: "10px",
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

  const representatives = [
    { img: zdImage, name: "Dawit Wibeshet", role: "e-Data Sector" },
    { img: zddImage, name: "Kililu Tamene", role: "Information Technology Center" },
    { img: morImage, name: "Kuratu Lemma", role: "IT Development & Management" },
  ];

  const services = [
    "Internal employer IT support",
    "Printer connect to desktop",
    "Internet connect on desktop",
    "Give internet connection",
    "Evaluating PC desktop",
  ];

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h1>🏢 Build B - Floor 5</h1>
        <h2>እንኳን በደህና መጡ ወደ መረጃ ቴክኖሎጅ መሠረተ ልማት አስተዳደር ዳ/ት</h2>
      </div>

      {/* Services */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "15px" }}>Our Services</h2>
        <div style={serviceList}>
          {services.map((service) => (
            <div key={service} style={serviceItem}>{service}</div>
          ))}
        </div>
      </div>

      {/* Representatives */}
      <div style={section}>
        <h2 style={{ color: "#1064f6", marginBottom: "20px" }}>Representative Persons</h2>
        <div style={gallery}>
          {representatives.map((rep) => (
            <div key={rep.name} style={{ textAlign: "center" }}>
              <img src={rep.img} alt={rep.name} style={imgStyle} />
              <p style={caption}>
                {rep.role} <br /> {rep.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Floorb5;
