import React from 'react';

const Categories = ({ filterCategory, uniqueCategories }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((item, index) => (
        <button
          className="filter-btn"
          key={index}
          onClick={() => filterCategory(item)}
        >
          {item}{' '}
        </button>
      ))}
    </div>
  );
};

export default Categories;
