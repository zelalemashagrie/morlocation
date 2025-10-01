import React from "react";
import zdImage from "../assets/zd.png";
import zddImage from "../assets/zdd.png";
import morImage from "../assets/mor.png";

function Floorb2() {
  // Gallery styles
  const galleryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  };

  const galleryItemStyle = {
    textAlign: "center",
  };

  // ✅ Equal height and width for all 3 images
  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  const captionStyle = {
    marginTop: "8px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <h2 style={{ textAlign: "center", color: "#1064f6" }}>
        Welcome to Build B - Floor 2
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          {/* Top Node */}
          <div
            style={{
              padding: "10px 20px",
              border: "2px solid #1064f6",
              borderRadius: "6px",
              fontWeight: "bold",
              background: "#eaf2ff",
              marginBottom: "20px",
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
              marginBottom: "30px",
            }}
          >
              የመረጃ ቴክኖሎጅ ማዕከል<br />
            Information Technology Center
          </div>

          {/* Directors */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* Administrator Director */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "10px 15px",
                  border: "2px solid #333",
                  borderRadius: "6px",
                  background: "#f9f9f9",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                የመረጃ ቴክኖሎጅ  ልማትና አስተዳደር ዳ/ት<br />
               Director of Information Technology Development and Management
              </div>

              {/* Teams */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {["Database Team", "Business Team", "Application Team", "Software Team"].map(
                  (team) => (
                    <div
                      key={team}
                      style={{
                        padding: "8px 12px",
                        border: "1px dashed #1064f6",
                        borderRadius: "6px",
                        background: "#fff",
                      }}
                    >
                      {team}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Basic Development Director */}
             {/* Administrator Director */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "10px 15px",
                  border: "2px solid #333",
                  borderRadius: "6px",
                  background: "#f9f9f9",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                የመረጃ ቴክኖሎጅ መሰረተ ልማትና አስተዳደር ዳ/ት<br />
               Director of Information Basic
              </div>
             
             

             
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {["Security Team", "Network Team", "Data Center Team", "IT Support Team"].map(
                  (team) => (
                    <div
                      key={team}
                      style={{
                        padding: "8px 12px",
                        border: "1px dashed #1064f6",
                        borderRadius: "6px",
                        background: "#fff",
                      }}
                    >
                      {team}
                    </div>
                    
                  )
                )}
                
              </div>
            </div>
          </div>
          


           <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "10px 15px",
                  border: "2px solid #333",
                  borderRadius: "6px",
                  background: "#f9f9f9",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
               <h3> የምንሰጣችዉ  አገልግሎቶች ህንጻ ለ 5ተኛ </h3>
                  API Integration <br/>
                  TIN Number integration with National ID<br/>
                  e-envoice System Test<br/>
                  Wibsite Developer<br/>
                  Mobile APP Developer
              </div>
               </div>
               {/* Administrator Director */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "10px 15px",
                  border: "2px solid #333",
                  borderRadius: "6px",
                  background: "#e2d3d3ff",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
               <h3> Our services On Build B Floor4   </h3>
          
              </div>
        <ul style={{ listStyleType: "none",backgroundColor:"#aeb7c7ff", padding: 0, marginTop: "20px", textAlign: "center" }}>
  <li style={{ fontWeight: "bold", color: "#1064f6", margin: "10px 0" }}>API Integration</li>
  <li style={{ fontWeight: "bold", color: "#1064f6", margin: "10px 0" }}>
    TIN Number integration with National ID
  </li>
  <li style={{ fontWeight: "bold", color: "#1064f6", margin: "10px 0" }}>E-Invoice System Test</li>
  <li style={{ fontWeight: "bold", color: "#1064f6", margin: "10px 0" }}>Website Developer</li>
  <li style={{ fontWeight: "bold", color: "#1064f6", margin: "10px 0" }}>Mobile App Developer</li>
</ul>

              {/* Teams */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {["API Integration", "TIN Number integration with National ID", "e-envoice System Test", "Wibsite Developer", "Mobile APP Developer"].map(
                  (team) => (
                    <div
                      key={team}
                      style={{
                        padding: "8px 12px",
                        border: "1px dashed #1064f6",
                        borderRadius: "6px",
                        background: "#fff",
                      }}
                    >
                      {team}
                    </div>
                  )
                )}
              </div>
            </div>
          {/* Representative persons */}
          <h2 style={{ marginTop: "90px", color: "#1064f6" }}>
            Representative Persons
          </h2>
          <div style={galleryStyle}>
            <div style={galleryItemStyle}>
              <img src={zdImage} alt="ZD" style={imgStyle} />
              <p style={captionStyle}>Dawit Wibeshet</p>
            </div>
            <div style={galleryItemStyle}>
              <img src={zddImage} alt="ZDD" style={imgStyle} />
              <p style={captionStyle}>Kililu Tamene</p>
            </div>
            <div style={galleryItemStyle}>
              <img src={morImage} alt="MOR" style={imgStyle} />
              <p style={captionStyle}>Kuratu Lemma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floorb2;
