import styles from './footer.module.scss';
import logo from '../assets/ucilogo.webp';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';

function Footer() {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return (<>
        <div className="mb-5" />
        <Card className={"position-relative mt-auto bg-light border-0"}>
            <ListGroup>
                <Card.Header className="ps-4 py-4">
                    <Row>
                        <Col className="col-6">
                            <Link to="/" className="text-decoration-none text-dark d-inline-block"><img src={logo} height="50vh" className="mb-2" /></Link><br />
                            <Link to="/" className="text-decoration-none text-dark"><h4>Wrestling@UCI</h4></Link>
                            <p className="text-dark">UCI Wrestling Club</p>
                        </Col>
                        <Col>
                            <h4 className="text-dark mb-3">About</h4>
                            <Link to="/contact-us" className="text-decoration-none text-dark"><p>Contact Us</p></Link>
                            <Link to="/about" className="text-decoration-none text-dark"><p>About Us</p></Link>
                            <Link to="/schedule" className="text-decoration-none text-dark"><p>Officers</p></Link>
                        </Col>
                    </Row>
                </Card.Header>
                <ListGroup.Item className="text-center text-dark" variant="dark">© 2019 IEEE-Eta Kappa Nu, Zeta Omega at University of California, Irvine</ListGroup.Item>
            </ListGroup>
        </Card>
    </>);
}

export default Footer;