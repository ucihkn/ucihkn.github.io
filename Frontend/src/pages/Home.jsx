import styles from './home.module.scss';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UCI_BG_img from '../assets/uci-hssoe.jpg';
import HKN_LOGO_img from '../assets/HKNcrest.png';
import UCI_ANTEATER_img from '../assets/anteater_flatten_outline_blk.png';
import UCI_LOGO_img from '../assets/uci-logo.png';

import ContentBlock from '../components/ContentBlock.jsx';
import TypingFadeIn from '../components/TypingFadeIn.jsx';
import FadeInLeftToRight from '../components/FadeInLeftToRight';
import CompanyLogoCarousel from '../components/CompanyLogoCarousel.jsx';
import FlyInOnScroll from '../components/FlyInOnScroll';

function Home() {
    return <>
        <Card style={{ marginTop: "10vh" }} className={`bg-dark text-white ${styles['parallax-card']}`}>
            <Card.ImgOverlay style={{ backgroundColor: "rgba(0,0,0,0.25)"}} className={`${styles['home-overlay']} text-center`}>
                <div>
                    <Card.Title className="display-1 mt-3"><b>IEEE-Eta Kappa Nu</b></Card.Title>
                    <Card.Text className="display-6 mb-3"><b>Zeta Omega</b></Card.Text>
                </div>
                <div className={styles['bottom-content']}>
                    <Card.Text className="display-6"><b>University of California, Irvine</b></Card.Text>
                    <Row className="mb-5 justify-content-center">
                        <Col xs="auto">
                            <Link to="/about">
                                <Button className="mt-1 mx-3" size="lg" variant="light">Learn More</Button>
                            </Link>
                            <Link to="/contact-us">
                                <Button className="mt-1 mx-3 d-inline-flex align-items-center" size="lg" variant="light">
                                    Contact Us <span style={{fontSize: '1.1em', marginLeft: '0.4em', lineHeight: 1, display: 'inline-block'}}>&#8594;</span>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Card.ImgOverlay>
        </Card>

        <ContentBlock mt="20" mb="0" content={
            <>
                <h1 className="display-3">Our Purpose</h1>
                <FadeInLeftToRight className="lead" duration={3}>
                  {`"To encourage excellence in education for the benefit of the public by: marking in a fitting manner those who have conferred honor upon engineering education by distinguished `}
                  <b>scholarship</b>
                  {`, activities, `}
                  <b>leadership</b>
                  {` and exemplary `}
                  <b>character</b>
                  {` as students in electrical or computer engineering, or by their attainments in the field of electrical or computer engineering."`}
                </FadeInLeftToRight>
            </>
        } />

        {/* Alumni Companies Section */}
        <div style={{ marginTop: "20vh", marginBottom: "25vh" }} className="text-center">
            <h2 className="display-3 mb-5">Our alumni work for...</h2>
            <CompanyLogoCarousel />
        </div>

        <hr />

        {/* Invitation Block */}
        <ContentBlock mt="20" mb="20" content={
            <>
                <FlyInOnScroll>
                    <h2 className="display-3 mb-3">Interested?</h2>
                </FlyInOnScroll>
                <span className="lead" style={{ margin: '0 auto', display: 'block' }}>
                    Look out for our invite!<br />
                    Invitations are sent to the top fourth junior standing, and top third senior standing undergraduates.<br />
                    We send them at the beginning of every Fall, Winter and Spring Quarter.<br />
                    Additional requirements are needed for induction.
                </span>
                <Link to="/contact-us">
                    <Button className="mt-1 mx-3" variant="dark">Contact Us</Button>
                </Link>
            </>
        } />
    </>;
}

export default Home;