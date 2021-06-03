import styles from '../CSS/LanguageIcon.module.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'


const LanguageIcon = (props) => {
    return (
        <div className={styles.iconBox}>
            <LazyLoadImage className={styles.iconImg} src={`https://icongr.am/devicon/${props.iconName}-original.svg`} alt={props.iconName} effect="opacity"/>
            <span className={styles.iconText}>HTML5</span>
        </div>            
    )
}



export default LanguageIcon