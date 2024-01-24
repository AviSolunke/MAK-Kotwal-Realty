import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Commercial = () => {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: 'Adani Inspire',
      category: 'Under-Construction',
      picture: './adani-inspire-icon.jpg',
      location: 'Bandra Kurla Complex'
    },
    {
      id: 2,
      title: 'One Lodha Place',
      category: 'Under-Construction',
      picture: './lodha-commercial.jpg',
      location: 'Lower Parel'
    },
    {
      id: 3,
      title: 'DB Sky Park Elevation',
      category: 'Ready-to-Move',
      picture: './DB-Sky-Park-Elevation.jpg',
      location: 'Lower Parel'
    },
    {
      id: 4,
      title: 'Canary Farms',
      category: 'Lease',
      picture: './canary-farms-mulshi.jpg',
      location: 'Lonavla'
    },
    {
      id: 5,
      title: 'Panchshil Towers',
      category: 'Lease',
      picture: './panchshil-elevation.jpg',
      location: 'Kharadi'
    },
    {
      id: 6,
      title: 'Four Seasons Residences',
      category: 'Ready-to-Move',
      picture: './Four-Seasons-Residences-Elevation.jpg',
      location: 'Worli'
    },
    {
      id: 7,
      title: 'Celestia Spaces ',
      category: 'Ready-to-Move',
      picture: './Celestia-Spaces-Elevation.jpg',
      location: 'Sewri'
    },
    {
      id: 8,
      title: 'Marathon Icon',
      category: 'Under-Construction',
      picture: './marathon-icon-icon.jpg',
      location: 'Lower Parel'
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
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Commercial;
