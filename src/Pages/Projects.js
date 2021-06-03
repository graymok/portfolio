import styles from '../CSS/Projects.module.css'
import kyber01 from '../Assets/kyber-01.jpg'
import kyber02 from '../Assets/kyber-02.jpg'
import wrkpoint01 from '../Assets/wrkpoint-01.jpg'
import wrkpoint02 from '../Assets/wrkpoint-02.jpg'
import zeitgeist01 from '../Assets/zeitgeist-01.jpg'
import zeitgeist02 from '../Assets/zeitgeist-02.jpg'


const Projects = () => {
    return (
        <div className={styles.container}>
            <span className={styles.headline}>Recent Projects</span>
            <div className={styles.projectBox}>
                <div className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                        <img className={styles.projectImage} src={kyber01} alt="screenshot1"/>
                    </div>
                    <div className={styles.projectFooter}>
                        <div className={styles.projectText}>
                            <span className={styles.title}>Kyber Parker</span>
                            <span className={styles.description}>Kyber Parker</span>
                            <span className={styles.technology}>Kyber Parker</span>
                        </div>
                        <div className={styles.projectLinks}>
                            <a href="https://kyber-parker.herokuapp.com/" target="_blank" className={styles.links}>
                                <img className={styles.contactImg} src="https://icongr.am/entypo/browser.svg?color=4d4d4d" alt="linkedin icon" />Website
                            </a>
                            <a href="https://github.com/graymok/frontend-sei-solo-project-4" target="_blank" className={styles.links}>
                                <img className={styles.contactImg} src="https://icongr.am/devicon/github-original.svg" alt="github icon" />GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Projects