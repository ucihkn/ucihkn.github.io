import ContentBlock from '../components/ContentBlock.jsx';

function Events() {
    return (
        <ContentBlock mt="25" mb="25" content={
            <>
                <h1 className="display-1 mb-1">Our Events</h1>
                <p className="lead mb-4">Check out our events calendar below!</p>
                <div className="text-center">
                    <iframe src="https://calendar.google.com/calendar/embed?src=769cb9a2dfee86c00c27ca226476858675b2fce4ee59ee90af79dbabf78f6b8c%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0, height: "100vh"}} width="95%" frameBorder="0" scrolling="no" className="mb-5" title="UCI HKN Events Calendar"></iframe>
                </div>
            </>
        } />
    );
}

export default Events; 