import React, { Component } from "react";
import image from "../../../../images/ab.jpg";
import "./About.css";
import "../../../../Css/Common.scss"

export default class AboutPhotoInfo extends Component {
  render() {
    return (
      <div className="content--photo d-grid">
        <div className="content--photo--left">
          <img src={image} alt="" className="img-responsive"/>
        </div>
        <div className="content--photo--right">
        <div className="header__title__full">
                  <h4 className="header__title">
                    <span className="sub-title">Real History</span>
                    About Apt Pro
                  </h4>
                </div>
          <p className="text__paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            incidunt sequi, deleniti quas facere odio quia? Asperiores
            voluptatum magnam eligendi, eius amet beatae laudantium voluptate
            perferendis obcaecati, ab sint natus.
          </p>
          <p className="text__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus ipsam esse earum quo dolorum porro et at. Ea nulla,
            incidunt neque nam aliquid alias tenetur minima. Explicabo, quod
            quas.
          </p>
          <div className="read-more-btn">
              <a href="/" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
