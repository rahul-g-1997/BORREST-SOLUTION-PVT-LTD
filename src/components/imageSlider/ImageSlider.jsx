import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const [images, setImages] = useState([]);

  // useEffect hook to fetch images when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_gallery"
        );
        // Base URL for images
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

  // Settings for the Slider component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // JSX code for rendering the component
  return (
    <div style={{ height: "auto" }}>
      {/* Slider component with settings */}
      <Slider {...settings}>
        {/* Mapping through the images array and rendering each image */}
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Image tag to display each image */}
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
