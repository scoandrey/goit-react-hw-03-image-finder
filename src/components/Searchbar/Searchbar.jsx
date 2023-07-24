import React from 'react';

const Searchbar = ({ onSubmit, setQ, clearImages }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    clearImages();
    await onSubmit();
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={e => setQ(e.target.value)}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
