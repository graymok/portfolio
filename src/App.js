import styles from './CSS/App.module.css'
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Projects from './Pages/Projects'
import About from './Pages/About'
import bg from './Assets/bg.jpg'

function App() {

  const background = 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'
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
