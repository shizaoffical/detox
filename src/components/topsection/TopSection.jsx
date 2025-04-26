import React from 'react'
import ProductFeatures from '../section/ProductFeatures'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const TopSection = () => {
    return (
        <div>
            <Header />
            <section className="top-section section" id="top-section">
                {/* <div className="inner-block clearfix"> */}
                <div className="col-md-12 d-mobile" style={{ padding: '0px 0px 13px 0px' }} >
                    <img src="https://detox.pk/images/order_today.jpg" width="100%" />
                </div>
                {/* </div> */}
                <div className="inner-block clearfix">

                    <aside className="left">
                        <div className="text">
                            <h1>The Best Weight Loss Solution</h1>
                            <ul>
                                <li>100% Natural Weight Loss Extract</li>
                                <li>500,000+ Satisfied Customers</li>
                                <li>Approved by Government of Pakistan</li>
                                <li>Burns Fat Without Side Effects</li>
                                <li>Improves Your Metabolism</li>
                                <li>100% Money Back Guarantee</li>
                            </ul>
                        </div>
                        <div className="product">
                            <img src="https://detox.pk/images/product-image.jpg" alt="" />
                            <div className="info-popup man">
                                <div className="point" onclick=""><span></span></div>
                                <div className="popup">By increasing lean muscle mass, Detox helps to prevent new fat formation
                                    in both men and women.
                                </div>
                            </div>
                            <div className="info-popup woman">
                                <div className="point" onclick=""><span></span></div>
                                <div className="popup">100% pure Detox formula breaks down stored fat for an overall leaner
                                    physique.
                                </div>
                            </div>
                            <img src="images/top-section-leaves.png" alt="" className="leaves" />
                        </div>
                        <div className="clear"></div>
                    </aside>

                    <div className="people">
                        <img src="https://detox.pk/images/man-image1.jpg" alt="" className="man-image" id="whatever" />
                        <img src="https://detox.pk/images/woman-image1.jpg" alt="" className="woman-image" />
                    </div>

                    <div className="arrows">
                        <img style={{ display: 'none', top: '326px' }} src="https://detox.pk/images/top-section-arrow-image.png" alt="" className="arrow-image" />
                        <img src="https://detox.pk/images/top-section-arrow-image-tablet.png" alt="" className="arrow-image-tablet" />
                    </div>

                    <form action="https://detox.pk/order.php" method="post" className="form-order right form-order-desk" id="form-order" validate>

                        <input type="hidden" name="product" value="Detoux" />
                        <input type="hidden" name="affiliate" value="" />
                        <input type="hidden" name="page" value="index" />
                        <input type="hidden" name="short_referrer" value="" />
                        <input type="hidden" name="long_referrer" value="" />
                        <input type="hidden" name="ref" value="" />
                        <input type="hidden" name="free" value="" />
                        <input type="hidden" name="discount" value="" />
                        <input type="hidden" name="avial" id="avial" value="0" />
                        <input type="hidden" name="pack" id="pack" value="" />
                        <header>
                            <span style={{ fontWeight: "normal", textTransform: "uppercase", fontSize: "14px", marginLeft: "51px", marginBottom: "7px" }}>
                                now Available in pakistan
                            </span>
                            Order Today and start losing weight with <b>Right Detox</b>
                        </header>
                        <div className="form-box">
                            <input name="full_name" placeholder="Full Name" type="text" className="first-name" />
                            <div className="error-message">Please enter your Full Name</div>
                        </div>
                        <div className="form-box">
                            <input name="email" placeholder="Email" type="email" />
                            <div className="error-message">Please enter your Email</div>
                        </div>
                        <div className="form-box">
                            <input name="phone" placeholder="Telephone" type="text" />
                            <div className="error-message">Please enter your Telephone</div>
                        </div>
                        <div className="form-box">
                            <input name="address1" placeholder="Street Address" type="text" />
                            <div className="error-message">Please enter your Street Address</div>
                        </div>
                        <div className="form-box">
                            <input name="city" placeholder="City" type="text" />
                            <div className="error-message">Please enter your City</div>
                        </div>
                        <button type="submit" className="button redcolor large submit-form">Place My Order!</button>
                        <div className="images" style={{ padding: '10px' }}>Please contact <b>032-111-000-22</b>
                            for help in placing  order.
                        </div>
                    </form>
                    {/* <div className="link d-mobile">
                        <a href="javascript:void(0)" className="button orange large d-mobile open-lead-form">Place My Order!</a>
                    </div> */}
                </div>

            </section>
            <section className="discount-image">
                {/* <div className="inner-block"> */}
                <div className="col-md-12 d-mobile" style={{ padding: '0px 0px 0px 0px' }}>
                    <img src="https://detox.pk/images/benefit_rd.png" width="100%" />
                    {/* </div> */}
                </div>
            </section>
            <ProductFeatures />
            {/* <section className="product-features">
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
            </section> */}
            {/* <!--end top section--> */}







            <div class="second-section section" id="second-section">
                {/* second section */}
                <div class="top-text">
                    <div class="inner-block">
                        <h2>What is Right Detox?</h2>
                        <p><strong>Right Detox</strong> is 100% organic dietary supplement prepared with natural herbs which
                            helps you lose weight by enhancing your metabolism. Right detox also improves your digestive
                            function and relieve constipation.</p>

                        <div class="d-mobile-md">
                            <img src="https://detox.pk/images/supplementfacts.png" alt="supplement facts" style={{ width: '100%' }} />
                        </div>
                        <div class="d-mobile-md">
                            <img src="https://detox.pk/images/aboutdetox.png" alt="supplement facts" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div class="bottom-text" style={{ textAlign: 'center' }}>
                        <div class="inner-block">
                            <p>Did you know, even modest
                                <strong>weight loss of 5-10% can significantly improve your  health</strong>
                                and can prevent debilitating health-related conditions and diseases?
                                <strong>Right Detox can help you do just that!</strong>
                            </p>
                            <a href="#form-order" class="button orange large link-button d-desktop">Place My Order!</a>
                            <a href="javascript:void(0)" class="button orange large d-mobile open-lead-form">Place My
                                Order!</a>

                        </div>
                    </div>

                </div>
                {/* end second section */}

                {/* third section */}
                <div class="third-section section" id="third-section">
                    <div class="inner-block">

                        <h2>How Right Detox Works</h2>
                        <p>4 KEY ACTIONS OCCUR IN THE BODY WHEN TAKING RIGHT DETOX</p>

                        <div class="circle-block d-desktop-md">
                            <div class="block first">
                                <div class="image"></div>
                                <h3>Activates The Fat Burning Messenger</h3>
                                <div class="link">
                                    <a href="javascript:void(0)">Read more</a>
                                    <div class="popup">
                                        <a href="javascript:void(0)" class="close"><span></span></a>
                                        Detox boosts fat loss by activating fat-burning enzymes
                                        including the cAMP (Cyclic Adenosine Monophosphate) messenger. cAMP
                                        encourages the fat burning process called lipolysis, which releases fat
                                        stores to use as energy.
                                    </div>
                                </div>
                            </div>
                            <div class="arrow-top"></div>
                            <div class="block second">
                                <div class="image"></div>
                                <h3>Breaks Down Stubborn Fat Tissue</h3>
                                <div class="link">
                                    <a href="javascript:void(0)">Read more</a>
                                    <div class="popup">
                                        <a href="javascript:void(0)" class="close"><span></span></a>
                                        Researchers have confirmed that Detox releases fatty acids
                                        from adipose tissue, resulting in the break down and ultimately the loss
                                        of stored body fat.
                                    </div>
                                </div>
                            </div>
                            <div class="arrow-right"></div>
                            <div class="block third">
                                <div class="image"></div>
                                <h3>Preserves &amp; Builds Lean Muscle</h3>
                                <div class="link">
                                    <a href="javascript:void(0)">Read more</a>
                                    <div class="popup">
                                        <a href="javascript:void(0)" class="close"><span></span></a>
                                        By raising the metabolic rate and increasing the amount of lean
                                        muscle on the body, you are better able to prevent new fat formation by
                                        burning it off more efficiently. What�s better than losing fat and
                                        preventing new fat from forming at the exact same time!
                                    </div>
                                </div>
                            </div>
                            <div class="arrow-bottom"></div>
                            <div class="block fourth">
                                <div class="image"></div>
                                <h3>Prevents Future Fat Formation</h3>
                                <div class="link">
                                    <a href="javascript:void(0)">Read more</a>
                                    <div class="popup">
                                        <a href="javascript:void(0)" class="close"><span></span></a>
                                        Detox supports healthy testosterone levels in both men and
                                        women, so you�re able to retain your muscle mass and even add to it.
                                        Many individuals fear losing muscle when trying to lose fat, but
                                        Detox drives energy consumption primarily through the fat stores.
                                    </div>
                                </div>
                            </div>
                            <div class="arrow-left"></div>
                        </div>
                        <div class="d-mobile-md">
                            <img src="https://detox.pk/images/detox_howitworks.jpg" alt="detox_howitworks"
                                style={{ width: '100%' }} />
                        </div>

                        <div class="link">
                            <a href="#form-order" class="button orange large link-button d-desktop">I Want to Burn Fat Even
                                Quicker!</a>
                            <a href="javascript:void(0)" class="button orange large d-mobile open-lead-form">I Want to Burn
                                Fat Even
                                Quicker!</a>
                        </div>

                    </div>
                </div>
                {/* end third section */}

                {/* fourth section */}
                <div class="fourth-section section" id="fourth-section">
                    <div class="inner-block">

                        <h2>A natural, energy-boosting weight loss extract that will change your body for the better.</h2>
                        <p>The herbal extract, right detox has been used for generations in Pakistani folk medicines and now
                            is a
                            leading extract in supporting lean muscle growth and fat removal in both men and women.</p>
                        <p>Many dietary supplements contain harmful extracts, which are not only harmful to your body but
                            also
                            ineffective and expensive. Right Detox is prepared with 100% pure organic herbs.</p>

                        <div class="leafs-block clearfix">
                            <div class="leaf-box first left">
                                <img src="https://detox.pk/images/fourth-section-leaf1.jpg" alt="" class="big-leaf animation"
                                    data-vp-add-class="visible" data-vp-offset="200" />
                                <div class="small-leaf animation" data-vp-add-class="visible" data-vp-offset="300">
                                    <b>150mg</b>of
                                    Pure <strong>Citrullus colocynthis</strong> Extract
                                </div>
                            </div>
                            <div class="leaf-box second left">
                                <img src="https://detox.pk/images/fourth-section-leaf2.jpg" alt="" class="big-leaf animation"
                                    data-vp-add-class="visible" data-vp-offset="200" />
                                <div class="small-leaf animation" data-vp-add-class="visible" data-vp-offset="200">
                                    <b>100mg</b> of
                                    Organic Nigella sativa Extract
                                </div>
                            </div>
                            <div class="leaf-box third left">
                                <img src="https://detox.pk/images/fourth-section-leaf3.jpg" alt="" class="big-leaf animation"
                                    data-vp-add-class="visible" data-vp-offset="200" />
                                <div class="small-leaf animation" data-vp-add-class="visible" data-vp-offset="200">
                                    Formulated in
                                    USA
                                </div>
                            </div>
                            <div class="leaf-box fourth left">
                                <img src="https://detox.pk/images/fourth-section-leaf4.jpg" alt="" class="big-leaf animation"
                                    data-vp-add-class="visible" data-vp-offset="200" />
                                <div class="small-leaf animation" data-vp-add-class="visible" data-vp-offset="200">Safe to
                                    use.
                                </div>
                            </div>
                        </div>

                        <div class="link">
                            <a href="#form-order" class="button orange large link-button d-desktop">Place My Order!</a>
                            <a href="javascript:void(0)" class="button orange large d-mobile open-lead-form">Place My
                                Order!</a>
                        </div>

                    </div>
                </div>
                <section class="real-people" id="testimonial">
                    <div class="container">
                        <h1>Real People, Real Results*</h1>
                        <p>Men and women worldwide are raving about Right Detox and its effective, natural weight-loss formula. Many of our customers were thrilled to share their positive experiences seen below.</p>
                        <div class="row people d-mobile">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="col-md-4">
                                            <h1>Lost 55kg*</h1>
                                            <img src="https://detox.pk/images/result_1.jpg" class="img-fluid" alt="people image 1" width="100%" />
                                            <img src="https://detox.pk/images/rating_stars.png" alt="rating stars" />
                                            <p>With the help of Nutright Right Detox I've transformed myself in just a few months.</p>
                                            <div class="real-people-name">Umer</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="col-md-4">
                                            <h1>Lost 25kg*</h1>
                                            <img src="https://detox.pk/images/redult_2.jpg" class="img-fluid" alt="people image 2" width="100%" />
                                            <img src="https://detox.pk/images/rating_stars.png" alt="rating stars" />
                                            <p>I was very impressed by how effective Right Detox is in reducing weight. Look where I am now. Thanks</p>
                                            <div class="real-people-name">Afan Farooq</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="col-md-4">
                                            <h1>Lost 7kg*</h1>
                                            <img src="https://detox.pk/images/result_3.jpg" class="img-fluid" alt="people image 3" width="100%" />
                                            <img src="https://detox.pk/images/rating_stars.png" alt="rating stars" />
                                            <p>I wanted to reduce belly fat without working out and Right Detox helped me in doing so.</p>
                                            <div class="real-people-name">Bilal Ahmad</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination" style={{ bottom: '6px' }}></div>
                            </div>
                        </div>
                        <div class="row people d-desktop">
                            <div class="col-md-12">
                                <a href="#form-order" class="btn header-order-btn link-button border-radius-30 padding-17 d-desktop">
                                    Order Right Detox Today and Make Your Dream Body a Reality
                                </a>
                                <a href="javascript:void(0)" class="btn header-order-btn border-radius-30 padding-17 d-mobile open-lead-form">
                                    Order Right Detox Today and Make Your Dream Body a Reality
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about-right-detox d-desktop">
                    <div class="container">
                        <h1>What People say about Right Detox*</h1>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="video_wrapper video_wrapper_full js-videoWrapper">
                                    <video width="263" height="465" class="video1" controls>
                                        <source src="https://detox.pk/videos/review_5.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <iframe width="263" height="465" class="videoIframe js-videoIframe" src="" frameborder="0"
                                allowTransparency="true" allowfullscreen
                            data-src="https://www.youtube.com/embed/haRCpUOCG_M?autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0&color=white"></iframe> */}
                                    <button class="videoPoster js-videoPoster"></button>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="video_wrapper video_wrapper_full js-videoWrapper">
                                    <video width="263" height="465" class="video1" controls>
                                        <source src="https://detox.pk/videos/review_2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <iframe width="263" height="465" class="videoIframe js-videoIframe" src="" frameborder="0"
                                 allowTransparency="true" allowfullscreen
                                     data-src="https://www.youtube.com/embed/haRCpUOCG_M?autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0&color=white"></iframe> */}
                                    <button class="videoPoster js-videoPoster"></button>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="video_wrapper video_wrapper_full js-videoWrapper">
                                    <video width="263" height="465" class="video1" controls>
                                        <source src="https://detox.pk/videos/review_3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <iframe width="263" height="465" class="videoIframe js-videoIframe" src="" frameborder="0"
                                     allowTransparency="true" allowfullscreen
                                      data-src="https://www.youtube.com/embed/haRCpUOCG_M?autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0&color=white"></iframe> */}
                                    <button class="videoPoster js-videoPoster"></button>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="video_wrapper video_wrapper_full js-videoWrapper">
                                    <video width="263" height="465" class="video1" controls>
                                        <source src="https://detox.pk/videos/review_4.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <iframe width="263" height="465" class="videoIframe js-videoIframe" src="" frameborder="0"
                                      allowTransparency="true" allowfullscreen
                                  data-src="https://www.youtube.com/embed/haRCpUOCG_M?autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0&color=white"></iframe> */}
                                    <button class="videoPoster js-videoPoster"></button>
                                </div>
                            </div>

                        </div>
                    </div>

                </section >

                <section class="about-right-detox" style={{ display: 'none' }}>
                    <div class="container">
                        <h1>What People say about Right Detox*</h1>
                        <div class="row">
                            <div class="gallery">
                                <div class="gallery-container">
                                    <img class="gallery-item gallery-item-1" src=" https://detox.pk/images/Nutright-Reviews-01.png"
                                        data-index="1" />
                                    <img class="gallery-item gallery-item-2" src=" https://detox.pk/images/Nutright-Reviews-02.png"
                                        data-index="2" />
                                    <img class="gallery-item gallery-item-3" src=" https://detox.pk/images/Nutright-Reviews-03.png"
                                        data-index="3" />
                                    <img class="gallery-item gallery-item-4" src=" https://detox.pk/images/Nutright-Reviews-04.png"
                                        data-index="4" />
                                    <img class="gallery-item gallery-item-5" src=" https://detox.pk/images/Nutright-Reviews-05.png"
                                        data-index="5" />
                                </div>
                                <div class="gallery-controls"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--six section--> */}
                <section class="six-section">
                    <div class="inner-block">

                        <h2>Experience a Complete Body Transformation</h2>
                        <div class="title-hurry">Hurry!</div>
                        <div class="text">We are almost out of stock.<br />By placing your order today, we can guarantee you a <b>free gift!</b> </div>

                        <div class="product-block">
                            <img src="https://detox.pk/images/product-image.jpg" alt="" class="product-image" />
                            <img src="https://detox.pk/images/product-image.jpg" alt="" class="product-image-tablet" />
                            <img src="https://detox.pk/images/product-image.jpg" alt="" class="product-image-mobile" />
                            <img src="https://detox.pk/images/six-section-man-image.jpg" alt="" class="man-image animation"
                                data-vp-add-class="visible" data-vp-offset="200" />
                            <img src="https://detox.pk/images/six-section-woman-image.jpg" alt="" class="woman-image animation" data-vp-add-class="visible" data-vp-offset="200" />
                        </div>

                        <div class="link">
                            <a href="#form-order" class="button orange large link-button d-desktop">Place My Order!<span>100% Money Back Guarantee</span></a>
                            <a href="javascript:void(0)" class="button orange large d-mobile open-lead-form">Place My Order!<span>100% Money Back Guarantee</span></a>
                        </div>

                    </div>
                </section>
                {/* <!--end six section--> */}

                {/* <!--footer main--> */}
                {/* <footer class="footer-main">
                    <nav class="footer-menu">
                        <ul>
                            <li><a href="javascript:void(0)" class="open-popup-link" id="about">About</a></li>
                            <li><a href="javascript:void(0)" class="open-popup-link" id="faq">FAQ</a></li>
                            <li><a href="javascript:void(0)" class="open-popup-link" id="shipping">Shipping</a></li>
                            <li><a href="javascript:void(0)" class="open-popup-link" id="privacy">Privacy</a></li>
                            <li><a href="javascript:void(0)" class="open-popup-link" id="terms">Terms</a></li>
                        </ul>
                    </nav>
                    <div class="footer-gray">
                        <div class="inner-block">
                            <p>Right Detox is a registered trademark of Nutright Private Limited, Right Detox is also registered with Drug Regulatory Authority of Pakistan. Right Detox is safe to use but it is not recommended for people with pre existing diseases and people who are on medication. This product is not for use by or sale to persons under the age of 18. Right Detox helps you lose weight but for
                                more effective output (as advertised) you will have to follow the instructions that comes
                                along.</p>
                        </div>
                        <div class="inner-block">
                            <p><strong>Disclaimer: *</strong> Results may vary from person to person depending on their eating habits & medical conditions, however, the ingredients used in making of Right Detox are completely safe to consume for healthy weight loss.</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="inner-block">&copy; 2017 Right Detox. All rights reserved
                        </div>
                    </div>
                </footer> */}

                <Footer />
                <section class="footer-fixed">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="open-lead-form">
                                <img src="https://app.detox.pk/public/images/1554717726.gif" alt="home_sticky" width="100%" />
                            </a>
                        </div>
                    </div>
                </section>
            </div >
            <div class="lead-form">
                <div style={{ marginBottom: '10px' }}>
                    <img src="https://detox.pk/images/ordertoday_steps.png" alt="ordertoday_steps" width="100%" />
                    <a href="javascript:void(0)" class="close-footer-lead"><img src="/images/close_btn.png" alt="close_btn" />
                    </a>
                </div>
                <div class="container">
                    <div class="col-md-12">
                        <form action="https://detox.pk/order.php" method="post"
                            class="form-order res-from-lead" id="form-order1" validate>

                            <input type="hidden" name="product" value="Detoux" />
                            <input type="hidden" name="affiliate" value="" />
                            <input type="hidden" name="page" value="index" />
                            <input type="hidden" name="short_referrer" value="" />
                            <input type="hidden" name="long_referrer" value="" />
                            <input type="hidden" name="ref" value="" />
                            <input type="hidden" name="free" value="" />
                            <input type="hidden" name="discount" value="" />
                            <input type="hidden" name="avial" id="avial" value="0" />
                            <input type="hidden" name="pack" id="pack" value="" />
                            <div class="form-box">
                                <input name="full_name" placeholder="Full Name" type="text" class="first-name" />
                                <div class="error-message">Please enter your Full Name</div>
                            </div>
                            <div class="form-box">
                                <input name="email" placeholder="Email" type="email" />
                                <div class="error-message">Please enter your Email</div>
                            </div>
                            <div class="form-box">
                                <input name="phone" placeholder="Telephone" type="text" />
                                <div class="error-message">Please enter your Telephone</div>
                            </div>
                            <div class="form-box">
                                <input name="address1" placeholder="Street Address" type="text" />
                                <div class="error-message">Please enter your Street Address</div>
                            </div>
                            <div class="form-box">
                                <input name="city" placeholder="City" type="text" />
                                <div class="error-message">Please enter your City</div>
                            </div>
                            <button type="submit" class="button large submit-form x-red">Place My Order!</button>
                        </form>
                    </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <img src="https://detox.pk/images/home_sticky_banner.jpg" alt="home_sticky_banner" width="100%" />
                </div>
            </div>

            <section class="popup-wrapper" style={{ display: 'none' }}>
                {/* <!--popup about--> */}
                <div id="popup-about" class="popup" style={{ display: 'none' }}>
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>About Us</h2>
                        </header>
                        <h3>Right Detox</h3>
                        <p>Right Detox is dedicated to providing our customers
                            with all-natural supplements that offer incredible results with
                            continual use.</p>
                        <h3>BOOST FAT LOSS, INCREASE LEAN MUSCLE MASS</h3>
                        <p>Weight-loss can be a lifelong struggle for many men and women. By
                            taking Right Detox you will benefit your body by decreasing
                            your fat percentage and promoting lean muscle growth. Not only will you
                            look better, you will strongly benefit your health by reducing the risk
                            of low blood pressure and other weight related diseases.</p>
                        <p>Claim your FREE Right Detox bottle and see for yourself just how effective it is. What have you
                            got to
                            lose?</p>
                        <footer><a class="button small green close-popup-link"
                            href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>
                {/* <!--end popup about-->
            <!--popup faq--> */}
                <div id="popup-faq" class="popup" style={{ display: 'none' }}>
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>Frequently Asked Questions</h2>
                        </header>
                        <h3>GENERAL</h3>
                        <h4>What is Right Detox and why should I use it?</h4>
                        <p>Right Detox is premium quality weight loss extract which helps to breakdown stored
                            fat and keep it off. At the same, Right Detox extract promotes lean muscle growth
                            for a healthy, toned body. Right Detox is a great option for those looking for a product
                            that uses only the best quality natural herbs for maximum results.</p>
                        <h4>Is it safe to use?</h4>
                        <p>Definitely, Right detox has been made with pure and organic herbs. The natural based formula
                            of Right Detox is safe to take on a daily basis. In fact, the recommended dose is 2 tablets
                            per day.. As with any dietary supplement, consult a health care professional prior to
                            consumption
                            if you have any pre-existing medical conditions or are taking any prescription medication.</p>
                        <h4>What type of results should I expect?</h4>
                        <p>The recommended dose is 2 tablets per day. Each bottle of Right Detox offers a full month's
                            supply
                            (60 capsules). The recommended dosage should be taken orally, preferably after meal.</p>
                        <h4>What is it made of?</h4>
                        <p>Right Detox contains 450mg of active weight loss herbal detox extract. The supplement contains
                            100%
                            pure extract produced from organic herbs, and the serving size is 2 tablets per day.</p>
                        <h3>SHIPPING &amp; DELIVERY</h3>
                        <h4>What shipping methods are available?</h4>
                        <p>For all Right Detox orders we offer the following shipping method:</p>
                        <p>We ship with TCS Cash on Delivery. Delivery takes 2-4 business days depending on your location.
                        </p>
                        <h4>How do I track my Right Detox shipments?</h4>
                        <p>Tracking your Right Detox orders is easy. Once your order is confirmed, we will send you an email
                            with
                            your order details and once we ship we send you an SMS containing tracking code.</p>
                        <h4>Need help and can't find a related question here?</h4>
                        <p>Have a question not listed here? Contact us and we'll help you with whatever you need.</p>
                        <p>Call: 032-111-000-22 or drop us an email at info@nutright.com</p>
                        <footer><a class="button small green close-popup-link" href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>
                {/* <!--end popup faq-->
            <!--popup shipping--> */}
                <div id="popup-shipping" class="popup">
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>Shipping Policy</h2>
                        </header>
                        <h3>Shipping Methods</h3>
                        <p>We ship with TCS Cash on Delivery. Delivery takes 2-4 business
                            days depending on your location. For international orders, it can take
                            upto an additional 3-5 business days. All orders are shipped with
                            insurance and delivery is guaranteed.</p>
                        <h3>RETURNS</h3>
                        <p>All orders are secured with a 15-Day Money Back Guarantee.</p>
                        <p>To return your order for a full refund, simply contact us for a
                            RMA Return Merchandise Authorization number, and we'll give you
                            instructions on how to return your order to our warehouse for a full
                            refund.</p>
                        <footer><a class="button small green close-popup-link" href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>
                {/* <!--end popup shipping-->

            <!--popup pravicy--> */}
                <div id="popup-privacy" class="popup">
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>Privacy Policy</h2>
                        </header>
                        <h4>Right Detox &ndash; Privacy Statement &amp; Terms of Use</h4>
                        <h4>In using this website you are deemed to have read and agreed to the following terms and
                            conditions:</h4>
                        <p>The following terminology applies to these Terms and Conditions,
                            Privacy Statement and Disclaimer Notice and any or all Agreements:
                            "Client", “You” and “Your” refers to you, the person accessing this
                            website and accepting the Company’s terms and conditions. “Pure Natural
                            Detox, "The Company", “Ourselves”, “We” and "Us", refers to
                            our Company. “Party”, “Parties”, or “Us”, refers to both the Client and
                            ourselves, or either the Client or ourselves. All terms refer to the
                            offer, acceptance and consideration of payment necessary to undertake
                            the process of our assistance to the Client in the most appropriate
                            manner, whether by formal meetings of a fixed duration, or any other
                            means, for the express purpose of meeting the Client’s needs in respect
                            of provision of the Company’s stated services/products, in accordance
                            with and subject to, prevailing English Law. Any use of the above
                            terminology or other words in the singular, plural, capitalisation
                            and/or he/she or they, are taken as interchangeable and therefore as
                            referring to same.</p>
                        <h4>Privacy Statement</h4>
                        <p>Right Detox is committed to protecting your
                            privacy. Authorized employees within the company on a need to know basis
                            only use any information collected from individual customers. We
                            constantly review our systems and data to ensure the best possible
                            service to our customers.</p>
                        <h4>Confidentiality</h4>
                        <p>Any information concerning the Client and their respective Client
                            Records may be passed to third parties. However, Client records are
                            regarded as confidential and therefore will not be divulged to any third
                            party. Clients have the right to request sight of, and copies of any
                            and all Client Records we keep, on the proviso that we are given
                            reasonable notice of such a request. Clients are requested to retain
                            copies of any literature issued in relation to the provision of our
                            services. Where appropriate, we shall issue Client’s with appropriate
                            written information, handouts or copies of records as part of an agreed
                            contract, for the benefit of both parties.</p>
                        <p><b><i>We will not sell, share, or rent your personal information
                            to any third party or use your e-mail address for unsolicited mail. Any
                            emails sent by this Company will only be in connection with the
                            provision of agreed services and products.</i></b></p>
                        <h3>Disclaimer</h3>
                        <h4>Exclusions and Limitations</h4>
                        <p>The information on this web site is provided on an "as is" basis. To the fullest extent permitted
                            by law,
                            this Company:</p>
                        <p>- excludes all representations and warranties relating to this
                            website and its contents or which is or may be provided by any
                            affiliates or any other third party, including in relation to any
                            inaccuracies or omissions in this website and/or the Company’s
                            literature; and</p>
                        <p>- excludes all liability for damages arising out of or in
                            connection with your use of this website. This includes, without
                            limitation, direct loss, loss of business or profits (whether or not the
                            loss of such profits was foreseeable, arose in the normal course of
                            things or you have advised this Company of the possibility of such
                            potential loss), damage caused to your computer, computer software,
                            systems and programs and the data thereon or any other direct or
                            indirect, consequential and incidental damages.</p>
                        <p>This Company does not however exclude liability for death or
                            personal injury caused by its negligence. The above exclusions and
                            limitations apply only to the extent permitted by law. None of your
                            statutory rights as a consumer are affected.</p>
                        <h4>Log Files</h4>
                        <p>We use IP addresses to analyse trends, administer the site, track
                            user’s movement, and gather broad demographic information for aggregate
                            use. IP addresses are not linked to personally identifiable
                            information. Additionally, for systems administration, detecting usage
                            patterns and troubleshooting purposes, our web servers automatically log
                            standard access information including browser type, access times/open
                            mail, URL requested, and referral URL. This information is not shared
                            with third parties and is used only within this Company on a
                            need-to-know basis. Any individually identifiable information related to
                            this data will never be used in any way different to that stated above
                            without your explicit permission.</p>
                        <h4>Cookies</h4>
                        <p>Like most interactive web sites this Company’s website uses
                            cookies to enable us to retrieve user details for each visit. Cookies
                            are used in some areas of our site to enable the functionality of this
                            area and ease of use for those people visiting. Some of our affiliate
                            partners may also use cookies.</p>
                        <h4>Links to this website</h4>
                        <p>You may not create a link to any page of this website without our
                            prior written consent. If you do create a link to a page of this
                            website you do so at your own risk and the exclusions and limitations
                            set out above will apply to your use of this website by linking to it.</p>
                        <h4>Links from this website</h4>
                        <p>We do not monitor or review the content of other party’s websites
                            which are linked to from this website. Opinions expressed or material
                            appearing on such websites are not necessarily shared or endorsed by us
                            and should not be regarded as the publisher of such opinions or
                            material. Please be aware that we are not responsible for the privacy
                            practices, or content, of these sites. We encourage our users to be
                            aware when they leave our site &amp; to read the privacy statements of
                            these sites. You should evaluate the security and trustworthiness of any
                            other site connected to this site or accessed through this site
                            yourself, before disclosing any personal information to them. This
                            Company will not accept any responsibility for any loss or damage in
                            whatever manner, howsoever caused, resulting from your disclosure to
                            third parties of personal information.</p>
                        <h4>Copyright Notice</h4>
                        <p>Copyright and other relevant intellectual property rights exists
                            on all text relating to the Company’s services and the full content of
                            this website.</p>
                        <h4>Communication</h4>
                        <p>We have several different e-mail addresses for different queries.
                            These, &amp; other contact information, can be found on our Contact Us
                            link on our website.</p>
                        <h4>General</h4>
                        <p>By accessing this website you consent to these terms and
                            conditions. If any of these terms are deemed invalid or unenforceable
                            for any reason (including, but not limited to the exclusions and
                            limitations set out above), then the invalid or unenforceable provision
                            will be severed from these terms and the remaining terms will continue
                            to apply. Failure of the Company to enforce any of the provisions set
                            out in these Terms and Conditions, or failure to exercise any option to
                            terminate, shall not be construed as waiver of such provisions and shall
                            not affect the validity of these Terms and Conditions or of any
                            Agreement or any part thereof, or the right thereafter to enforce each
                            and every provision. These Terms and Conditions shall not be amended,
                            modified, varied or supplemented except in writing and signed by duly
                            authorised representatives of the Company.</p>
                        <h4>Notification of Changes</h4>
                        <p>The Company reserves the right to change these conditions from
                            time to time as it sees fit and your continued use of the site will
                            signify your acceptance of any adjustment to these terms. If there are
                            any changes to our privacy policy, we will announce that these changes
                            have been made on our home page and on other key pages on our site. If
                            there are any changes in how we use our site customers’ Personally
                            Identifiable Information, notification by e-mail or postal mail will be
                            made to those affected by this change. Any changes to our privacy policy
                            will be posted on our web site 15 days prior to these changes taking
                            place. You are therefore advised to re-read this statement on a regular
                            basis</p>
                        <p><b><i>These terms and conditions form part of the Agreement
                            between the Client and ourselves. Your accessing of this website and/or
                            undertaking of a booking or Agreement indicates your understanding,
                            agreement to and acceptance, of the Disclaimer Notice and the full Terms
                            and Conditions contained herein. Your statutory Consumer Rights are
                            unaffected.</i></b></p>
                        <footer><a class="button small green close-popup-link" href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>
                {/* <!--end popup pravicy-->

            <!--popup contact us--> */}
                <div id="popup-contact-us" class="popup">
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>Contact Us</h2>
                        </header>
                        <p>Have a question you’d like to ask? We’re here to address any inquiry you may have.<br />Simply fill
                            out the
                            form below and we will get back to you within a few hours.</p>
                        <p class="invisible">Your message has been sent successfully!</p>
                        <a href="javascript:void(0)" class="invisible">Come Back</a>
                        <form class="form-popup" id="form-contact-us" method="post"
                            action="/contact_us_handler.php" novalidate="novalidate">
                            <input type="hidden" value="en" name="lang_contact_us" />
                            <div class="form-box">
                                <input type="text" placeholder="Email Address" name="contactEmail" />
                                <div class="error-message">Please enter your Email Address</div>
                            </div>
                            <div class="form-box">
                                <input type="text" placeholder="Telephone" name="contactPhone" />
                                <div class="error-message">Please enter your Telephone</div>
                            </div>
                            <div class="form-box">
                                <select name="contactMsgTopic">
                                    <option selected="selected">Message Topic</option>
                                    <option>Customer Service</option>
                                    <option>Billing</option>
                                    <option>Business Offers</option>
                                    <option>Report Spam</option>
                                    <option>Affiliate</option>
                                </select>
                                <div class="error-message">Please select Message Topic</div>
                            </div>
                            <div class="form-box">
                                <textarea rows="10" cols="30" name="contactMessage"></textarea>
                            </div>
                            <button class="button orange large link-button" type="submit">Send</button>
                        </form>
                        <footer><a class="button small green close-popup-link"
                            href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>
                {/* <!--end popup contact us-->
                <!--popup terms--> */}
                <div id="popup-terms" class="popup">
                    <div class="popup-inner">
                        <a class="close-popup-link" href="javascript:void(0)"></a>
                        <header>
                            <h2>Terms and Conditions</h2>
                        </header>
                        <h3>CAREFULLY READ AND UNDERSTAND THESE TERMS BEFORE ORDERING ANY PRODUCT THROUGH THIS WEBSITE</h3>
                        <p>ATTENTION: This is a legal agreement (the "Agreement") between You, the individual, company
                            or organization ("you," "your," or "Customer") and our website ("we," "our", "Company"). By
                            ordering, accessing, using or purchasing a Right Detox ("Product") through this website or
                            related
                            websites (collectively the "Website"), you are agreeing to be bound by, and are becoming a party
                            to, this Agreement. We may at our sole and absolute discretion change, add, modify, or delete
                            portions of this Agreement at any time without notice. It is your sole responsibility to review
                            this
                            Agreement for changes prior to use of the Website or purchase of the Product. </p>
                        <p>IT IS STRONGLY RECOMMENDED THAT YOU REVIEW THIS DOCUMENT IN ITS ENTIRETY
                            BEFORE ACCESSING, USING OR BUYING ANY PRODUCT THROUGH THE WEBSITE AND
                            PRINT A COPY FOR YOUR RECORDS. </p>
                        <h3>Health Disclaimer</h3>
                        <p>This product is not intended to diagnose, treat, cure or prevent any disease. If you are
                            pregnant,
                            nursing, taking medication, or have a history of heart conditions we suggest consulting with a
                            physician before using any of our products. The results on all products are not typical and not
                            everyone will experience these results. Customer Service phone: 032-111-000-22</p>
                        <h3>Terms and Conditions</h3>
                        <p>Please carefully read the following terms and conditions as when you purchase any of the
                            products from our web site, you agree and are bound to the following terms and conditions. </p>
                        <p>This Agreement is between our website and you ("you" or "Customer") This Section sets forth the
                            terms and conditions which apply to the use by you of the website (as defined below) and any
                            other subscription product or service offered for sale by our website and/or its affiliates.
                        </p>
                        <p>The right to use any product or service offered by our website is personal to you and is not
                            transferable to any other person or entity. We reserves the right to make changes to the
                            website,
                            policies, and these terms at any time without notice.</p>
                        <h3>Products Offered</h3>
                        <p>Products are offered in varying packages for purchase as follows:</p>
                        <ul>
                            <li>One Time Purchase of a 1 Month Supply for PKR 1,995/-</li>
                            <li>One Time Purchase of a 3 Month Supply PKR 3,995/-</li>
                            <li>One Time Purchase of a 5 Month Supply PKR 5,995/-</li>
                            <li>Diet Plan for a Month PKR 495/-</li>
                        </ul>
                        <h3>Disclaimer of Warranty; Limitation of Liability</h3>
                        <p>This website neither endorses nor is responsible for the accuracy or reliability of any opinion,
                            advice or statement on the website. Under no circumstances are we liable for any loss or damage
                            caused by your reliance on information obtained through the content on the website. It is your
                            responsibility to evaluate the accuracy, completeness or usefulness of any information, opinion,
                            advice or other content available through the website. Please seek the advice of professionals,
                            as
                            appropriate, regarding the evaluation of any specific information, opinion, advice or other
                            content,
                            including but not limited to financial, health, or lifestyle information, opinion, advice or
                            other
                            content. </p>
                        <h3>Indemnification</h3>
                        <p>You agree to defend, indemnify and hold harmless our website, its affiliates and their respective
                            directors, officers, employees and agents from and against all claims and expenses, including
                            attorneys' fees, arising out of the use by you of the website, including claims by other users,
                            access, products or memberships.</p>
                        <h3>Refund/Return Policy</h3>
                        <p>In order to obtain your full refund, fill out the refund form with in 15 days of your order. You
                            have
                            fifteen (15) days from the date you originally ordered to fill refund form and send back the
                            parcel.
                            This form will be emailed to you, and includes our warehouse address and instructions on how to
                            return
                            your merchandise for a full refund. In order for your full refund to be processed the product
                            must
                            arrive at our fulfilment facility within fifteen (15) days of the original purchase date. You
                            pay for
                            return shipping and shipping. There is a PKR 500/- restocking fee per jar you are returning and
                            we will
                            also deduct PKR 150/- shipping charges. This fee will be taken out of the refund issued. Your
                            refund
                            will be credited back to your bank account, and may take up to 3-5 business days to show in your
                            statement, depending on the speed of the processing bank.</p>
                        <p>You may request a refund by calling 032-111-000-22.<br />Monday to Friday 11AM to 8PM
                            PST.<br />Saturday 12AM-6PM.</p>
                        <p>We are closed on Sunday.</p>
                        <p>All returns must be shipped within 15 days.</p>
                        <p>Customer Service phone: 032-111-000-22</p>
                        <h3>Ingredients</h3>
                        <p>All products sold on the website are produce and manufactured in an approved facility that
                            follows
                            all good manufacturing practices. Raw materials are of the highest quality for optimum potency.
                        </p>
                        <h3>Legal Disclaimer</h3>
                        <p>These products are not intended to diagnose, treat, cure or prevent any illness or disease.
                            Consult
                            with your physician for diagnosis or treatment. Use herbs as per instructions and always watch
                            for
                            any allergic reactions.</p>
                        <p>The information presented on this site is not presented with the intention of diagnosing any
                            disease or condition or prescribing any treatment. It is offered as information only, for use in
                            the
                            maintenance and promotion of good health in cooperation with a licensed medical practitioner.
                        </p>
                        <p>In the event that any individual should use the information presented on this website without a
                            licensed medical practitioner's approval, that individual will be diagnosing for him or herself.
                        </p>
                        <h3>Shipping &amp; Handling</h3>
                        <p>The standard ground mail service is shipped via United States Postal Service First Class Mail.
                            Packages will arrive within 3-5 business days. Please be advised that shipments are not sent out
                            on Saturdays, Sundays, or any Holidays. We do not guarantee arrival dates or times.</p>
                        <h3>Safety Guidelines</h3>
                        <p>Before using an herb you are unfamiliar with, find out its medicinal properties. Research it
                            thoroughly and/or consult with an appropriately qualified practitioner or expert. If you are
                            taking
                            prescription drugs, or have a medical condition, check with an appropriately qualified
                            practitioner
                            before using herbs medicinally. Herbs have shown overwhelming evidence that they work. Just
                            because a small amount works well does NOT mean that more is better. As individuals we all have
                            different constitutions, sensitivities, allergic reactions and possible health conditions. The
                            following
                            are merely guidelines. They include herbs offered on our websites. This list does not help with
                            administering information on possible interactions and contraindications with prescription
                            medicine.
                            This needs to be discussed with your physician.</p>
                        <p>Before using an herb you are unfamiliar with, find out its medicinal properties. Research it
                            thoroughly and/or consult with an appropriately qualified practitioner or expert. If you are
                            taking
                            prescription drugs, or have a medical condition, check with an appropriately qualified
                            practitioner
                            before using herbs medicinally. Herbs have shown overwhelming evidence that they work. Just
                            because a small amount works well does NOT mean that more is better. As individuals we all have
                            different constitutions, sensitivities, allergic reactions and possible health conditions. The
                            following
                            are merely guidelines. They include herbs offered on our websites. This list does not help with
                            administering information on possible interactions and contraindications with prescription
                            medicine.
                            This needs to be discussed with your physician.
                            Should I check with my doctor or healthcare provider before using a supplement? This is a good
                            idea, especially for certain population groups. Dietary supplements may not be risk-free under
                            certain circumstances. If you are pregnant, nursing a baby, or have a chronic medical condition,
                            such as, diabetes, hypertension or heart disease, be sure to consult your doctor or pharmacist
                            before purchasing or taking any supplement. While vitamin and mineral supplements are widely
                            used and generally considered safe, you may wish to check with your doctor or pharmacist before
                            taking these or any other dietary supplements. If you plan to use a dietary supplement in place
                            of
                            drugs or in combination with any drug, tell your health care provider first. Many supplements
                            contain active ingredients that have strong biological effects and their safety is not always
                            assured
                            in all users. If you have certain health conditions and take these products, you may be placing
                            yourself at risk.
                        </p>
                        <h3>Reversals and Chargebacks</h3>
                        <p>Customer satisfaction is our main priority, and we are always interested in making our customers
                            experience with our products enjoyable and convenient. If you would like to request custom
                            arrangements for your account, such as bulk orders, and/or ordering additional products, just
                            call
                            our customer service representatives and we will be happy to discuss your account with you. We
                            cannot accommodate every request, but we do our best to accommodate where possible. To
                            ensure the highest quality customer care, and to be sure that your order is handled correctly,
                            your
                            call will be recorded and archived for future reference.</p>
                        <h3>Representations</h3>
                        <p>You hereby represent and warrant that:</p>
                        <p>
                            1. You are age eighteen (18) or older.<br />
                            2. You have read this Agreement and thoroughly understand the terms contained.<br />
                            3. You further represent that our website has the right to rely upon all information and may
                            contact
                            you by email, telephone or postal mail for any purpose regarding the use of this website.</p>
                        <h3>ENTIRE AGREEMENT:</h3>
                        <p>This Agreement sets forth the entire agreement between the parties. You acknowledge and agree
                            that You have reviewed this Agreement in its entirety, and every part thereof, and that You
                            understand the Agreement. You further acknowledge and agree that You have had the opportunity
                            to review this Agreement and otherwise consult with Your independent counsel as to the
                            Agreement. </p>
                        <footer><a class="button small green close-popup-link" href="javascript:void(0)">Close</a></footer>
                    </div>
                </div>

                {/* <!--end popup terms--> */}
            </section>
        </div >
    )
}

export default TopSection
