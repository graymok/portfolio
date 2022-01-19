import styles from '../CSS/ProjectItem.module.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

// Reusable component for project work

const ProjectItem = (props) => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectHeader}>
                <LazyLoadImage className={styles.projectImage} src={props.imageSrc} alt={props.imageAlt} effect="opacity" />
            </div>
            <div className={styles.projectFooter}>
                <div className={styles.projectText}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.description}>{props.description}<a className={styles.gaLink} href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city" target="_blank" rel="noreferrer">General Assembly's Software Engineering Immersive</a>.</span>
                    <span className={styles.technology}>{props.technology}</span>
                </div>
                <div className={styles.projectLinksBox}>
                    <span className={styles.mobileTitle}>{props.title}</span>
                    <div className={styles.projectLinks}>
                        <a href={props.heroku} target="_blank" className={styles.links} rel="noreferrer">
                            <img className={styles.contactImg} src="https://icongr.am/entypo/browser.svg?color=4d4d4d" alt="linkedin icon" />Website
                        </a>
                        <a href={props.github} target="_blank" className={styles.links} rel="noreferrer">
                            <img className={styles.contactImg} src="https://icongr.am/devicon/github-original.svg" alt="github icon" />GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProjectItem