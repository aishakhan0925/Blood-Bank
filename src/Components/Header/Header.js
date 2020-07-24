import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import style from "./Header.module.css";

export default class Header extends Component {
  render() {
    const fadeImages = [
      "Assets/Images/img1.jpg",
      "Assets/Images/img2.jpg",
      "Assets/Images/img3.jpg",
    ];
    return (
      <div className={style.header}>
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
