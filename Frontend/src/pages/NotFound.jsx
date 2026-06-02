import styles from './notfound.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
    return (<>
        <ContentBlock mt="30" mb="30" content={<>
            <h1 className="display-1 text-danger">404 Not Found</h1>
            <p className="lead">Oops! It looks like the page you're looking for doesn't exist.</p>
            <Link to="/"><Button variant="dark">Go back to Home</Button></Link>
        </>} />
    </>);
}

export default NotFound;