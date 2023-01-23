import AOS from "aos";
import React, { Component } from "react";
import "./aos.css";

export default class IntroProject extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return <div data-aos="fade-right">프로젝트 소개</div>;
  }
}
