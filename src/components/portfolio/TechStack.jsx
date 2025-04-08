import React from "react";
import "./TechStack.css";
import Img1 from "../../assets/techstack/reactjs.svg";
import Img2 from "../../assets/techstack/reactjs.svg";
import Img3 from "../../assets/techstack/reactjs.svg";
import Img4 from "../../assets/techstack/reactjs.svg";
import Img5 from "../../assets/techstack/reactjs.svg";


const certificateImages = [
  { id: 1, image: Img1, name: "Java" },
  { id: 2, image: Img2, name: "React" },
  { id: 3, image: Img3, name: "vue" },
  { id: 4, image: Img4, name: "Spring Boot" },
  { id: 5, image: Img5, name: "Python" },
];

const TechStack = () => {
  return (
    <div className="techstack-grid">
      {certificateImages.map(({ id, image, name }) => (
        <div className="techstack-card" key={id}>
          <img
            src={image}
            alt={`certificate-${id}`}
            className="techstack-img"
          />
          <p className="name">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
