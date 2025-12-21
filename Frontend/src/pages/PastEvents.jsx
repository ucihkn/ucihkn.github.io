import ContentBlock from '../components/ContentBlock.jsx';
import PastEventsSection from '../components/PastEventsSection.jsx';
import { Button } from 'react-bootstrap';

function PastEvents() {
    return (
        <ContentBlock mt="25" mb="25" content={
            <>
                <h1 className="display-1 mb-1">Past Events</h1>
                <p className="lead mb-1">Explore our previous events and activities!</p>
                <Button className="mb-5" variant="dark" onClick={() => window.location.href = "/past-events"}>Looking for our Past Events? Click here!</Button>
                <PastEventsSection showTitle={false} showViewAllButton={false} maxEvents={100} />
            </>
        } />
    );
}

export default PastEvents;

