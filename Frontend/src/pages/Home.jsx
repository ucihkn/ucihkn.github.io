import styles from './home.module.scss';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UCI_BG_img from '../assets/uci-hssoe.jpg';
import HKN_LOGO_img from '../assets/HKNcrest.png';
import UCI_ANTEATER_img from '../assets/anteater_flatten_outline_blk.png';
import UCI_LOGO_img from '../assets/uci-logo.png';

import ContentBlock from '../components/ContentBlock.jsx';

function Home() {
    return <>
        <Card style={{ marginTop: "10vh" }} className="bg-dark text-white">
            <Card.Img src={UCI_BG_img} alt="UCI Campus" />
            <Card.ImgOverlay style={{ backgroundColor: "rgba(0,0,0,0.65)"}} className="text-center">
                <Card.Title className="display-1 mt-3"><b>IEEE-Eta Kappa Nu</b></Card.Title>
                <Card.Text className="display-6 mb-3"><b>Zeta Omega</b></Card.Text>
                <Row className="my-5">
                    <Col><Image src={HKN_LOGO_img} style={{ height: "50vh" }} /></Col>
                    <Col><Image src={UCI_ANTEATER_img} style={{ height: "50vh" }} /></Col>
                    <Col><Image src={UCI_LOGO_img} style={{ height: "50vh" }} /></Col>
                </Row>
                <Card.Text className="display-6 mt-5"><b>University of California, Irvine</b></Card.Text>
                <Row className="mt-5">
                    <Col>
                        <Link to="/about">
                            <Button className="mx-3" variant="light">About Us</Button>
                        </Link>

                        <Link to="/officers">
                            <Button className="mx-3" variant="light">Officers</Button>
                        </Link>
                        
                        <Link to="/contact-us">
                            <Button className="mx-3" variant="light">Contact Us</Button>
                        </Link>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>

        <ContentBlock mt="25" mb="0" content={<>
            <h1 className="display-3">Our Purpose</h1>
            <p className="lead">"To encourage excellence in education for the benefit of the public by: marking in a fitting manner those who have conferred honor upon engineering education by distinguished <b>scholarship</b>, activities, <b>leadership</b> and exemplary <b>character</b> as students in electrical or computer engineering, or by their attainments in the field of electrical or computer engineering."</p>
        </>} />
    </>;
}

export default Home;