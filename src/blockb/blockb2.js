import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb2() {
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1000px",
    margin: "20px auto",
    background: "linear-gradient(180deg,#f9fcff,#eef7fb)",
    borderRadius: "12px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1064f6",
    marginBottom: "15px",
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0b3556",
    marginTop: "30px",
    marginBottom: "16px",
  };

  const cardStyle = {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "2px solid #1064f6",
    background: "#eaf2ff",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    maxWidth: "500px",
    margin: "0 auto 30px",
    textAlign: "left",
  };

  const listItemStyle = {
    background: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px dashed #1064f6",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#0b3556",
  };

  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  };

  const captionStyle = {
    marginTop: "8px",
    fontWeight: "600",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to Build B - Floor 2</h2>

      <div style={cardStyle}>
        ኢ-ዳታ ዘርፍ አስተዳደር ሚኒስቴር ዴኤታ <br />
        e-Data Sector
      </div>

      <div style={cardStyle}>
        የመረጃ ቴክኖሎጅ ማዕከል <br />
        Information Technology Center
      </div>

      <h2 style={sectionTitle}>Directors & Teams</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        <div>
          <div style={cardStyle}>
            የመረጃ ቴክኖሎጅ ልማትና አስተዳደር ዳ/ት <br />
            Director of IT Development & Management
          </div>
          <ul style={listStyle}>
            {["Database Team", "Business Team", "Application Team", "Software Team"].map(team => (
              <li key={team} style={listItemStyle}>{team}</li>
            ))}
          </ul>
        </div>

        <div>
          <div style={cardStyle}>
            የመረጃ ቴክኖሎጅ መሰረተ ልማትና አስተዳደር ዳ/ት <br />
            Director of IT Basic & Operations
          </div>
          <ul style={listStyle}>
            {["Security Team", "Network Team", "Data Center Team", "IT Support Team"].map(team => (
              <li key={team} style={listItemStyle}>{team}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 style={sectionTitle}>Our Services</h2>
      <ul style={listStyle}>
        {[
          "API Integration",
          "TIN Number integration with National ID",
          "E-Invoice System Test",
          "Website Developer",
          "Mobile App Developer",
        ].map(service => (
          <li key={service} style={listItemStyle}>{service}</li>
        ))}
      </ul>

      <h2 style={sectionTitle}>Representative Persons</h2>
      <div style={galleryStyle}>
        {[{ img: zdImage, name: "Dawit Wibeshet" },
          { img: zddImage, name: "Kililu Tamene" },
          { img: morImage, name: "Kuratu Lemma" }].map(person => (
          <div key={person.name} style={{ textAlign: "center" }}>
            <img src={person.img} alt={person.name} style={imgStyle} />
            <p style={captionStyle}>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Floorb2;
