import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../Navbar'


const Hero = () => {
    return (
        <>
          <div className={styles.container} id="home">
              {/* <Navbar/> */}
              <span className={styles.back1}></span>
              <span className={styles.back2}></span>
              
              <div className={styles.wrapper}>
                <div className={styles.left_content}>
                    <h1>Build Your <br /> Awesome <br /> Platform</h1>
                    <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best  service for those of you who use our services.</p>
                    <button className={styles.service_btn}>
                        <p>Our Services</p>
                        <Image src="/Images/Icon.svg" width={10} height={10}/>
                    </button>
                </div>
                <div className={styles.right_content}>
                    <Image src="/Images/Group162532(1).png" width={550} height={600}/>
                </div>
              </div>
              </div>  
        </>
    )
}

export default Hero
