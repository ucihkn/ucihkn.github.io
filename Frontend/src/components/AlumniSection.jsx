import { Row, Col, Card } from 'react-bootstrap';

import alumni from '../../public/alumni.json';

function AlumniSection({ maxAlumni = 3 }) {
    const displayAlumni = alumni.slice(0, maxAlumni);

    return (
        <div className="text-center">
            <Row className="g-4 justify-content-center mx-auto" style={{ maxWidth: '1200px' }}>
                {displayAlumni.map((member) => (
                    <Col key={member.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 shadow-sm" style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }}>
                            <Card.Img 
                                variant="top" 
                                src={new URL("../assets/uci_seal_blue_white.jpg", import.meta.url).href} 
                                style={{ 
                                    height: '200px', 
                                    objectFit: 'cover',
                                    filter: 'brightness(0.9)'
                                }} 
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title style={{ fontWeight: '600' }}>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.graduationYear}</Card.Subtitle>
                                <Card.Text className="text-muted">{member.affiliation}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default AlumniSection;