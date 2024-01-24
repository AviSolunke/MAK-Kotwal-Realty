import React, { useState } from 'react';
import './Career.css'; // Import the CSS file for styling
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Career = () => {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      category: 'IT',
      picture: './r1.png',
      description: 'A software engineer responsible for developing and maintaining software applications.',
      email:'hr_it@mak.com'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      category: 'Marketing',
      picture: './r2.png',
      description: 'A marketing manager responsible for planning and executing marketing strategies.',
      email:'hr_marketing@mak.com'
    },
    {
        id: 3,
        title: 'Advisor Manager',
        category: 'Advisor',
        picture: './r2.png',
        description: 'A marketing manager responsible for planning and executing marketing strategies.',
        email:'hr_advisor@mak.com'
      },
      {
        id: 4,
        title: 'Marketing Manager',
        category: 'Marketing',
        picture: './r2.png',
        description: 'A marketing manager responsible for planning and executing marketing strategies.',
        email:'hr_marketing@mak.com'
      },
    // Add more job profiles as needed
  ]);

  const [filterCriteria, setFilterCriteria] = useState('');

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().includes(filterCriteria.toLowerCase()) ||
    job.category.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  return (
    <>
   <Header/>
   
    <div className="job-profiles-container">
      <input
        type="text"
        placeholder="Filter by title or category"
        value={filterCriteria}
        onChange={handleFilterChange}
        className="filter-input"
      />
      
      <ul className="job-list">
        {filteredJobs.map(job => (
          <li key={job.id} className="job-item">
            <img src={job.picture} alt={job.title} className="job-image" />
            <div className="job-details">
              <h3>{job.title}</h3>
              <p><b>Category : </b>{job.category}</p>
              <p><b>Description : </b>{job.description}</p>
              <p><b>Apply here: </b><a href={`mailto:${job.email}`}>{job.email}</a></p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <Footer/>
    </>
  );
};

export default Career;
