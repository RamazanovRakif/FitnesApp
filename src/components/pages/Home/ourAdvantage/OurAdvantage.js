import React, { Component } from "react";
import "./OurAdvantage.scss";
export default class OurAdvantage extends Component {
  render() {
    return (
      <section className="our__advantage__full">
        <div className="our__advantage__action section-gap">
          <div className="wrapper">
            <div className="d-grid main__content">
              <div className="our__suggestions">
                <div className="our__suggestions__items d-grid">
                  <div className="our__suggestions__item">
                    <h4>
                      <a href="/" className="item-title">
                        Flexibility and patience
                      </a>
                    </h4>
                    <p className="text__paragraph">
                      Vivamus a ligula quam. Ut blandit eu leo non suscipit.
                      Duis feugiat tortor sed.
                    </p>
                  </div>

                  <div className="our__suggestions__item">
                    <h4>
                      <a href="/" className="item-title">
                        Experienced trainers
                      </a>
                    </h4>
                    <p className="text__paragraph">
                      Vivamus a ligula quam. Ut blandit eu leo non suscipit.
                      Duis feugiat tortor sed.
                    </p>
                  </div>

                  <div className="our__suggestions__item">
                    <h4>
                      <a href="/" className="item-title">
                        Free trial session
                      </a>
                    </h4>
                    <p className="text__paragraph">
                      Vivamus a ligula quam. Ut blandit eu leo non suscipit.
                      Duis feugiat tortor sed.
                    </p>
                  </div>

                  <div className="our__suggestions__item">
                    <h4>
                      <a href="/" className="item-title">
                        Quality and security
                      </a>
                    </h4>
                    <p className="text__paragraph">
                      Vivamus a ligula quam. Ut blandit eu leo non suscipit.
                      Duis feugiat tortor sed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why__choose_us">
                <div className="header__title__full">
                  <h4 className="header__title">
                    <span className="sub-title">Why Choose Us?</span>
                    Because we’re the best
                  </h4>
                </div>
                <p className="text__paragraph">
                  Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                  nisi ac sed, lacinia est. Quisque ut lectus consequat,
                  venenatis eros et, commodo risus. Nullam sit amet laoreet
                  elit. Suspendisse non magna a velit imperdiet efficitur. Morbi
                  faucibus egestas velit sed ultricies. Ut sollicitudin
                  sollicitudin urna, vel blandit est viverra in. Aenean a rutrum
                  magna. Donec suscipit vulputate fermentum. Vestibulum ac metus
                  in mi rutrum laoreet.
                </p>
                <p className="text__paragraph">
                  In non nisi quis metus tempor efficitur a ut odio. Phasellus
                  posuere tellus in interdum venenatis. Curabitur aliquam quam
                  dictum est vestibulum aliquet, viverra in. Aenean a rutrum
                  magna.
                </p>
                <div className="read-more-btn">
                    <a href="/" className="read-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
