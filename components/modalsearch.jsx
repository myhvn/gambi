import React, { useContext, useState } from 'react';
import { AppContext } from '@/context/app';
import '@/styles/searchmodal.css';

const SearchModal = () => {
  const { isSearchModalOpen, toggleSearchModal } = useContext(AppContext);
  const [recentTags, setRecentTags] = useState(['gates', 'bonanza', 'sweet1000', 'big bass', 'dice']);

  const handleTagDelete = (tagToDelete) => {
    setRecentTags(recentTags.filter(tag => tag !== tagToDelete));
  };

  return (
    <div className={`search-modal ${isSearchModalOpen ? 'open' : ''}`}>
      <div className="search-modal-content">
        <div className="search-bar-container">
        <img
                src="/images/home/search.svg"
                alt="Search"
                className="h-6 w-6"
              />
          <input type="text" placeholder="Search your game" className="search-input" />
          <button className="close-modal" onClick={toggleSearchModal}>
            ✕
          </button>
        </div>
        <div className="search-info">
          <p>Search requires at least 3 characters.</p>
          <div className="recent-searches">
            <span className="recent-label">Recent Searches:</span>
            <span className="clear-search">clear search</span> 
            <span className="clear-search-count">({recentTags.length})</span>
          </div>
          <div className="recent-tags">
            {recentTags.map(tag => (
              <div key={tag} className="tag">
                {tag}
                <button className="close-tag" onClick={() => handleTagDelete(tag)}>✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;