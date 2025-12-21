import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FlyInOnScroll from './FlyInOnScroll';

import pastEvents from '../../public/past_events.json';

function PastEventsSection({ showTitle = true, showViewAllButton = true, maxEvents = 3 }) {
    const displayEvents = pastEvents.slice(0, maxEvents);

    return (
        <div className="text-center">
            {showTitle && (
                <FlyInOnScroll>
                    <h2 className="display-3 mb-4">Past Events</h2>
                </FlyInOnScroll>
            )}
            <Row className="g-4 justify-content-center mx-auto" style={{ maxWidth: '1200px' }}>
                {displayEvents.map((event) => (
                    <Col key={event.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 shadow-sm" style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }}>
                            <Card.Img 
                                variant="top" 
                                src={new URL(`../assets/events/${event.image}`, import.meta.url).href} 
                                style={{ 
                                    height: '200px', 
                                    objectFit: 'cover',
                                    filter: 'brightness(0.9)'
                                }} 
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title style={{ fontWeight: '600' }}>{event.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                                <Card.Text className="text-muted">{event.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {showViewAllButton && (
                <Link to="/past-events">
                    <Button className="mt-4" size="lg" variant="dark">
                        View All Past Events <span style={{fontSize: '1.1em', marginLeft: '0.4em', lineHeight: 1, display: 'inline-block'}}>&#8594;</span>
                    </Button>
                </Link>
            )}
        </div>
    );
}

export default PastEventsSection;

