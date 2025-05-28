import styles from './contactus.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';

function ContactUs() {
    return <>
        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-1">Contact Us</h1>
        </>} />

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2v0uW3t2sebIp0ECU4kcHojcAc9wqM1NTx6Ux9CCIHLTKmA/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </>;
}

export default ContactUs;