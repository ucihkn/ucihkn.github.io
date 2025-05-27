import React from 'react';
import styles from './CompanyLogoCarousel.module.scss';

import amazonLogo from '../assets/companies/amazon_logo.png';
import appleLogo from '../assets/companies/apple_logo.png';
import aristaLogo from '../assets/companies/arista_logo.jpg';
import boeingLogo from '../assets/companies/boeing_logo.png';
import broadcomLogo from '../assets/companies/broadcom_logo.png';
import facebookLogo from '../assets/companies/facebook_logo.png';
import googleLogo from '../assets/companies/Google_logo.png';
import intelLogo from '../assets/companies/intel_logo.png';
import juniperLogo from '../assets/companies/juniper_logo.png';
import karmaLogo from '../assets/companies/karma_logo.png';
import medtronicLogo from '../assets/companies/medtronic_logo.png';
import nasaLogo from '../assets/companies/nasa_logo.png';
import northropGrummanLogo from '../assets/companies/northrop_grumman_logo.png';
import plaidLogo from '../assets/companies/plaid_logo.png';
import wdLogo from '../assets/companies/wd_logo.png';
import workdayLogo from '../assets/companies/workday_logo.png';

const companyLogos = [
  amazonLogo,
  appleLogo,
  aristaLogo,
  boeingLogo,
  broadcomLogo,
  facebookLogo,
  googleLogo,
  intelLogo,
  juniperLogo,
  karmaLogo,
  medtronicLogo,
  nasaLogo,
  northropGrummanLogo,
  plaidLogo,
  wdLogo,
  workdayLogo,
];

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