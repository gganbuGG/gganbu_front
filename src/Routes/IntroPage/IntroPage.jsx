import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";

export default function IntroPage() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  };
  return (
    <SectionsContainer {...options}>
      <div>
        <Section>
          <div>
            <h1>Welcom to Roobits </h1>
            <div>소중한 사람들과 추억을 남겨보세요!</div>
            <div>D-Day를 더 특별하게 만들어 드립니다.</div>
            <Link to="/">
              <button>홈으로 가기</button>
            </Link>
          </div>
        </Section>
        <Section>
          <div>소개 페이지</div>
        </Section>
        <Section>
          <div>테마 및 기능 설명</div>
        </Section>
      </div>
    </SectionsContainer>
  );
}
