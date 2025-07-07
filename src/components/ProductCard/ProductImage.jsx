import { useState, useEffect } from "react";

const ProductImage = ({ images, name, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [img, setImg] = useState(images.yellow);

  useEffect(() => {
    onColorChange(selectedColor);
  }, [selectedColor]);

  const handleColor = (color) => {
    setSelectedColor(color);
    setImg(images[color.toLowerCase()]);
  };

  return (
    <div>
      <img
        src={img}
        alt={name}
        className="rounded-2xl w-full h-full object-contain"
      />
      <div className="flex space-x-4 mt-2">
        {["Yellow", "White", "Rose"].map((color) => (
          <button
            key={color}
            className={`size-4 rounded-full ${
              {
                Yellow: "bg-[#E6CA97]",
                White: "bg-[#D9D9D9]",
                Rose: "bg-[#E1A4A9]",
              }[color]
            } ${selectedColor === color ? "ring ring-offset-4" : ""}`}
            onClick={() => handleColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
