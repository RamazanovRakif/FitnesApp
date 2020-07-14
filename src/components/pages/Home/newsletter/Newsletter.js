import React from "react";
import "../newsletter/Newsletter.scss";
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__form section-gap">
        <div className="wrapper">
          <div className="newsletter__subscriptions d-grid">
            <div className="newsletter__subscription__left">
              <div className="header__title__full">
                <h4 className="header__title">
                  <span className="sub-title">Lets Stay In Touch</span>
                  Subscribe Our Newsletter
                </h4>
              </div>
            </div>
            <div className="newsletter__subscription__right">
              <form action="#" method="post" className="sign__in">
                <div className="form__content d-grid">
                  <div className="form__content__input">
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      
                    />
                  </div>
                  <div className="form__content__input">
                    <button className="newsletter__btn">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
