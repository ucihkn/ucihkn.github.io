import ContentBlock from '../components/ContentBlock.jsx';
import PastEventsSection from '../components/PastEventsSection.jsx';

function PastEvents() {
    return (
        <ContentBlock mt="25" mb="25" content={
            <>
                <h1 className="display-1 mb-1">Past Events</h1>
                <p className="lead mb-5">Explore our previous events and activities!</p>
                <PastEventsSection showTitle={false} showViewAllButton={false} maxEvents={100} />
            </>
        } />
    );
}

export default PastEvents;

