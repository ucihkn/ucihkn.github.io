import React from 'react';
import styles from './CompanyLogoCarousel.module.scss';

// Import all company logos using Vite's glob import
const companyLogoModules = import.meta.glob('../assets/companies/*.{png,jpg,jpeg,svg}', { 
  eager: true,
  query: '?url',
  import: 'default'
});

// Convert to array and filter out system files
const companyLogos = Object.entries(companyLogoModules)
  .filter(([path]) => !path.toLowerCase().includes('thumbs.db'))
  .map(([path, url]) => url);

const CompanyLogoCarousel = () => (
  <div className={styles.marqueeContainer}>
    <div className={styles.marqueeTrack}>
      {companyLogos.concat(companyLogos).map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt="Company Logo"
          className={styles.companyLogo}
        />
      ))}
    </div>
  </div>
);

export default CompanyLogoCarousel; 