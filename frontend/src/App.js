import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import Homescrean from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='/' component={Homescrean} />
          <Route path='/Product/:id' component={Productscreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App