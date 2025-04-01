import styles from './about.module.scss';
import { Image } from 'react-bootstrap';

import ENG_HALL_img from '../assets/engineering-hall.jpg';

import ContentBlock from '../components/ContentBlock.jsx';

function About() {
    return <>
        <ContentBlock mt="25" mb="0" content={<>
            <h1 className="display-1">Our Organization</h1>
            <p className="lead">IEEE-Eta Kappa Nu (IEEE-HKN), the national honor society of IEEE, is dedicated to encouraging and recognizing individual excellence in education and meritorious work, in professional practice, and in any of the areas within the IEEE-designated fields of interest.</p>
        </>} />

        <Image src={ENG_HALL_img} style={{ width: "100%" }} />
    </>;
}

export default About;