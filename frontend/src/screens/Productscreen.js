import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

import { List } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

const Productscreen = ({ match }) => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [match])

  return (
    <div>
      <Link className='btn btn-dark my-3' to='/'>
        go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5>{product.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
          <ListGroup.Item className='text-justify'>
            Description : <p>{product.description}</p>
          </ListGroup.Item>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>
                    {product.countInStock >= 1 ? 'in stock' : 'out of stock'}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to='/cart'>
                <Button className='btn btn-block'>Add to cart</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Productscreen
