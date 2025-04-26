import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [popup, setPopup] = useState('');
  const [bodyStyle, setBodyStyle] = useState({});

  useEffect(() => {
    if (popup) {
      setBodyStyle({ overflow: 'hidden', height: '100%' });
    } else {
      setBodyStyle({ overflow: 'auto', height: 'auto' });
    }
  }, [popup]);

  const openPopup = (popupId) => {
    setPopup(popupId);
  };

  const closePopup = () => {
    setPopup('');
  };

  const handleKeyDown = (event) => {
    if (popup && event.key === 'Escape') {
      closePopup();
    }
  };

  const handleMouseUp = (event) => {
    if (popup && !event.target.closest('.popup')) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [popup]);

  return (
    <div style={bodyStyle}>
      <div className="second-section section" id="second-section">
        <footer className="footer-main">
          <nav className="footer-menu">
            <ul>
              <li><a href="#" onClick={() => openPopup('about')} className="open-popup-link">About</a></li>
              <li><a href="#" onClick={() => openPopup('faq')} className="open-popup-link">FAQ</a></li>
              <li><a href="#" onClick={() => openPopup('shipping')} className="open-popup-link">Shipping</a></li>
              <li><a href="#" onClick={() => openPopup('privacy')} className="open-popup-link">Privacy</a></li>
              <li><a href="#" onClick={() => openPopup('terms')} className="open-popup-link">Terms</a></li>
            </ul>
          </nav>
          <div className="footer-gray">
            <div className="inner-block">
              <p>Right Detox is a registered trademark of Nutright Private Limited, Right Detox is also registered with Drug Regulatory Authority of Pakistan. Right Detox is safe to use but it is not recommended for people with pre-existing diseases and people who are on medication. This product is not for use by or sale to persons under the age of 18. Right Detox helps you lose weight but for more effective output (as advertised) you will have to follow the instructions that come along.</p>
            </div>
            <div className="inner-block">
              <p><strong>Disclaimer: *</strong> Results may vary from person to person depending on their eating habits & medical conditions; however, the ingredients used in making of Right Detox are completely safe to consume for healthy weight loss.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="inner-block">&copy; 2017 Right Detox. All rights reserved</div>
          </div>
        </footer>

        <section className="footer-fixed">
          <div className="container">
            <div className="row">
              <a href="#" className="open-lead-form"><img src="https://app.detox.pk/public/images/1554717726.gif" alt="home_sticky" width="100%" /></a>
            </div>
          </div>
        </section>
      </div>

      <section className="popup-wrapper" style={{ display: popup ? 'block' : 'none' }}>
        {['about', 'faq', 'shipping', 'privacy', 'terms'].map((popupId) => (
          <div
            key={popupId}
            id={`popup-${popupId}`}
            className="popup"
            style={{ display: popup === popupId ? 'block' : 'none' }}>
            <div className="popup-inner">
              <a className="close-popup-link" href="#" onClick={closePopup}></a>
              <header>
                <h2>{popupId.charAt(0).toUpperCase() + popupId.slice(1)}</h2>
              </header>
              <footer>
                <a className="button small green close-popup-link" href="#" onClick={closePopup}>
                  Close
                </a>
              </footer>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Footer;
