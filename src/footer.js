import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#1064f6ff",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "2px solid #ddd",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Column 1 */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#ffbe0bff" }}>
            Where do you want to go?
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/" style={linkStyle}>Welcome</Link></li>
            <li><Link to="/buildA" style={linkStyle}>Build A</Link></li>
            <li><Link to="/buildB" style={linkStyle}>Build B</Link></li>
            <li><Link to="/buildC" style={linkStyle}>Build C</Link></li>
            <li><Link to="/buildD" style={linkStyle}>Build D</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#ffbe0bff" }}>Our Service Found</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/buildB/floorb4" style={linkStyle}>Tin Number Integration</Link></li>
            <li><Link to="/buildA/floor1" style={linkStyle}>Tin Number Registration</Link></li>
            <li><Link to="/buildC/floorc3" style={linkStyle}>Cash Regster Machine</Link></li>
            <li><Link to="/buildD/floord4" style={linkStyle}>Human Resource Manag</Link></li>
             <li><Link to="/buildB/floorb4" style={linkStyle}>information Technology</Link></li>
             <li><Link to="/buildB/floorb5" style={linkStyle}>Singl Window
             </Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 style={{ marginBottom: "10px", color: "#ffbe0bff" }}>Social Media</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="https://www.mor.gov.et/" target="_blank" rel="noreferrer" style={linkStyle}>MOR Website</a></li>
            <li><a href="https://web.facebook.com/ERCA.info/?_rdc=1&_rdr#" target="_blank" rel="noreferrer" style={linkStyle}>Facebook</a></li>
            <li><a href="https://www.youtube.com/channel/UCMGCbD_gmRXYL_ojkX4cGXA" target="_blank" rel="noreferrer" style={linkStyle}>YouTube</a></li>
            <li><a href="https://t.me/MoREthiopiaOfficial" target="_blank" rel="noreferrer" style={linkStyle}>Telegram</a></li>
          </ul>
        </div>
      </div>

      <p style={{ marginTop: "30px", fontSize: "14px", color: "#fff" }}>
        © {new Date().getFullYear()} Ministry of Revenue. All Rights Reserved.
      </p>
    </footer>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  display: "block",
  margin: "6px 0",
  transition: "color 0.3s ease",
};

// Hover effect with CSS
const style = document.createElement("style");
style.textContent = `
  footer a:hover {
    color: #ffbe0b !important;
  }
`;
document.head.appendChild(style);

export default Footer;
