import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";

export default function IntroPage() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  };
  return (
    <SectionsContainer {...options}>
      <div>
        <Section>Welcom to Roobits</Section>
        <Section>소개 페이지</Section>
        <Section>테마 및 기능 설명</Section>
      </div>
    </SectionsContainer>
  );
}
