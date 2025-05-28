import React, { useEffect, useState } from 'react';
import { Carousel, Spinner, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './BoardCarousel.module.scss';

const getBoardImageUrl = (filename) =>
  new URL(`../assets/board/${filename}`, import.meta.url).href;

const BoardCarousel = () => {
  const [board, setBoard] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);

  useEffect(() => {
    fetch('/src/assets/board/board.json')
      .then((res) => res.json())
      .then(setBoard);
  }, []);

  const handleCopy = (email, idx) => {
    const emailAddr = email.replace(/^mailto:/, '');
    navigator.clipboard.writeText(emailAddr);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  if (!board) {
    return <Spinner animation="border" />;
  }

  return (
    <Carousel
      className={styles.carousel}
      indicators={true}
      controls={true}
      pause="hover"
      variant="dark"
    >
      {board.map((member, idx) => (
        <Carousel.Item key={idx}>
          <div className={styles.memberContainer}>
            <img
              src={getBoardImageUrl(member.image)}
              alt={member.name}
              className={styles.memberImage}
            />
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <h5 className="text-muted">{member.role}</h5>
              <p style={{ whiteSpace: 'pre-line' }}>{member.bio}</p>
              <div className={"mb-4 " + styles.memberLinks}>
                <OverlayTrigger
                  placement="top"
                  show={copiedIdx === idx || undefined}
                  overlay={
                    <Tooltip id={`tooltip-email-${idx}`} className="centered-tooltip">
                      {copiedIdx === idx ? 'Copied!' : 'Click to copy'}
                    </Tooltip>
                  }
                >
                  <span
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                    onClick={() => handleCopy(member.email, idx)}
                    tabIndex={0}
                    aria-label={`Copy email for ${member.name}`}
                  >
                    {/* Gmail SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                  </span>
                </OverlayTrigger>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  {/* LinkedIn SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BoardCarousel; 