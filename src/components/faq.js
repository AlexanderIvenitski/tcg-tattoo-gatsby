import React from 'react';
import { Row, Accordion} from 'react-bootstrap';
import { graphql } from "gatsby"




const Faq = ({data}) => (
    <Row>
        <Accordion>
        {data.faq.edges.map(({node}) => (
          <Accordion.Item>
            <Accordion.Header>
            {node.frontmatter.title}
            </Accordion.Header>
              <Accordion.Body>
                test
              </Accordion.Body>
            </Accordion.Item> 
        ))}
        </Accordion>
    </Row>
)

export default Faq;

export const query = graphql`
  query {

    faq: allMarkdownRemark(filter: {html: {ne: ""}}) {
      edges {
        node {
          html
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`