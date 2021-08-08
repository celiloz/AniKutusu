import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homeScreen from "./screens/homeScreen";
import createScreen from "./screens/createScreen";
import Header from "./components/header";
import Footer from "./components/footer"
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={homeScreen} exact />
        <Route path="/create" component={createScreen} />
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
