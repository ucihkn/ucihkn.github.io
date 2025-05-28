import styles from './officers.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import BoardCarousel from '../components/BoardCarousel.jsx';

function Schedule() {
    return <>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1 mb-4">Officers Page</h1>
            <BoardCarousel />
        </>} />
    </>;
}

export default Schedule;