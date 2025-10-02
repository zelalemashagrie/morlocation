import React from "react";
import { FaDatabase, FaProjectDiagram, FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb4() {
  const container = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1000px",
    margin: "20px auto",
    background: "#f4f7fb",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const title = { fontSize: "28px", fontWeight: "700", color: "#1064f6", marginBottom: "10px" };
  const subtitle = { fontSize: "18px", fontWeight: "500", color: "#333", marginBottom: "25px" };
  const sectionTitle = { fontSize: "22px", fontWeight: "700", color: "#0b3556", marginTop: "30px", marginBottom: "20px" };

  const card = {
    padding: "15px 20px",
    borderRadius: "10px",
    background: "#eaf2ff",
    border: "1px solid #1064f6",
    fontWeight: "bold",
    color: "#1064f6",
    textAlign: "center",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  };

  const teamCard = { ...card, background: "#f5f5f5", border: "1px solid #aaa", color: "#333" };
  const iconStyle = { fontSize: "28px", marginBottom: "8px" };

  const galleryStyle = { display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginTop: "30px" };
  const imgContainer = { textAlign: "center" };
  const imgStyle = { width: "220px", height: "220px", objectFit: "contain", borderRadius: "10px", backgroundColor: "#f4f7fb", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" };
  const captionStyle = { marginTop: "12px", fontWeight: "bold", color: "#333" };

  // const teams = ["Database Team", "Business Team", "Application Team", "Software Team"];
  const services = [
    { icon: <FaProjectDiagram style={iconStyle} />, name: "API Integration" },
    { icon: <FaDatabase style={iconStyle} />, name: "TIN & National ID Integration" },
    { icon: <FaLaptopCode style={iconStyle} />, name: "E-Invoice System Test" },
    { icon: <FaCode style={iconStyle} />, name: "Website Development" },
    { icon: <FaMobileAlt style={iconStyle} />, name: "Mobile App Development" },
  ];

  const representatives = [
    { img: zdImage, name: "Dawit Wibeshet", role: "e-Data Sector" },
    { img: zddImage, name: "Kililu Tamene", role: "Information Technology Center" },
    { img: morImage, name: "Kuratu Lemma", role: "IT Development & Management" },
  ];

  return (
    <div style={container}>
      <h1 style={title}>🏢 Build B - Floor 4</h1>
      <p style={subtitle}>e-Data Sector • Information Technology Center • IT Development & Management</p>

      {/* <h2 style={sectionTitle}>Our Teams</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
        {teams.map(team => (
          <div key={team} style={{ ...teamCard, width: "100%", maxWidth: "500px" }}>{team}</div>
        ))}
      </div> */}

      <h2 style={sectionTitle}>Our Services</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
        {services.map(service => (
          <div key={service.name} style={{ ...card, width: "100%", maxWidth: "500px" }}>
            {service.icon} {service.name}
          </div>
        ))}
      </div>

      <h2 style={sectionTitle}>Representative Persons</h2>
      <div style={galleryStyle}>
        {representatives.map(rep => (
          <div key={rep.name} style={imgContainer}>
            <img src={rep.img} alt={rep.name} style={imgStyle} />
            <p style={captionStyle}>{rep.role} <br /> {rep.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Floorb4;
