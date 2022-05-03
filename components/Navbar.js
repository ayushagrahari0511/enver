import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const Navbar = () => {

    const [isSlide, setIsSlide] = useState(false)

    return (
        <>
          <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.icon}>
                        <Image src="/Images/Logo Icon 1.svg" alt="Enverr" width={50} height={50}/>
                        <h3>Enver</h3>
                    </div>
                    <div className={isSlide ? styles.route_wrappershow : styles.route_wrapper}>
                    <div className={styles.route}>
                        <Link href="#home">Home</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#portfolio">Our Project</Link>
                        <Link href="#about">About us</Link>
                    </div>
                    <div className={styles.contact}>
                        <button>Contact us</button>
                    </div>
                    </div>
                    <div className={styles.menu_icon}>
                       {isSlide? <Image src="/Images/Iconsm.svg" onClick={() => setIsSlide(false)} width={40} height={40} className={styles.Nav_Img} /> : <Image src="/Images/Sort.svg" onClick={() => setIsSlide(true)} width={40} height={40}/> } 
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Navbar
