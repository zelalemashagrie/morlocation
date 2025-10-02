import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// LOGO img
import Footer from "./footer";
import Home from "./home";
import Mission from "./mission";
import morImage from "./assets/morr.png";  
// Block A
import Floor0 from "./blocka/floor0";
import Floor1 from "./blocka/floor1";
import Floor2 from "./blocka/floor2";
import Floor3 from "./blocka/floor3";
import Floor4 from "./blocka/floor4";
import Floor5 from "./blocka/floor5";
import Floor6 from "./blocka/floor6";
// Block B
import "./App.css";
import Floorb0 from "./blockb/floorb0";
import Floorb1 from "./blockb/floorb1";
import Floorb2 from "./blockb/blockb2";
import Floorb3 from "./blockb/blockb3";
import Floorb4 from "./blockb/floorb4";
import Floorb5 from "./blockb/blockb5";
import Floorb6 from "./blockb/blockb6";
// Block C
import Floorc0 from "./blockc/floorc0";
import Floorc1 from "./blockc/floorc1";
import Floorc2 from "./blockc/floorc2";
import Floorc3 from "./blockc/floorc3";
import Floorc4 from "./blockc/floorc4";
import Floorc5 from "./blockc/floorc5";
import Floorc6 from "./blockc/floorc6";
// Block D
import Floord0 from "./blockd/floord0";
import Floord1 from "./blockd/floord1";
import Floord2 from "./blockd/floord2";
import Floord3 from "./blockd/floord3";
import Floord4 from "./blockd/floord4";
import Floord5 from "./blockd/floord5";
import Floord6 from "./blockd/floord6";

function App() {
  const [openDropdownA, setOpenDropdownA] = useState(false);
  const [openDropdownB, setOpenDropdownB] = useState(false);
  const [openDropdownC, setOpenDropdownC] = useState(false);
  const [openDropdownD, setOpenDropdownD] = useState(false);

  return (
    <Router>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <h3> 
            <img src={morImage} alt="MOR Logo" />

 <h2 style={{ color: "#1091f3ff" }}>
          <button
            onClick={() => (window.location.href = "http://localhost:3001/")}
            style={{
              padding: "3px 50px",
              fontSize: "20px",
              margin: "10px",
              color: "#fff",
              backgroundColor: "#44b0f3ff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            <p>Welcome to MOR▼</p>
          </button>
          Welcome to Ministry Of Revenue Head Quarter Office
        </h2>

            <p>Work Time 🕒 Mon-Fri: 2:00 PM – 11:00 PM ---- 🕒 Sat: 2:00 PM – 6:00 PM</p>
          </h3>

            <h2 style={{color:"red"}}>Where do you want to go?</h2>
          <h1 style={{color:"red"}}>የት መሄድ ትፈልጋለህ?</h1>
        
          በግንባታ ላይ ያሉትን ሁሉንም ለማየት እባክዎን ጠቅ ያድርጉ?<br/>
          Please click to see all under build works.
        </div>

        {/* Navigation Menu */}
        <nav className="menu">

          {/* Build A */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdownA(true)}
            onMouseLeave={() => setOpenDropdownA(false)}
          >
            <Link to="#" className="menu-item">🏢BLOCK A▼</Link>
            {openDropdownA && (
              <div className="dropdown-content">
                <Link to="/buildA/floor0" onClick={() => setOpenDropdownA(false)}>Floor 0</Link>
                <Link to="/buildA/floor1" onClick={() => setOpenDropdownA(false)}>Floor 1</Link>
                <Link to="/buildA/floor2" onClick={() => setOpenDropdownA(false)}>Floor 2</Link>
                <Link to="/buildA/floor3" onClick={() => setOpenDropdownA(false)}>Floor 3</Link>
                <Link to="/buildA/floor4" onClick={() => setOpenDropdownA(false)}>Floor 4</Link>
                <Link to="/buildA/floor5" onClick={() => setOpenDropdownA(false)}>Floor 5</Link>
                <Link to="/buildA/floor6" onClick={() => setOpenDropdownA(false)}>Floor 6</Link>
              </div>
            )}
          </div>

          {/* Build B */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdownB(true)}
            onMouseLeave={() => setOpenDropdownB(false)}
          >
            <Link to="#" className="menu-item">🏢BLOCK B▼</Link>
            {openDropdownB && (
              <div className="dropdown-content">
                <Link to="/buildB/floorb0" onClick={() => setOpenDropdownB(false)}>Floor 0</Link>
                <Link to="/buildB/floorb1" onClick={() => setOpenDropdownB(false)}>Floor 1</Link>
                <Link to="/buildB/floorb2" onClick={() => setOpenDropdownB(false)}>Floor 2</Link>
                <Link to="/buildB/floorb3" onClick={() => setOpenDropdownB(false)}>Floor 3</Link>
                <Link to="/buildB/floorb4" onClick={() => setOpenDropdownB(false)}>Floor 4</Link>
                <Link to="/buildB/floorb5" onClick={() => setOpenDropdownB(false)}>Floor 5</Link>
                <Link to="/buildB/floorb6" onClick={() => setOpenDropdownB(false)}>Floor 6</Link>
              </div>
            )}
          </div>

          {/* Build C */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdownC(true)}
            onMouseLeave={() => setOpenDropdownC(false)}
          >
            <Link to="#" className="menu-item">🏢BLOCK C▼</Link>
            {openDropdownC && (
              <div className="dropdown-content">
                <Link to="/buildC/floorc0" onClick={() => setOpenDropdownC(false)}>Floor 0</Link>
                <Link to="/buildC/floorc1" onClick={() => setOpenDropdownC(false)}>Floor 1</Link>
                <Link to="/buildC/floorc2" onClick={() => setOpenDropdownC(false)}>Floor 2</Link>
                <Link to="/buildC/floorc3" onClick={() => setOpenDropdownC(false)}>Floor 3</Link>
                <Link to="/buildC/floorc4" onClick={() => setOpenDropdownC(false)}>Floor 4</Link>
                <Link to="/buildC/floorc5" onClick={() => setOpenDropdownC(false)}>Floor 5</Link>
                <Link to="/buildC/floorc6" onClick={() => setOpenDropdownC(false)}>Floor 6</Link>
              </div>
            )}
          </div>

          {/* Build D */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdownD(true)}
            onMouseLeave={() => setOpenDropdownD(false)}
          >
            <Link to="#" className="menu-item">🏢BLOCK D▼</Link>
            {openDropdownD && (
              <div className="dropdown-content">
                <Link to="/buildD/floord0" onClick={() => setOpenDropdownD(false)}>Floor 0</Link>
                <Link to="/buildD/floord1" onClick={() => setOpenDropdownD(false)}>Floor 1</Link>
                <Link to="/buildD/floord2" onClick={() => setOpenDropdownD(false)}>Floor 2</Link>
                <Link to="/buildD/floord3" onClick={() => setOpenDropdownD(false)}>Floor 3</Link>
                <Link to="/buildD/floord4" onClick={() => setOpenDropdownD(false)}>Floor 4</Link>
                <Link to="/buildD/floord5" onClick={() => setOpenDropdownD(false)}>Floor 5</Link>
                <Link to="/buildD/floord6" onClick={() => setOpenDropdownD(false)}>Floor 6</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />

          {/* Build A */}
          <Route path="/buildA/floor0" element={<Floor0 />} />
          <Route path="/buildA/floor1" element={<Floor1 />} />
          <Route path="/buildA/floor2" element={<Floor2 />} />
          <Route path="/buildA/floor3" element={<Floor3 />} />
          <Route path="/buildA/floor4" element={<Floor4 />} />
          <Route path="/buildA/floor5" element={<Floor5 />} />
          <Route path="/buildA/floor6" element={<Floor6 />} />

          {/* Build B */}
          <Route path="/buildB/floorb0" element={<Floorb0 />} />
          <Route path="/buildB/floorb1" element={<Floorb1 />} />
          <Route path="/buildB/floorb2" element={<Floorb2 />} />
          <Route path="/buildB/floorb3" element={<Floorb3 />} />
          <Route path="/buildB/floorb4" element={<Floorb4 />} />
          <Route path="/buildB/floorb5" element={<Floorb5 />} />
          <Route path="/buildB/floorb6" element={<Floorb6 />} />

          {/* Build C */}
          <Route path="/buildC/floorc0" element={<Floorc0 />} />
          <Route path="/buildC/floorc1" element={<Floorc1 />} />
          <Route path="/buildC/floorc2" element={<Floorc2 />} />
          <Route path="/buildC/floorc3" element={<Floorc3 />} />
          <Route path="/buildC/floorc4" element={<Floorc4 />} />
          <Route path="/buildC/floorc5" element={<Floorc5 />} />
          <Route path="/buildC/floorc6" element={<Floorc6 />} />

          {/* Build D */}
          <Route path="/buildD/floord0" element={<Floord0 />} />
          <Route path="/buildD/floord1" element={<Floord1 />} />
          <Route path="/buildD/floord2" element={<Floord2 />} />
          <Route path="/buildD/floord3" element={<Floord3 />} />
          <Route path="/buildD/floord4" element={<Floord4 />} />
          <Route path="/buildD/floord5" element={<Floord5 />} />
          <Route path="/buildD/floord6" element={<Floord6 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
