import styles from '../CSS/LanguageIcon.module.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

// Reusable component for each programming language icon

const LanguageIcon = (props) => {
    return (
        <div className={styles.iconBox}>
            <LazyLoadImage className={styles.iconImg} src={`https://icongr.am/devicon/${props.iconURL}-original.svg`} alt={props.iconURL} effect="opacity"/>
            <span className={styles.iconText}>{props.iconName}</span>
        </div>            
    )
}



export default LanguageIcon