import styled from "styled-components";
import 기계유망주 from "../images/Synergy/기계유망주.svg";
import 동물특공대 from "../images/Synergy/동물특공대.svg";
import 레이저단 from "../images/Synergy/레이저단.svg";
import 메카프라임 from "../images/Synergy/메카 프라임.svg";
import 민간인 from "../images/Synergy/민간인.svg";
import 별수호자 from "../images/Synergy/별 수호자.svg";
import 병기고 from "../images/Synergy/병기고.svg";
import 우세 from "../images/Synergy/우세.svg";
import 위협 from "../images/Synergy/위협.svg";
import 자동방어체계 from "../images/Synergy/자동방어체계.svg";
import 지하세계 from "../images/Synergy/지하세계.svg";
import 황소부대 from "../images/Synergy/황소부대.svg";
import 결투가 from "../images/Synergy/결투가.svg";
import 기상캐스터 from "../images/Synergy/기상캐스터.svg";
import 마스코트 from "../images/Synergy/마스코트.svg";
import 무법자 from "../images/Synergy/무법자.svg";
import 방패대 from "../images/Synergy/방패대.svg";
import 선의 from "../images/Synergy/선의.svg";
import 싸움꾼 from "../images/Synergy/싸움꾼.svg";
import 엄호대 from "../images/Synergy/엄호대.svg";
import 에이스 from "../images/Synergy/에이스.svg";
import 익살꾼 from "../images/Synergy/익살꾼.svg";
import 정찰단 from "../images/Synergy/정찰단.svg";
import 주문투척자 from "../images/Synergy/주문투척자.svg";
import 타락 from "../images/Synergy/타락.svg";
import 특등사수 from "../images/Synergy/특등사수.svg";
import 해커 from "../images/Synergy/해커.svg";
import 암흑타일 from "../images/Synergy/Tile/darken.svg";
import 브론즈타일 from "../images/Synergy/Tile/bronze.svg";
import 실버타일 from "../images/Synergy/Tile/silver.svg";
import 골드타일 from "../images/Synergy/Tile/gold.svg";
import 플래티넘타일 from "../images/Synergy/Tile/platinum.svg";

export default function SynergyImg(event) {
  switch (event) {
    case "기계유망주":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </SynergyBox>
        );
      } else if (event >= 6) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </SynergyBox>
        );
      } else break;

    case "동물특공대":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </SynergyBox>
        );
      } else if (event >= 5 && event < 7) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </SynergyBox>
        );
      } else if (event >= 7) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </SynergyBox>
        );
      } else break;

    case "레이저단":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={레이저단} alt="레이저단" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={레이저단} alt="레이저단" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 9) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={레이저단} alt="레이저단" />;
          </SynergyBox>
        );
      } else if (event >= 7) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={레이저단} alt="레이저단" />;
          </SynergyBox>
        );
      } else break;

    case "메카프라임":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </SynergyBox>
        );
      } else if (event >= 5) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </SynergyBox>
        );
      } else break;

    case "민간인":
      if (event === 1) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={민간인} alt="민간인" />;
          </SynergyBox>
        );
      } else if (event === 2) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={민간인} alt="민간인" />;
          </SynergyBox>
        );
      } else if (event === 3) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={민간인} alt="민간인" />;
          </SynergyBox>
        );
      } else break;

    case "별 수호자":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={별수호자} alt="별수호자" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={별수호자} alt="별수호자" />;
          </SynergyBox>
        );
      } else if (event >= 5 && event < 7) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={별수호자} alt="별수호자" />;
          </SynergyBox>
        );
      } else if (event >= 7 && event < 9) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={별수호자} alt="별수호자" />;
          </SynergyBox>
        );
      } else if (event >= 9) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={별수호자} alt="별수호자" />;
          </SynergyBox>
        );
      } else break;

    case "병기고":
      return (
        <SynergyBox src={골드타일}>
          <Synergy src={병기고} alt="병기고" />;
        </SynergyBox>
      );

    case "우세":
      if (event < 3) {
        <SynergyBox src={암흑타일}>
          <Synergy src={우세} alt="우세" />;
        </SynergyBox>;
      } else if (event >= 3) {
        <SynergyBox src={골드타일}>
          <Synergy src={우세} alt="우세" />;
        </SynergyBox>;
      } else break;

    case "위협":
      return (
        <SynergyBox src={골드타일}>
          <Synergy src={위협} alt="위협" />;
        </SynergyBox>
      );

    case "자동방어체계":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </SynergyBox>
        );
      } else if (event >= 6) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </SynergyBox>
        );
      } else break;
    case "지하세계":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={지하세계} alt="지하세계" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={지하세계} alt="지하세계" />;
          </SynergyBox>
        );
      } else if (event >= 5) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={지하세계} alt="지하세계" />;
          </SynergyBox>
        );
      } else break;
    case "황소부대":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={황소부대} alt="황소부대" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={황소부대} alt="황소부대" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={황소부대} alt="황소부대" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={황소부대} alt="황소부대" />;
          </SynergyBox>
        );
      } else if (event >= 8) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={황소부대} alt="황소부대" />;
          </SynergyBox>
        );
      } else break;
    case "결투가":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={결투가} alt="결투가" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={결투가} alt="결투가" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={결투가} alt="결투가" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={결투가} alt="결투가" />;
          </SynergyBox>
        );
      } else if (event >= 8) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={결투가} alt="결투가" />;
          </SynergyBox>
        );
      } else break;
    case "기상캐스터":
      return (
        <SynergyBox src={골드타일}>
          <Synergy src={기상캐스터} alt="기상캐스터" />;
        </SynergyBox>
      );
    case "마스코트":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={마스코트} alt="마스코트" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={마스코트} alt="마스코트" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={마스코트} alt="마스코트" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={마스코트} alt="마스코트" />;
          </SynergyBox>
        );
      } else if (event >= 8) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={마스코트} alt="마스코트" />;
          </SynergyBox>
        );
      } else break;
    case "무법자":
      if (event < 3) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={무법자} alt="무법자" />;
          </SynergyBox>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={무법자} alt="무법자" />;
          </SynergyBox>
        );
      } else if (event >= 6) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={무법자} alt="무법자" />;
          </SynergyBox>
        );
      } else break;
    case "방패대":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={방패대} alt="방패대" />;
          </SynergyBox>
        );
      } else if (event === 2) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={방패대} alt="방패대" />;
          </SynergyBox>
        );
      } else if (event === 3) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={방패대} alt="방패대" />;
          </SynergyBox>
        );
      } else if (event === 4) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={방패대} alt="방패대" />;
          </SynergyBox>
        );
      } else if (event >= 5) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={방패대} alt="방패대" />;
          </SynergyBox>
        );
      } else break;
    case "선의":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={선의} alt="선의" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={선의} alt="선의" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={선의} alt="선의" />;
          </SynergyBox>
        );
      } else if (event >= 6) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={선의} alt="선의" />;
          </SynergyBox>
        );
      } else break;
    case "싸움꾼":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SynergyBox>
        );
      } else if (event >= 8) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SynergyBox>
        );
      } else break;
    case "엄호대":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={엄호대} alt="엄호대" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={엄호대} alt="엄호대" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={엄호대} alt="엄호대" />;
          </SynergyBox>
        );
      } else if (event >= 6) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={엄호대} alt="엄호대" />;
          </SynergyBox>
        );
      } else break;

    case "에이스":
      if (event === 1) {
        <SynergyBox src={브론즈타일}>
          <Synergy src={에이스} alt="에이스" />;
        </SynergyBox>;
      } else if (event === 2 || event === 3) {
        <SynergyBox src={암흑타일}>
          <Synergy src={에이스} alt="에이스" />;
        </SynergyBox>;
      } else if (event >= 4) {
        <SynergyBox src={골드타일}>
          <Synergy src={에이스} alt="에이스" />;
        </SynergyBox>;
      } else break;

    case "익살꾼":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </SynergyBox>
        );
      } else if (event === 2) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </SynergyBox>
        );
      } else if (event >= 3) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </SynergyBox>
        );
      } else break;

    case "정찰단":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={정찰단} alt="정찰단" />;
          </SynergyBox>
        );
      } else if (event === 2) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={정찰단} alt="정찰단" />;
          </SynergyBox>
        );
      } else if (event === 3) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={정찰단} alt="정찰단" />;
          </SynergyBox>
        );
      } else if (event >= 4) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={정찰단} alt="정찰단" />;
          </SynergyBox>
        );
      } else break;
    case "주문투척자":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SynergyBox>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SynergyBox>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SynergyBox>
        );
      } else if (event >= 8) {
        return (
          <SynergyBox src={플래티넘타일}>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SynergyBox>
        );
      } else break;
    case "타락":
      return (
        <SynergyBox src={골드타일}>
          <Synergy src={타락} alt="타락" />;
        </SynergyBox>
      );
    case "특등사수":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={특등사수} alt="특등사수" />;
          </SynergyBox>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={특등사수} alt="특등사수" />;
          </SynergyBox>
        );
      } else if (event >= 4) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={특등사수} alt="특등사수" />;
          </SynergyBox>
        );
      } else break;
    case "해커":
      if (event < 2) {
        return (
          <SynergyBox src={암흑타일}>
            <Synergy src={해커} alt="해커" />;
          </SynergyBox>
        );
      } else if (event === 2) {
        return (
          <SynergyBox src={브론즈타일}>
            <Synergy src={해커} alt="해커" />;
          </SynergyBox>
        );
      } else if (event === 3) {
        return (
          <SynergyBox src={실버타일}>
            <Synergy src={해커} alt="해커" />;
          </SynergyBox>
        );
      } else if (event >= 4) {
        return (
          <SynergyBox src={골드타일}>
            <Synergy src={해커} alt="해커" />;
          </SynergyBox>
        );
      } else break;
    default:
      break;
  }
}

const SynergyBox = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Synergy = styled.img`
  position: absolute;
  /* top: 50%;
  left: 50%; */
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: center;
`;
