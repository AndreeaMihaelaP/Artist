import React from "react";
import { CardCategoryImage } from "components/CardCategoryImage";

import img1 from "assets/background1.jpg";
import img2 from "assets/fetita.jpg";
import img3 from "assets/background3.jpg";
import img4 from "assets/background4.jpg";
import img5 from "assets/background5.jpg";
import img6 from "assets/portret.jpg";

const categories = [
  {
    image: img1,
    name: "Delta",
    technique: "Acrylic",
    size: "320x240",
  },
  {
    image: img2,
    name: "Fetita",
    technique: "Acrylic",
    size: "320x240",
  },
  {
    image: img3,
    name: "Delta",
    technique: "Oil",
    size: "320x240",
  },
  {
    image: img4,
    name: "Delta",
    technique: "Oil",
    size: "320x240",
  },
  {
    image: img5,
    name: "Delta",
    technique: "Oil",
    size: "320x240",
  },
  {
    image: img6,
    name: "Delta",
    technique: "Oil",
    size: "320x240",
  },
];

const Category = () => {
  return (
    <div className="category-container">
      <h3 className="category-title">
        <p>Portraits</p>
      </h3>
      <div className="category-img-flex">
        {categories.map((element) => (
          <CardCategoryImage
            image={element.image}
            name={element.name}
            technique={element.technique}
            size={element.size}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
