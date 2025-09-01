import { Container, Row, Col } from 'react-bootstrap';

/*
props.content - main html (auto centered)
props.mt - margin top of block
props.mb - margin bottom of block
*/

function ContentBlock(props) {
    return (<>
        <Container fluid>
            <Row style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}} className="w-100 text-center mx-auto">
                <Col>
                    {props.content}
                </Col>
            </Row>
        </Container>
    </>);
}

export default ContentBlock;