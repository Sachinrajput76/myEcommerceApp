import React from 'react'
import './header.css'
import { Download, Search } from 'react-bootstrap-icons'
import { InputGroup } from 'react-bootstrap'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ShopNow</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <InputGroup className='search'>
              <FormControl
                placeholder='Search for products, brands and more...'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>
                  <Search />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Nav className='ml-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title='More' id='basic-nav-dropdown'>
                <LinkContainer to='/action1'>
                  <NavDropdown.Item>Action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/action2'>
                  <NavDropdown.Item>Another Action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/action3'>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />
                <LinkContainer to='/action4'>
                  <NavDropdown.Item>
                    <Download /> Download The App
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
