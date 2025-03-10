import React, { useState } from 'react';
import '@/styles/casinosearchbar.css';

const CasinoSearchBar = ({ onCategoryChange }) => {
    const [isActive, setIsActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [recentTags, setRecentTags] = useState(['gates', 'bonanza', 'sweet1000', 'big bass', 'dice']);

    const handleTagDelete = (tagToDelete) => {
        setRecentTags(recentTags.filter(tag => tag !== tagToDelete));
    };

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleFilterClick = (category) => {
        if (onCategoryChange) {
          onCategoryChange(category);
          console.log('filtering...');
        }
      };

    const handleSearchSubmit = () => {
        console.log('Performing search with query:', searchQuery);
    };

    return (
        <div className="casino-search-bar-container">
            <div className="search-wrap">
                <div className="relative flex items-center">
                    <div className="search-icon" onClick={handleClick}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="Search your game"
                        className={`casino-search-input ${isActive ? 'active' : ''}`}
                        onClick={handleClick}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit();
                            }
                        }}
                    />
                </div>
            </div>
            <div className="button-group">
                <button className={`search-btn ${isActive ? 'active' : ''}`} onClick={() => handleFilterClick("Lobby")}>Lobby</button>
                <button className="search-btn" onClick={() => handleFilterClick("Originals")}>Gambi Originals</button>
                <button className="search-btn" onClick={() => handleFilterClick("Slots")}>Slots</button>
                <button className="search-btn" onClick={() => handleFilterClick("Live")}>Live Casino</button>
                <button className="search-btn" onClick={() => handleFilterClick("Shows")}>Game Show</button>
                <button className="search-btn" onClick={() => handleFilterClick("Releases")}>New Releases</button>
                <button className="search-btn" onClick={() => handleFilterClick("Collection")}>Collection Games</button>
            </div>

            {isActive && (
                <div className="casino-search-info absolute z-10">
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
                                <button className="close-tag" onClick={() => handleTagDelete(tag)}>×</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default CasinoSearchBar;
