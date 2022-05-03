import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import '../../styles/Portfolio.module.css'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Pagination, Navigation} from 'swiper'
import styles from '../../styles/Portfolio.module.css'

const Portfolio = () => {
    return (
        <div id="portfolio" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h2>Our Awesome Portfolio.</h2>
                </div>
                <Swiper className={styles.swiper}
                centeredSlidesBounds={true}
                createElements={true}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                navigation
                breakpoints = {
                    {
                        // when window width is >= 990px
                        991.98: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        767.98: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        575.98: {
                            slidesPerView: 1,
                            spaceBetween:20,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        }
                        ,}
                    }
                >
                    <SwiperSlide className={styles.portImages}>
                    <div>
                        <Image src="/Images/portfolio1.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.portImages}>
                    <div>
                        <Image src="/Images/portfolio2.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.portImages}>
                    <div>
                        <Image src="/Images/portfolio3.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.portImages}>
                    <div >
                        <Image src="/Images/portfolio1.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.portImages}>
                    <div>
                        <Image src="/Images/portfolio2.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.portImages}>
                    <div>
                        <Image src="/Images/portfolio3.png" width={300} height={300}/>
                    </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    )
}

export default Portfolio
