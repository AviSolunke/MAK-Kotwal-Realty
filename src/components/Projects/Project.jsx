import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Project = () => {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: 'The World Towers',
      category: 'Under-Construction',
      picture: './worldtower.jpg',
      location: 'Lower Parel',
      type:'Residencial'

    },
    {
      id: 2,
      title: 'Imperial Towers',
      category: 'Ready-to-Move',
      picture: './imperial-towers.jpg',
      location: 'Tardeo',
      type:'Residencial'
    },
    {
      id: 3,
      title: 'Rustomjee Elements',
      category: 'Lease',
      picture: './rustomjeeelements-Elevation.jpg',
      location: 'Juhu',
      type:'Residencial'
    },
    {
      id: 4,
      title: 'Kingston Tower',
      category: 'Ready-to-Move',
      picture: './kingston_tower.jpg',
      location: ' Parel',
      type:'Residencial'
    },
    {
      id: 5,
      title: 'Canary Farms',
      category: 'Lease',
      picture: './canary-farms-mulshi.jpg',
      location: 'Lonavla',
      type:'Commercial'
    },
    {
      id: 6,
      title: 'Panchshil Towers',
      category: 'Lease',
      picture: './panchshil-elevation.jpg',
      location: 'Kharadi',
      type:'Commercial'
    },
    {
      id: 7,
      title: 'Four Seasons Residences',
      category: 'Ready-to-Move',
      picture: './Four-Seasons-Residences-Elevation.jpg',
      location: 'Worli',
      type:'Commercial'
    },
    {
      id: 8,
      title: 'Marathon Icon',
      category: 'Under-Construction',
      picture: './marathon-icon-icon.jpg',
      location: 'Lower Parel',
      type:'Commercial'
    },

    // Add more location as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredJobs = jobList.filter((job) =>
    selectedCategory === '' || job.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="job-profiles-container">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="Under-Construction">Under Construction</option>
          <option value="Ready-to-Move">Ready to Move</option>
          <option value="Lease">Lease</option>
        </select>
        <ul className="job-list">
          {filteredJobs.map((job) => (
            <li key={job.id} className="job-item">
              <img src={job.picture} alt={job.title} className="job-image" />
              <div className="job-details">
                <h3>{job.title}</h3>
                <p><b>Category: </b>{job.category}</p>
                <p><b>Location: </b>{job.location}</p>
                <p><b>Type: </b>{job.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Project;
