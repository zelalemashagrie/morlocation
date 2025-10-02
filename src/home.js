import React, { useState, useEffect } from "react";
import doorImage from "./assets/door.png";
import welmImage from "./assets/welm.png";
import gomImage from "./assets/gom.png";
import seeImage from "./assets/see.png";
import minstImage from "./assets/minst.png";

function Home() {
  const slides = [
    { img: doorImage, text: "Welcome" },
    { img: welmImage, text: "Welcome to Ministry Of Revenue Head Quarter" },
    { img: gomImage, text: "የት መሄድ ትፈልጋለህ?" },
    { img: seeImage, text: "በግንባታ ላይ ያሉትን ሁሉንም ለማየት እባክዎን ጠቅ ያድርጉ?" },
    { img: minstImage, text: "ዓይናለም ንጉሴ አሊ የገቢዎች ሚኒስቴር" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  // Auto slideshow
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Fullscreen
  const handleImageClick = (img) => {
    setIsPaused(true);
    setFullscreenImg(img);
  };

  const closeFullscreen = () => {
    setFullscreenImg(null);
    setIsPaused(false);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentSlideIndex = slides.findIndex((s) => s.img === fullscreenImg);
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    setFullscreenImg(slides[nextIndex].img);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentSlideIndex = slides.findIndex((s) => s.img === fullscreenImg);
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    setFullscreenImg(slides[prevIndex].img);
    setCurrentIndex(prevIndex);
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f0f4ff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ color: "#1064f6ff", marginBottom: "20px" }}>
        Welcome to Ministry of Revenue Head Quarter Office
      </h1>

      {/* Slideshow */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => handleImageClick(slides[currentIndex].img)}
      >
        <img
          src={slides[currentIndex].img}
          alt="Slideshow"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {slides[currentIndex].text}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div
          onClick={closeFullscreen}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
            flexDirection: "column",
          }}
        >
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            style={{ maxWidth: "95%", maxHeight: "80%", borderRadius: "12px" }}
          />
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button
              onClick={handlePrev}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#1064f6",
                color: "white",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#1064f6",
                color: "white",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Mission, Vision, Values */}
      <div style={{ maxWidth: "1200px", margin: "40px auto" }}>
        <h2 style={{ color: "#1064f6", textAlign: "center", marginBottom: "30px" }}>
          Our Mission, Vision, and Values
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Mission */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "green", textAlign: "center" }}>Mission</h3>
            <p>
              MOR will contribute to economic development and social welfare by developing a modern Tax and Customs Administration that employs professional and highly skilled staff who promote voluntary compliance amongst individuals and businesses, and take swift action against those who do not comply.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "green", textAlign: "center" }}>Vision</h3>
            <p>
              To be a leading, fair and modern Tax and Customs Administration in Africa by 2020 that will finance Government expenditure through domestic tax revenue collection.
            </p>
          </div>

          {/* Values */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "green", textAlign: "center" }}>Values</h3>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Customer Centric</li>
              <li>Professionalism</li>
              <li>Team Work</li>
              <li>Dedication / Commitment</li>
              <li>Loyalty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
