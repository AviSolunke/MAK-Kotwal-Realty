import React from 'react';
import "./Companies.css";
const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className='r-head1 flexColStart'>
              <span className='primaryText'>Brands we Promote..</span>
        </div> 
        <div className='paddings innerWidth flexCenter c-container1'>
      
            <img src='./adani-infra-logo.jpg' alt='' />
            <img src='./godrej.jpg' alt='' />
            <img src='./spark-logo.jpg' alt='' />
            <img src='./kohinoor-logo.jpg' alt='' />
        </div>
    </section>
  )
}

export default Companies;