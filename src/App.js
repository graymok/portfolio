import styles from './CSS/App.module.css'
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Projects from './Pages/Projects'
import About from './Pages/About'
import bg from './Assets/bg.jpg'

function App() {

  const backgroundAlt = 'background image'

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.routes}>
        <Route exact path='/' render={() => { return <About />}} />
        <Route path='/projects' render={() => { return <Projects />}} />
      </div>
      <img className={styles.background} src={bg} alt={backgroundAlt} />
      <div className={styles.overlay} />
    </div>
  );
}

export default App;
