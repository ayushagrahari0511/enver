import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.icon}>
                        <Image src="/Images/Logo Icon 1.svg" alt="Enverr" width={50} height={50}/>
                        <h3>Enver</h3>
                </div>
                <div className={styles.links}>
                    <Link href="#"><p>Support</p></Link>
                    <Link href="#"><p>Privacy Policy</p></Link>
                    <Link href="#"><p>Terms and Condition</p></Link>
                </div>
                <div className={styles.copyright}>
                    <p>© 2022 Enver, <br /> All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
