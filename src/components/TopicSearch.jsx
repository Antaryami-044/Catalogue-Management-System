import React, { useState, useMemo } from 'react';
import { topics } from '../data/topics';

const TopicCard = ({ topic }) => (
  <div className="topic-card">
    <h3>{topic.name}</h3>
    <p>{topic.category}</p>
  </div>
);

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTopics = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    if (!lowerCaseSearchTerm) {
      return topics;
    }

    return topics.filter(topic =>
      topic.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      topic.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="topic-search-container">
      <h1>Topic Browser</h1>
      
      <input
        type="text"
        placeholder="Search by topic or category..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {filteredTopics.length > 0 ? (
        <div className="topic-list">
          {filteredTopics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      ) : (
        <p className="no-topics-found">No topics found</p>
      )}
    </div>
  );
};

export default TopicSearch;