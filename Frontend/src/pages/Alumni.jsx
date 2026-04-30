import styles from "./Alumni.module.scss";
import AlumniSection from '../components/AlumniSection.jsx';
import ContentBlock from "../components/ContentBlock.jsx";

function Alumni() {
    return (<>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1 mb-1">Alumni</h1>
            <p className="lead mb-5">Previous Members and Officers of Eta Kappa Nu!</p>
            <AlumniSection maxAlumni={100} />
        </>} />
    </>);
}

export default Alumni;