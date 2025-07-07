import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./components/Carousel";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minPopularity: "",
    maxPopularity: "",
  });

  const fetchData = async () => {
    const params = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "") {
        params[key] = value;
      }
    });

    try {
      const response = await axios.get(import.meta.env.VITE_API, {
        params,
      });
      setData(response.data);
    } catch (error) {
      console.error("Data could not be received:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="font-avenirbook text-[45px]">Product List</h1>
      </div>
      <Filter filters={filters} setFilters={setFilters} />
      {data.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">Product not found.</p>
      ) : (
        <Carousel products={data} />
      )}
    </div>
  );
}

export default App;
