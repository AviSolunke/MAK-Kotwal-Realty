import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Residencial = () => {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: 'The World Towers',
      category: 'Under-Construction',
      picture: './worldtower.jpg',
      location: 'Lower Parel'
    },
    {
      id: 2,
      title: 'Indianbulls Sky 882',
      category: 'Under-Construction',
      picture: './IndiabullsSky.jpg',
      location: 'Lower Parel'
    },
    {
      id: 3,
      title: 'Imperial Towers',
      category: 'Ready-to-Move',
      picture: './imperial-towers.jpg',
      location: 'Tardeo'
    },
    {
      id: 4,
      title: 'Piramal Mahalaxmi',
      category: 'Lease',
      picture: './piramal-mahalaxmi.jpg',
      location: 'Mahalaxmi'
    },
    {
      id: 5,
      title: 'Rustomjee Elements',
      category: 'Lease',
      picture: './rustomjeeelements-Elevation.jpg',
      location: 'Juhu'
    },
    {
      id: 6,
      title: 'Shanti Heights',
      category: 'Ready-to-Move',
      picture: './shanti_heights.jpg',
      location: 'Wadala'
    },
    {
      id: 7,
      title: 'Omkar 1973',
      category: 'Under-Construction',
      picture: './Omkar-1973.jpg',
      location: 'Worli'
    },
    {
      id: 8,
      title: 'Kingston Tower',
      category: 'Ready-to-Move',
      picture: './kingston_tower.jpg',
      location: ' Parel'
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

export default Residencial;
