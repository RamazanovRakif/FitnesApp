import React, { Component } from "react";
import "./Content.css";
import image from "../../../../images/grid1.jpg";
import image2 from "../../../../images/grid2.jpg";
import image3 from "../../../../images/grid3.jpg";
import image4 from "../../../../images/grid4.jpg";
import UserConsumer from "../../../../context/context";

export default class Content extends Component {
  render() {
    return (
      <UserConsumer>
        {value=>{
          const {gymContent}=value;
          return(
            <section className="main-top">
            <div className="container-fluid p-0">
              <div className="gym-content">
                    {gymContent.map(content=>{
                      return(
                        <div className="gym--content-item" key={content.id}>
                        <img src={require(`../../../../images/${content.img}`)} alt="" />
                      <div className="gym--content--overlay"></div>
                      <div className="gym--content--details">
                          <p className="gym--content--title">{content.title}</p>
                      </div>
                    </div>
                      )
                    })}
               
    
              </div>
            </div>
          </section>
    
          )
        }}
      </UserConsumer>
         );
  }
}
