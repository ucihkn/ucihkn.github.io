import styles from './contactus.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';

function ContactUs() {
    return <>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1">Contact Us Page</h1>
        </>} />
    </>;
}

export default ContactUs;