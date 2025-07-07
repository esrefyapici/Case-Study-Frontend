import { useState } from "react";
import ProductImage from "./ProductImage";
import RatingStars from "./RatingStars";

const roundToHalf = (num) => Math.round(num * 2) / 2;

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const score = roundToHalf(product.popularityScore * 5);

  return (
    <div className="p-4">
      <div className="bg-white p-4 space-y-3">
        <ProductImage
          images={product.images}
          name={product.name}
          onColorChange={setSelectedColor}
        />
        <h3 className="text-base font-montseratmedium text-[15px]">
          {product.name}
        </h3>
        <p className="font-montseratregular text-[15px]">
          ${product.price.toFixed(2)} USD
        </p>
        <p className="font-avenirbook text-[12px]">{selectedColor} Gold</p>
        <RatingStars score={score} />
      </div>
    </div>
  );
};

export default ProductCard;
