import styles from '../CSS/About.module.css'
import LanguageIcon from '../Components/LanguageIcon'
import resume from '../Assets/tim-mok-resume-2021.pdf'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.primary}>
                <div className={styles.left}>
                    <span className={styles.headline}>Tim Mok</span>
                    <span className={styles.tag}>Full Stack Developer</span>
                    <span className={styles.tagline}>With well-designed code, empathy for the user journey, and a deep understanding of strategic business goals, I deliver experiences and products that are impactful, intuitive, and inclusive.</span>
                    <div className={styles.contactBox}>
                        <a href="https://www.linkedin.com/in/tim-mok/" target="_blank" className={styles.links} rel="noreferrer">
                            <img className={styles.contactImg} src="https://icongr.am/devicon/linkedin-original.svg" alt="linkedin icon" />LinkedIn
                        </a>
                        <a href="https://github.com/graymok" target="_blank" className={styles.links} rel="noreferrer">
                            <img className={styles.contactImg} src="https://icongr.am/devicon/github-original.svg" alt="github icon" />GitHub
                        </a>
                        <a href={resume} target="_blank" className={styles.links} rel="noreferrer">
                            <img className={styles.contactImg} src="https://icongr.am/entypo/v-card.svg?color=4d4d4d" alt="resume icon" />Resume
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <span className={styles.title}>Programming Languages</span>
                    <div className={styles.languageBox}>
                        <LanguageIcon iconName={"Javascript"} iconURL={"javascript"} />
                        <LanguageIcon iconName={"React"} iconURL={"react"} />
                        <LanguageIcon iconName={"Python"} iconURL={"python"} />
                        <LanguageIcon iconName={"Node.js"} iconURL={"nodejs"} />
                        <LanguageIcon iconName={"Express"} iconURL={"express"} />
                        <LanguageIcon iconName={"Sequelize"} iconURL={"sequelize"} />
                        <LanguageIcon iconName={"PostgreSQL"} iconURL={"postgresql"} />
                        <LanguageIcon iconName={"CSS3"} iconURL={"css3"} />
                        <LanguageIcon iconName={"HTML5"} iconURL={"html5"} />
                    </div>
                </div>
            </div>
        </div>    
    )
}


export default About