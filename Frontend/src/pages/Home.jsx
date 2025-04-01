import styles from './home.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';

function Home() {
    return <>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1">Home Page</h1>
        </>} />
    </>;
}

export default Home;