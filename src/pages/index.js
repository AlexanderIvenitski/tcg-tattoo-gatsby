import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col, Card, } from "react-bootstrap"
import Faq from "../components/faq.js"
import ImageSlider from "../components/imageSlider"

const IndexPage = ({data}) => (
  <Layout>

    <Container>

      <Row className="g-4 m-4">
        {data.tattoos.edges.map(({node}) => (
          <Col lg={4} xs={6} key={node.id}>
            <Card>
              <GatsbyImage
                  image={getImage(node.frontmatter.featured_image)}
                  alt={node.frontmatter.title}
                  className= "card-img-top"
                />
                <Card.Body>
                  <Card.Title>
                    {node.frontmatter.title}
                  </Card.Title>
                  <p>
                    {node.frontmatter.date}
                  </p>
                </Card.Body>
            </Card>
            
          </Col>
        ))}
      </Row>
      <Row className="m-4">
        <Faq />
      </Row>
      <Row className="m-4">
        <ImageSlider />
      </Row>
     

      
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {

    tattoos: allMarkdownRemark (filter: { frontmatter: {date: { ne: null} } } ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            title
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 600, aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  }
`
