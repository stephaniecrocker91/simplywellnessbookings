import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
// import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    <Container className={styles.Main}>
        <Home />
    </Container>

    </div>
  );
}

export default App;
