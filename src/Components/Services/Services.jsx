import React from 'react';
import './services.css';
import services_data from '../../assets/services_data';
import { FaArrowRightLong } from 'react-icons/fa6';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Services</h1>        
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <FaArrowRightLong size={24} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
