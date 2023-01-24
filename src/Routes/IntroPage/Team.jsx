import AOS from "aos";
import React, { useEffect } from "react";
import "./aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div data-aos="fade-left">팀원 소개</div>;
}
