import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copywrite &copy; My First Ecommerce-website
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default footer
