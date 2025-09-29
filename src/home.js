import React from "react";
import morImage from "./assets/door.png"; // Logo

function Home() {
  return (
    <div
      style={{
        padding: "40px 200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        backgroundColor: "#f0f4ff",
      }}
    >
      {/* Title */}
      <h1 style={{ color: "#1064f6ff", marginBottom: "1px" }}>
        Welcome to Ministry of Revenue
      </h1>
      <h2 style={{ color: "#fe3b05ff", marginBottom: "10px" }}>
        Where do you want to go?
      </h2>
      <h3 style={{ color: "#f51408ff", marginBottom: "20px" }}>
        Please click on the builds to see all floors. Click top BUILD button
      </h3>

      {/* Logo Image */}
      <img
        src={morImage}
        alt="Ministry of Revenue Logo"
        style={{
          width: "850px",
          height: "450px",
          marginBottom: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      />

      {/* Mission / Vision / Values Section */}
      <h2 style={{ color: "#1064f6ff", marginBottom: "30px" }}>
        Our Mission Vision and Values
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Mission Card */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "green", marginBottom: "10px", textAlign: "center" }}>
            Mission
          </h3>
          <p>
            MOR will contribute to economic development and social welfare by
            developing a modern Tax and Customs Administration that employs
            professional and highly skilled staff who promote voluntary compliance
            amongst individuals and businesses, and take swift action against those
            who do not comply.
          </p>
        </div>

        {/* Vision Card */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "green", marginBottom: "10px", textAlign: "center" }}>
            Vision
          </h3>
          <p>
            To be a leading, fair and modern Tax and Customs Administration in
            Africa by 2020 that will finance Government expenditure through domestic
            tax revenue collection.
          </p>
        </div>

        {/* Values Card */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "green", marginBottom: "10px", textAlign: "center" }}>
            Values
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Customer Centric</li>
            <li>Professionalism</li>
            <li>Team Work</li>
            <li>Dedication / Commitment</li>
            <li>Loyalty</li>
          </ul>
        </div>
      </div>

      {/* Extra Welcome Section */}
      <h2 style={{ color: "#fe3b05ff", marginTop: "40px" }}>
        Where do you want to go?
      </h2>
      <h2 style={{ color: "#10100fff", marginBottom: "10px" }}>
        What helps you?
      </h2>
      <h3 style={{ color: "#f57f08ff", marginBottom: "10px" }}>
        Please click on the builds to see all floors. Click top BUILD button
      </h3>
    </div>
  );
}

export default Home;
