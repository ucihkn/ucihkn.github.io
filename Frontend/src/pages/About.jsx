import styles from './about.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';

function About() {
    return <>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1">About Page</h1>
        </>} />
    </>;
}

export default About;