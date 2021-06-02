import styles from '../CSS/About.module.css'


const About = () => {



    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span className={styles.headline}>Tim Mok</span>
                <span className={styles.tag}>Full Stack Developer</span>
            </div>
            <div className={styles.right}>
                <span className={styles.title}>Programming Languages</span>
                <div className={styles.languageBox}>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/html5-original.svg" alt="html5 icon" />
                        <span className={styles.iconText}>HTML5</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/css3-original.svg" alt="css3 icon" />
                        <span className={styles.iconText}>CSS3</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/javascript-original.svg" alt="javascript icon" />
                        <span className={styles.iconText}>Javascript</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/react-original.svg" alt="react icon" />
                        <span className={styles.iconText}>React</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/python-original.svg" alt="python icon" />
                        <span className={styles.iconText}>Python</span>
                    </div>                    
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/nodejs-original.svg" alt="nodejs icon" />
                        <span className={styles.iconText}>Node.js</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/express-original.svg" alt="express icon" />
                        <span className={styles.iconText}>Express</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/sequelize-original.svg" alt="sequelize icon" />
                        <span className={styles.iconText}>Sequelize</span>
                    </div>                    
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/postgresql-original.svg" alt="postgresql icon" />
                        <span className={styles.iconText}>PostgreSQL</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img className={styles.iconImg} src="https://icongr.am/devicon/github-original.svg" alt="github icon" />
                        <span className={styles.iconText}>GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About