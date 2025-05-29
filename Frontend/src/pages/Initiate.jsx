import ContentBlock from '../components/ContentBlock.jsx';
import { Card } from 'react-bootstrap';
import './initiate-custom-checkbox.css';
import { useState, useEffect } from 'react';

const requirementsLeft = [
  {
    id: 'resume',
    text: 'Make an Updated Resume',
  },
  {
    id: 'socials',
    text: <span>Connect/Follow our <a href="https://www.linkedin.com/in/ucihkn/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://www.instagram.com/hknuci/" target="_blank" rel="noopener noreferrer">Instagram</a>!</span>,
  },
  {
    id: 'coffee',
    text: <>
      Coffee Chat with a Professional
      <ul className="ms-4 mt-2 mb-0" style={{listStyle: 'disc'}}>
        <li>Q&amp;A; what you learned</li>
        <li>Your prospective career outlook<br />(5 years from now)</li>
      </ul>
    </>,
  },
];

const requirementsRight = [
  {
    id: 'events',
    text: 'Any 4 HKN hosted Events',
  },
  {
    id: 'luncheon',
    text: 'Luncheon with a current Officer',
  },
  {
    id: 'capstone',
    text: <>
      Capstone Project
      <ul className="ms-4 mt-2 mb-0" style={{listStyle: 'disc'}}>
        <li>with a final 3-5 minute presentation</li>
      </ul>
    </>,
  },
  {
    id: 'fee',
    text: <>
      Membership Fee ($95)
      <ul className="ms-4 mt-2 mb-0" style={{listStyle: 'disc'}}>
        <li>one time payment at the initiation ceremony</li>
      </ul>
    </>,
  },
];

function CustomCheckbox({ id, checked, onChange, children }) {
  return (
    <div className="d-flex align-items-start w-100">
      <div className="checkbox-wrapper-23 me-2" style={{flexShrink: 0}}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <label htmlFor={id} style={{ '--size': '30px' }}>
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
      </div>
      <label htmlFor={id} style={{cursor: 'pointer', textDecoration: checked ? 'line-through' : 'none', flex: 1}}>
        {children}
      </label>
    </div>
  );
}

function Initiate() {
  const [checked, setChecked] = useState({});

  // Load checkbox settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('hkn-initiation-requirements');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setChecked(parsedSettings);
      } catch (error) {
        console.error('Error parsing saved checkbox settings:', error);
      }
    }
  }, []);

  // Save checkbox settings to localStorage whenever checked state changes
  useEffect(() => {
    localStorage.setItem('hkn-initiation-requirements', JSON.stringify(checked));
  }, [checked]);

  const handleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ContentBlock mt="25" mb="25" content={
      <>
        <h1 className="display-1 mb-4">Initiation Requirements</h1>
        <p className="mb-4">Eligibility to initiate starts when you receive an email from us at <a href="mailto:hkn@uci.edu">hkn@uci.edu</a>.</p>
        <div className="row g-4">
          <div className="col-md-6">
            <Card className="shadow p-3 h-100">
              <ul className="list-unstyled mb-0 text-start">
                {requirementsLeft.map((req, idx) => (
                  <li className="mb-4" key={req.id} style={{textAlign: 'left'}}>
                    <CustomCheckbox id={req.id} checked={!!checked[req.id]} onChange={() => handleCheck(req.id)}>
                      {req.text}
                    </CustomCheckbox>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="shadow p-3 h-100">
              <ul className="list-unstyled mb-0 text-start">
                {requirementsRight.map((req, idx) => (
                  <li className="mb-4" key={req.id} style={{textAlign: 'left'}}>
                    <CustomCheckbox id={req.id} checked={!!checked[req.id]} onChange={() => handleCheck(req.id)}>
                      {req.text}
                    </CustomCheckbox>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        <div className="mt-4 text-center">
          <em>Requirements progress do roll over each quarter!</em>
        </div>
      </>
    } />
  );
}

export default Initiate; 