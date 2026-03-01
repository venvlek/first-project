import React, { useState, useEffect } from "react";
import "../CSS Files/main.css";

function Main() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const ACCESS_KEY = "lde5Apd7sEmhD-wCo_7Sy7aboRBVWGDDejoq8gd3oHg";
  const TOTAL_IMAGES = 100; // total images you want to fetch
  const PER_PAGE = 30; // max per page for Unsplash API

  useEffect(() => {
    const totalPages = Math.ceil(TOTAL_IMAGES / PER_PAGE);

    const fetchAllImages = async () => {
      setLoading(true);
      let allImages = [];

      try {
        for (let page = 1; page <= totalPages; page++) {
          const res = await fetch(
            `https://api.unsplash.com/photos?per_page=${PER_PAGE}&page=${page}&client_id=${ACCESS_KEY}`
          );
          const data = await res.json();
          allImages = [...allImages, ...data];
        }
        setImages(allImages);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <main className="image-grid">
      {images.map((img) => (
        <div key={img.id} className="image-item">
          <img
            src={img.urls.small}
            alt={img.alt_description || "Unsplash Image"}
          />
        </div>
      ))}
    </main>
  );
}

export default Main;