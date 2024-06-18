import { useEffect, useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

const Slider = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const image = [image1, image2, image3, image4];

  useEffect(()=>{
      setInterval(()=>{
          setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
      }, 2000)
  }, [])
  return (
    <div
      style={{ display: "flex", marginTop: "70px", marginLeft: "60px", boxSizing: "border-box" }}
    >
      <div>
      <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1);
        }}
      >
        PREV
      </button>
      <img width={850} height={400} src={image[selectedImage]} />
      <button
        onClick={() => {
          if (selectedImage < image.length - 1)
            setSelectedImage(selectedImage + 1);
        }}
      >
        NEXT
      </button>
      </div>
    </div>
  );
};

export default Slider;
