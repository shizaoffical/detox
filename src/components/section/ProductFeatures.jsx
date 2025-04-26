import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination } from 'swiper/modules';

const ProductFeatures = () => {
  return (
    // <section className="product-features">
    //   <div className="inner-block">
    //     <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>As seen on</h2>
    //     <div className="d-desktop">
    //       <div className="col-md-12">
    //         <div className="col-md-2"><img src="https://detox.pk/images/geotv.png" alt="Geo TV" /></div>
    //         <div className="col-md-2"><img src="https://detox.pk/images/tribune.png" alt="Tribune" /></div>
    //         <div className="col-md-2"><img src="https://detox.pk/images/techinasia.png" alt="Tech in Asia" /></div>
    //         <div className="col-md-2"><img src="https://detox.pk/images/MIT.png" alt="MIT" /></div>
    //         <div className="col-md-2"><img src="https://detox.pk/images/pakwired.png" alt="Pakwired" /></div>
    //       </div>
    //     </div>
    //     <div className="clearfix"></div>
    //     <div className="col-md-12 no-pad d-mobile">
    //       <Swiper
    //         modules={[Pagination]}
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         pagination={{ clickable: true }}
    //       >
    //         <SwiperSlide>
    //           <img src="https://detox.pk/images/geotv.png" alt="Geo TV" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://detox.pk/images/tribune.png" alt="Tribune" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://detox.pk/images/techinasia.png" alt="Tech in Asia" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://detox.pk/images/MIT.png" alt="MIT" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://detox.pk/images/pakwired.png" alt="Pakwired" />
    //         </SwiperSlide>
    //       </Swiper>
    //     </div>
    //   </div>
    // </section>
    <section className="product-features">
                <div className="inner-block">
                    <h2 style={{textAlign: 'center' , textTransform: 'uppercase'}}>As seen on</h2>
                    <div className="d-desktop">
                        <div className="col-md-12 ">
                            <div className="col-md-2"><img src="https://detox.pk/images/geotv.png" /></div>
                            <div className="col-md-2"><img src="https://detox.pk/images/tribune.png" /></div>
                            <div className="col-md-2"><img src="https://detox.pk/images/techinasia.png" /></div>
                            <div className="col-md-2"><img src="https://detox.pk/images/MIT.png" /></div>
                            <div className="col-md-2"><img src="https://detox.pk/images/pakwired.png" /></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-12 no-pad d-mobile">
                        <div className="swiper-container123" style={{overflow: 'hidden'}}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="https://detox.pk/images/geotv.png" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://detox.pk/images/tribune.png" />
                                </div>

                                <div className="swiper-slide">
                                    <img src="https://detox.pk/images/techinasia.png" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://detox.pk/images/MIT.png" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://detox.pk/images/pakwired.png" />
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section> 
  );
};

export default ProductFeatures;
