import Image from 'next/image'
import styles from '../../styles/Services.module.css'

const Services = () => {
    return (
        <div className={styles.container} id="services">
            <div className={styles.wrapper}>

            <div className={styles.title}>
                <h2>The Service We Provide For You</h2>
            </div>
            <div className={styles.services}>
                <div className={styles.service_index}>
                    <Image src="/Images/development.svg" width={50} height={50}/>
                    <h3>Development</h3>
                    <p>Create a platform with the best and coolest quality from us.</p>
                </div>
                <div className={styles.service_index}>
                    <Image src="/Images/ui.svg" width={50} height={50}/>
                    <h3>UI/UX Designer</h3>
                    <p>We provide UI/UX Design services, and of course with the best quality</p>
                </div>
                <div className={styles.service_index}>
                    <Image src="/Images/graphik.svg" width={50} height={50}/>
                    <h3>Graphik Designer</h3>
                    <p>We provide Graphic Design services, with the best designers</p>
                </div>
                <div className={styles.service_index}>
                    <Image src="/Images/motion.svg" width={50} height={50}/>
                    <h3>Motion Graphik</h3>
                    <p>Create a platform with the best and coolest quality from us.</p>
                </div>
                <div className={styles.service_index}>
                    <Image src="/Images/photography.svg" width={50} height={50}/>
                    <h3>Photography</h3>
                    <p>We provide Photography services, and of course with the best quality</p>
                </div>
                <div className={styles.service_index}>
                    <Image src="/Images/videography.svg" width={50} height={50}/>
                    <h3>Videography</h3>
                    <p>Create a platform with the best and coolest quality from us.</p>
                </div>

            </div>
                    </div>
        </div>
    )
}

export default Services
