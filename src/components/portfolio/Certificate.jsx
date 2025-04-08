import React from "react";
import "./certificate.css";
import Img1 from "../../assets/certificates/1.jpg";
import Img2 from "../../assets/certificates/2.jpg";
import Img3 from "../../assets/certificates/3.jpg";
import Img4 from "../../assets/certificates/4.jpg";
import Img5 from "../../assets/certificates/5.jpg";

const certificateImages = [
  { id: 1, image: Img1 },
  { id: 2, image: Img2 },
  { id: 3, image: Img3 },
  { id: 4, image: Img4 },
  { id: 5, image: Img5 },
];

const Certificate = () => {
  return (
    <div className="certificate-grid">
      {certificateImages.map(({ id, image }) => (
        <div className="certificate-card" key={id}>
          <img
            src={image}
            alt={`certificate-${id}`}
            className="certificate-img"
          />
        </div>
      ))}
    </div>
  );
};

export default Certificate;
