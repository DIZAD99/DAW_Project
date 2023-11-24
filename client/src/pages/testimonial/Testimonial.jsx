import React from 'react'
import './Testimonial.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useMediaQuery, useTheme } from '@mui/material'
import { cards } from '../../data/testimonial'


function Testimonial() {
    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'))
    const isLgerScreen = useMediaQuery(theme.breakpoints.up('xl'))
    const slidesPerView = isSmScreen ? 1 : isLgScreen ? 3 : isLgerScreen ? 4 : 0

    return (
        <>
            <Header title={'Testimonail'} subtitle={'khalfi aymen'}></Header>
            <div className="testimonial">
                <Title title={'Clients Testimonails'} subtitle={'See what actual users of our service have to say '} />
                <div className="content">
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        mousewheel={true}
                        keyboard={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            cards.map(item => {
                                return (
                                    <SwiperSlide>
                                        <div className="card">
                                            <p className="p">
                                                {item.comment}
                                            </p>
                                            <div>
                                                <img src={item.img} alt="img" />
                                                <h1>
                                                    {item.name}
                                                </h1>
                                                <span>
                                                    {item.job}
                                                </span>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Testimonial