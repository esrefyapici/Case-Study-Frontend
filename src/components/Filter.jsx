import React from "react";

function Filter({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="minPopularity"
        placeholder="Min Popularity"
        value={filters.minPopularity}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="maxPopularity"
        placeholder="Max Popularity"
        value={filters.maxPopularity}
        onChange={handleChange}
        className="border p-2 rounded"
      />
    </div>
  );
}

export default Filter;
