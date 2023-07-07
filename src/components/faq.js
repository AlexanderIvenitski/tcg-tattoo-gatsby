import React from 'react';
import { Row, Accordion} from 'react-bootstrap';



const Faq = ({data}) => (
    <Row>
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>test</Accordion.Header>
              <Accordion.Body>
                test
              </Accordion.Body>
            </Accordion.Item> 
        </Accordion>
    </Row>
)

export default Faq;

