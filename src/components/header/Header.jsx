
// import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
// import $ from 'jquery';

// const Header = () => {
//     useEffect(() => {
//         // Fixed header on scroll
//         const handleScroll = () => {
//             if ($(window).scrollTop() > 1) {
//                 $('.header-main').addClass('fixed');
//                 $('.header-main .contacts').hide();
//             } else {
//                 $('.header-main').removeClass('fixed');
//                 $('.header-main .contacts').show();
//             }
//         };

//         $(window).on('scroll', handleScroll);

//         // Menu link toggle
//         $('.header-main .menu .menu-link').on('click', function () {
//             $(this).toggleClass('active');
//             $(this).prev('ul').toggleClass('open').slideToggle();
//         });

//         // Smooth scroll for nav links
//         const navLinks = $('.scroll-menu ul li a');
//         navLinks.on('click', function (e) {
//             e.preventDefault();
//             const target = $(this).attr('href');
//             $('html, body').animate(
//                 {
//                     scrollTop: $(target).offset().top - 78,
//                 },
//                 500
//             );
//         });

//         // Cleanup event listeners on unmount
//         return () => {
//             $(window).off('scroll', handleScroll);
//             $('.header-main .menu .menu-link').off('click');
//             navLinks.off('click');
//         };
//     }, []);

//     return (
//         <header className="header-main">
//             <div className="header-bottom clearfix">
//                 <div className="inner-block">
//                     <div className="logo left">
//                         <a href="/">
//                             <img style={{ width: '110px' }} src="https://detox.pk/images/logo.png" alt="Logo" />
//                         </a>
//                     </div>
//                     <a
//                         href="#form-order"
//                         className="button orange small right link-button d-desktop"
//                     >
//                         Order Now
//                     </a>
//                     <nav className="menu scroll-menu right">
//                         <ul className="clearfix">
//                             <li>
//                                 <Link to="top-section" smooth className="link-home">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="second-section" smooth className="link">
//                                     What is Detox?
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="third-section" smooth className="link active">
//                                     How It Works
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="fourth-section" smooth className="link">
//                                     Ingredients
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="fifth-section" smooth className="link">
//                                     Testimonials
//                                 </Link>
//                             </li>
//                         </ul>
//                         <a href="javascript:void(0)" className="menu-link">
//                             <span className="top"></span>
//                             <span className="middle"></span>
//                             <span className="bottom"></span>
//                         </a>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// };


// export default Header;











import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import $ from 'jquery';

const Header = () => {
    useEffect(() => {
        // Fixed header on scroll
        const handleScroll = () => {
            if ($(window).scrollTop() > 1) {
                $('.header-main').addClass('fixed');
                $('.header-main .contacts').hide();
            } else {
                $('.header-main').removeClass('fixed');
                $('.header-main .contacts').show();
            }
        };

        $(window).on('scroll', handleScroll);

        // Menu link toggle
        $('.header-main .menu .menu-link').on('click', function () {
            $(this).toggleClass('active');
            $(this).prev('ul').toggleClass('open').slideToggle();
        });

        // Cleanup event listeners on unmount
        return () => {
            $(window).off('scroll', handleScroll);
            $('.header-main .menu .menu-link').off('click');
        };
    }, []);

    return (
        <header className="header-main">
            <div className="header-bottom clearfix">
                <div className="inner-block">
                    <div className="logo left">
                        <a href="/">
                            <img style={{ width: '110px' }} src="https://detox.pk/images/logo.png" alt="Logo" />
                        </a>
                    </div>
                    <a
                        href="#form-order"
                        className="button orange small right link-button d-desktop"
                    >
                        Order Now
                    </a>
                    <nav className="menu scroll-menu right">
                        <ul className="clearfix">
                            <li>
                                <ScrollLink to="top-section" smooth={true} duration={0} className="link-home">
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="second-section" smooth={true} duration={0} className="link">
                                    What is Detox?
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="third-section" smooth={true} duration={0} className="link active">
                                    How It Works
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="fourth-section" smooth={true} duration={0} className="link">
                                    Ingredients
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="fifth-section" smooth={true} duration={0} className="link">
                                    Testimonials
                                </ScrollLink>
                            </li>
                        </ul>
                        <a href="javascript:void(0)" className="menu-link">
                            <span className="top"></span>
                            <span className="middle"></span>
                            <span className="bottom"></span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
