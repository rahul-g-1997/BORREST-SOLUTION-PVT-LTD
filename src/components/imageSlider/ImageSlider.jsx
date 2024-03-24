import  { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_gallery"
        );
        const baseUrl = "http://127.0.0.1:8000/images";
        const imagesWithFullUrl = response.data.map((image) => ({
          ...image,
          url: `${baseUrl}/${image.image}`,
        }));
        setImages(imagesWithFullUrl);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      {images.length > 0 && (
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].description}
          style={{ width: "10%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default ImageSlider;
