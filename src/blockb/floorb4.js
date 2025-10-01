import React from "react";
import { FaDatabase, FaProjectDiagram, FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb4() {
  // Styles
  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px", // more space between images
    marginTop: "20px",
    flexWrap: "wrap",
  };

  const imgStyle = {
    width: "220px",
    height: "220px",
    objectFit: "contain",
    borderRadius: "10px",
    backgroundColor: "#f4f7fb",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  const imgContainer = {
    padding: "10px", // add spacing around each image
    textAlign: "center",
  };

  const captionStyle = {
    marginTop: "12px",
    fontWeight: "bold",
    color: "#333",
  };

  const section = {
    margin: "50px 0",
    textAlign: "center",
  };

  // Card
  const serviceCard = {
    padding: "15px 20px",
    borderRadius: "10px",
    background: "#eaf2ff",
    border: "1px solid #1064f6",
    color: "#1064f6",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  };

  const teamCard = {
    ...serviceCard,
    background: "#f5f5f5",
    border: "1px solid #aaa",
    color: "#333",
  };

  const iconStyle = { fontSize: "28px", marginBottom: "8px", display: "block" };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <h1>🏢 Build B - Floor 4</h1>
        <p>e-Data Sector • Information Technology Center</p>
      </div>

      {/* Top Node */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <div
          style={{
            padding: "10px 20px",
            border: "2px solid #1064f6",
            borderRadius: "6px",
            fontWeight: "bold",
            background: "#eaf2ff",
            marginBottom: "15px",
            display: "inline-block",
          }}
        >
          ኢ-ዳታ ዘርፍ አስተዳደር ሚኒስቴር ዴኤታ <br />
          e-Data Sector
        </div>

        <div
          style={{
            padding: "10px 20px",
            border: "2px solid #1064f6",
            borderRadius: "6px",
            fontWeight: "bold",
            background: "#eaf2ff",
            display: "inline-block",
          }}
        >
          የመረጃ ቴክኖሎጅ ማዕከል <br />
          Information Technology Center
        </div>

         <div
          style={{
            padding: "10px 20px",
            border: "2px solid #1064f6",
            borderRadius: "6px",
            fontWeight: "bold",
            background: "#eaf2ff",
            display: "inline-block",
          }}
        >
          የመረጃ ቴክኖሎጅ ልማትና አስተዳደር ዳ/ት <br />
        Information Technology Development 
        </div>
      </div>

      

      {/* Teams */}
      <div style={section}>
        <h2 style={{ color: "#1064f6" }}>Our Teams</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
          <div style={{ ...teamCard, width: "100%", maxWidth: "500px" }}>Database Team</div>
          <div style={{ ...teamCard, width: "100%", maxWidth: "500px" }}>Business Team</div>
          <div style={{ ...teamCard, width: "100%", maxWidth: "500px" }}>Application Team</div>
          <div style={{ ...teamCard, width: "100%", maxWidth: "500px" }}>Software Team</div>
        </div>
      </div>
{/* Services */}
      <div style={section}>
        <h2 style={{ color: "#1064f6" }}>Our Services</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
          <div style={{ ...serviceCard, width: "100%", maxWidth: "500px" }}>
            <FaProjectDiagram style={iconStyle} />
            API Integration
          </div>
          <div style={{ ...serviceCard, width: "100%", maxWidth: "500px" }}>
            <FaDatabase style={iconStyle} />
            TIN & National ID Integration
          </div>
          <div style={{ ...serviceCard, width: "100%", maxWidth: "500px" }}>
            <FaLaptopCode style={iconStyle} />
            E-Invoice System Test
          </div>
          <div style={{ ...serviceCard, width: "100%", maxWidth: "500px" }}>
            <FaCode style={iconStyle} />
            Website Development
          </div>
          <div style={{ ...serviceCard, width: "100%", maxWidth: "500px" }}>
            <FaMobileAlt style={iconStyle} />
            Mobile App Development
          </div>
        </div>
      </div>
      {/* Representative persons */}
      <div style={section}>
        <h2 style={{ color: "#1064f6" }}>Representative Persons</h2>
        <div style={galleryStyle}>
          <div style={imgContainer}>
            <img src={zdImage} alt="ZD" style={imgStyle} />
            <p style={captionStyle}>
              ኢ-ዳታ ዘርፍ አስተዳደር ሚኒስቴር ዴኤታ <br />
              Dawit Wibeshet
            </p>
          </div>
          <div style={imgContainer}>
            <img src={zddImage} alt="ZDD" style={imgStyle} />
            <p style={captionStyle}>
              የመረጃ ቴክኖሎጅ ማዕከል አስተዳደር ዳ/ት <br />
              Kililu Tamene
            </p>
          </div>
          <div style={imgContainer}>
            <img src={morImage} alt="MOR" style={imgStyle} />
            <p style={captionStyle}>
              የመረጃ ቴክኖሎጅ ልማትና አስተዳደር ዳ/ት <br />
              Kuratu Lemma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floorb4;
