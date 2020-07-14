import React, { Component } from 'react'
import "./Banner.scss";
import {FaAngleDoubleRight,FaHome} from "react-icons/fa"
class Banner extends Component {
    render() {
        return (
            <section className="banner">
               
                <div className="banner_overlay">
                    <div className="banner_overlay_content">
                        <h2 className="banner_overlay_content_title">{this.props.value}</h2>
                        <div className="read-more-btn">
                            <a href="/" className="read-btn bg-gray"><span><FaHome/></span> <span><FaAngleDoubleRight/></span> {this.props.value}</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Banner