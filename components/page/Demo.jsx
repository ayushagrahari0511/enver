import styles from '../../styles/Demo.module.css'
import Image from 'next/image'

const Demo = () => {
    return (
        <>
        <div id="about" className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>
                    Why Enver Is The <br /> Best Choice
                </h2>
                <p>
                Watch this one minute video so you understand why you should use our services!
                </p>
            </div>
            <div className={styles.player}>
                <video controls src="/Videos/video_h25.mp4" poster="/Images/image 4.png">
                </video>
            </div>
            </div>
        </div>
        </>
    )
}

export default Demo
