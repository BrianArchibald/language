import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import TeacherScreen from './screens/TeacherScreen'

function App() {
  return (
    <Router className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/teacher/:id" component={TeacherScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
