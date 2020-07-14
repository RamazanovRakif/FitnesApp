import React, { Component } from "react";
import "./PopularClasses.scss";
import image1 from "../../../../images/g1.jpg"
import image2 from "../../../../images/grid3.jpg"
import image3 from "../../../../images/grid5.jpg"

class PopularClasses extends Component {
  render() {
    return (
      <section className="main__galery">
        <div className="main__galery__dark">
          <div className="wrapper">
            <div className="header__title__full">
              <h3 className="header__title">
                <span className="sub-title">Train With Us</span>
                Popular Classes
              </h3>
            </div>
          </div>
        
          <section className="galery__content">
            <div className="galery__content__portfolio d-grid">
              <div className="galery__content__portfolio__left">
                <a href="/">
                  <img src={image1} alt="" />
                  <div className="galery__overlay">
                    <h4>Cross Fit</h4>
                    <p>Neque porro quisqam est.</p>
                  </div>
                </a>
              </div>
              <div className="galery__content__portfolio__right">
                <div className="galery__content__portfolio__grid">
                <a href="/">
                  <img src={image2}alt="" />
                  <div className="galery__overlay ">
                    <h4>Aerobic</h4>
                    <p>Neque porro quisqam est.</p>
                  </div>
                </a>
                </div>

                <div className="galery__content__portfolio__grid">
                <a href="/">
                  <img src={image3} alt="" />
                  <div className="galery__overlay ">
                    <h4>Gym</h4>
                    <p>Neque porro quisqam est.</p>
                  </div>
                </a>
                </div>
              </div>
            </div>
            

       
          </section>
        </div>
      </section>
    );
  }
}
export default PopularClasses;
