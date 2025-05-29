import { useState, useEffect } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';
import styles from './faq.module.scss';

function FAQ() {
    const [qaData, setQaData] = useState(null);

    useEffect(() => {
        fetch('/QA.json')
            .then((res) => res.json())
            .then(setQaData)
            .catch((error) => {
                console.error('Error fetching FAQ data:', error);
                setQaData([]);
            });
    }, []);

    if (!qaData) {
        return (
            <ContentBlock mt="25" mb="25" content={
                <div className="text-center">
                    <h1 className="display-1 mb-4">Frequently Asked Questions</h1>
                    <Spinner animation="border" />
                </div>
            } />
        );
    }

    return (
        <ContentBlock mt="25" mb="25" content={
            <>
                <h1 className="display-1 mb-4">Frequently Asked Questions</h1>
                <p className="lead mb-4">Find answers to common questions about UCI HKN membership and initiation.</p>
                
                {qaData.length === 0 ? (
                    <p className="text-center text-muted">No FAQ items available at this time.</p>
                ) : (
                    <Accordion className={styles.accordion}>
                        {qaData.map((item) => (
                            <Accordion.Item eventKey={item.id} key={item.id}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>
                                    {item.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                )}
            </>
        } />
    );
}

export default FAQ; 