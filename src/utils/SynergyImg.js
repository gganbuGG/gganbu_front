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

export default function SynergyImg(key, value) {
  switch (key) {
    case "기계유망주3":
    case "기계유망주4":
    case "기계유망주5":
      return (
        <BronzeTile>
          <Synergy src={기계유망주} alt="기계유망주" />
        </BronzeTile>
      );
    case "기계유망주6":
    case "기계유망주7":
    case "기계유망주8":
    case "기계유망주9":
      return (
        <GoldTile>
          <Synergy src={기계유망주} alt="기계유망주" />
        </GoldTile>
      );

    case "동물특공대3":
    case "동물특공대4":
      return (
        <BronzeTile>
          <Synergy src={동물특공대} alt="동물특공대" />
        </BronzeTile>
      );
    case "동물특공대5":
    case "동물특공대6":
      return (
        <GoldTile>
          <Synergy src={동물특공대} alt="동물특공대" />
        </GoldTile>
      );
    case "동물특공대7":
    case "동물특공대8":
    case "동물특공대9":
      return (
        <PlatinumTile>
          <Synergy src={동물특공대} alt="동물특공대" />
        </PlatinumTile>
      );

    case "레이저단3":
    case "레이저단4":
    case "레이저단5":
      return (
        <BronzeTile>
          <Synergy src={레이저단} alt="레이저단" />
        </BronzeTile>
      );
    case "레이저단6":
    case "레이저단7":
    case "레이저단8":
      return (
        <GoldTile>
          <Synergy src={레이저단} alt="레이저단" />
        </GoldTile>
      );
    case "레이저단9":
    case "레이저단10":
      return (
        <PlatinumTile>
          <Synergy src={레이저단} alt="레이저단" />
        </PlatinumTile>
      );

    case "메카: 프라임3":
    case "메카: 프라임4":
      return (
        <BronzeTile>
          <Synergy src={메카프라임} alt="메카프라임" />
        </BronzeTile>
      );
    case "메카: 프라임5":
    case "메카: 프라임6":
    case "메카: 프라임7":
    case "메카: 프라임8":
      return (
        <GoldTile>
          <Synergy src={메카프라임} alt="메카프라임" />
        </GoldTile>
      );

    case "민간인1":
      return (
        <BronzeTile>
          <Synergy src={민간인} alt="민간인" />
        </BronzeTile>
      );
    case "민간인2":
      return (
        <SilverTile>
          <Synergy src={민간인} alt="민간인" />
        </SilverTile>
      );
    case "민간인3":
    case "민간인4":
    case "민간인5":
      return (
        <GoldTile>
          <Synergy src={민간인} alt="민간인" />
        </GoldTile>
      );

    case "별 수호자3":
    case "별 수호자4":
      return (
        <BronzeTile>
          <Synergy src={별수호자} alt="별수호자" />
        </BronzeTile>
      );
    case "별 수호자5":
    case "별 수호자6":
      return (
        <SilverTile>
          <Synergy src={별수호자} alt="별수호자" />
        </SilverTile>
      );
    case "별 수호자7":
    case "별 수호자8":
      return (
        <GoldTile>
          <Synergy src={별수호자} alt="별수호자" />
        </GoldTile>
      );
    case "별 수호자9":
    case "별 수호자10":
    case "별 수호자11":
      return (
        <PlatinumTile>
          <Synergy src={별수호자} alt="별수호자" />
        </PlatinumTile>
      );

    case "병기고1":
      return (
        <GoldTile>
          <Synergy src={병기고} alt="병기고" />
        </GoldTile>
      );

    case "우세3":
    case "우세4":
    case "우세5":
    case "우세6":
      return (
        <GoldTile>
          <Synergy src={우세} alt="우세" />
        </GoldTile>
      );

    case "위협1":
    case "위협2":
    case "위협3":
    case "위협4":
    case "위협5":
    case "위협6":
    case "위협7":
    case "위협8":
    case "위협9":
    case "위협10":
      return (
        <GoldTile>
          <Synergy src={위협} alt="위협" />
        </GoldTile>
      );

    case "자동방어체계2":
    case "자동방어체계3":
      return (
        <BronzeTile>
          <Synergy src={자동방어체계} alt="자동방어체계" />
        </BronzeTile>
      );
    case "자동방어체계4":
    case "자동방어체계5":
      return (
        <GoldTile>
          <Synergy src={자동방어체계} alt="자동방어체계" />
        </GoldTile>
      );
    case "자동방어체계6":
    case "자동방어체계7":
    case "자동방어체계8":
    case "자동방어체계9":
      return (
        <PlatinumTile>
          <Synergy src={자동방어체계} alt="자동방어체계" />
        </PlatinumTile>
      );

    case "지하세계3":
    case "지하세계4":
      return (
        <BronzeTile>
          <Synergy src={지하세계} alt="지하세계" />
        </BronzeTile>
      );
    case "지하세계5":
    case "지하세계6":
    case "지하세계7":
    case "지하세계8":
      return (
        <GoldTile>
          <Synergy src={지하세계} alt="지하세계" />
        </GoldTile>
      );

    case "황소부대2":
    case "황소부대3":
      return (
        <BronzeTile>
          <Synergy src={황소부대} alt="황소부대" />
        </BronzeTile>
      );
    case "황소부대4":
    case "황소부대5":
      return (
        <SilverTile>
          <Synergy src={황소부대} alt="황소부대" />
        </SilverTile>
      );
    case "황소부대6":
    case "황소부대7":
      return (
        <GoldTile>
          <Synergy src={황소부대} alt="황소부대" />
        </GoldTile>
      );
    case "황소부대8":
    case "황소부대9":
    case "황소부대10":
    case "황소부대11":
      return (
        <PlatinumTile>
          <Synergy src={황소부대} alt="황소부대" />
        </PlatinumTile>
      );

    case "결투가2":
    case "결투가3":
      return (
        <BronzeTile>
          <Synergy src={결투가} alt="결투가" />
        </BronzeTile>
      );
    case "결투가4":
    case "결투가5":
      return (
        <SilverTile>
          <Synergy src={결투가} alt="결투가" />
        </SilverTile>
      );
    case "결투가6":
    case "결투가7":
      return (
        <GoldTile>
          <Synergy src={결투가} alt="결투가" />
        </GoldTile>
      );
    case "결투가8":
    case "결투가9":
    case "결투가10":
    case "결투가11":
      return (
        <PlatinumTile>
          <Synergy src={결투가} alt="결투가" />
        </PlatinumTile>
      );

    case "기상캐스터1":
      return (
        <GoldTile>
          <Synergy src={기상캐스터} alt="기상캐스터" />
        </GoldTile>
      );
    case "마스코트2":
    case "마스코트3":
      return (
        <BronzeTile>
          <Synergy src={마스코트} alt="마스코트" />
        </BronzeTile>
      );
    case "마스코트4":
    case "마스코트5":
      return (
        <SilverTile>
          <Synergy src={마스코트} alt="마스코트" />
        </SilverTile>
      );
    case "마스코트6":
    case "마스코트7":
      return (
        <GoldTile>
          <Synergy src={마스코트} alt="마스코트" />
        </GoldTile>
      );
    case "마스코트8":
    case "마스코트9":
    case "마스코트10":
    case "마스코트11":
      return (
        <PlatinumTile>
          <Synergy src={마스코트} alt="마스코트" />
        </PlatinumTile>
      );

    case "무법자3":
    case "무법자4":
    case "무법자5":
      return (
        <BronzeTile>
          <Synergy src={무법자} alt="무법자" />
        </BronzeTile>
      );
    case "무법자6":
    case "무법자7":
    case "무법자8":
    case "무법자9":
      return (
        <GoldTile>
          <Synergy src={무법자} alt="무법자" />
        </GoldTile>
      );

    case "방패대2":
      return (
        <BronzeTile>
          <Synergy src={방패대} alt="방패대" />
        </BronzeTile>
      );
    case "방패대3":
      return (
        <SilverTile>
          <Synergy src={방패대} alt="방패대" />
        </SilverTile>
      );
    case "방패대4":
      return (
        <GoldTile>
          <Synergy src={방패대} alt="방패대" />
        </GoldTile>
      );
    case "방패대5":
    case "방패대6":
    case "방패대7":
      return (
        <PlatinumTile>
          <Synergy src={방패대} alt="방패대" />
        </PlatinumTile>
      );

    case "선의2":
    case "선의3":
      return (
        <BronzeTile>
          <Synergy src={선의} alt="선의" />
        </BronzeTile>
      );
    case "선의4":
    case "선의5":
      return (
        <SilverTile>
          <Synergy src={선의} alt="선의" />
        </SilverTile>
      );
    case "선의6":
    case "선의7":
    case "선의8":
    case "선의9":
      return (
        <GoldTile>
          <Synergy src={선의} alt="선의" />
        </GoldTile>
      );

    case "싸움꾼2":
    case "싸움꾼3":
      return (
        <BronzeTile>
          <Synergy src={싸움꾼} alt="싸움꾼" />
        </BronzeTile>
      );
    case "싸움꾼4":
    case "싸움꾼5":
      return (
        <SilverTile>
          <Synergy src={싸움꾼} alt="싸움꾼" />
        </SilverTile>
      );
    case "싸움꾼6":
    case "싸움꾼7":
      return (
        <GoldTile>
          <Synergy src={싸움꾼} alt="싸움꾼" />
        </GoldTile>
      );
    case "싸움꾼8":
    case "싸움꾼9":
    case "싸움꾼10":
    case "싸움꾼11":
      return (
        <PlatinumTile>
          <Synergy src={싸움꾼} alt="싸움꾼" />
        </PlatinumTile>
      );

    case "엄호대2":
    case "엄호대3":
      return (
        <BronzeTile>
          <Synergy src={엄호대} alt="엄호대" />
        </BronzeTile>
      );
    case "엄호대4":
    case "엄호대5":
      return (
        <GoldTile>
          <Synergy src={엄호대} alt="엄호대" />
        </GoldTile>
      );
    case "엄호대6":
    case "엄호대7":
    case "엄호대8":
    case "엄호대9":
      return (
        <PlatinumTile>
          <Synergy src={엄호대} alt="엄호대" />
        </PlatinumTile>
      );

    case "에이스1":
      return (
        <BronzeTile>
          <Synergy src={에이스} alt="에이스" />
        </BronzeTile>
      );
    case "에이스2":
    case "에이스3":
      return (
        <DarkTile>
          <Synergy src={에이스} alt="에이스" />
        </DarkTile>
      );
    case "에이스4":
    case "에이스5":
    case "에이스6":
    case "에이스7":
      return (
        <GoldTile>
          <Synergy src={에이스} alt="에이스" />
        </GoldTile>
      );

    case "익살꾼2":
      return (
        <BronzeTile>
          <Synergy src={익살꾼} alt="익살꾼" />
        </BronzeTile>
      );
    case "익살꾼3":
    case "익살꾼4":
    case "익살꾼5":
    case "익살꾼6":
      return (
        <GoldTile>
          <Synergy src={익살꾼} alt="익살꾼" />
        </GoldTile>
      );

    case "정찰단2":
      return (
        <BronzeTile>
          <Synergy src={정찰단} alt="정찰단" />
        </BronzeTile>
      );
    case "정찰단3":
      return (
        <SilverTile>
          <Synergy src={정찰단} alt="정찰단" />
        </SilverTile>
      );
    case "정찰단4":
    case "정찰단5":
    case "정찰단6":
    case "정찰단7":
      return (
        <GoldTile>
          <Synergy src={정찰단} alt="정찰단" />
        </GoldTile>
      );

    case "주문투척자2":
    case "주문투척자3":
      return (
        <BronzeTile>
          <Synergy src={주문투척자} alt="주문투척자" />
        </BronzeTile>
      );
    case "주문투척자4":
    case "주문투척자5":
      return (
        <SilverTile>
          <Synergy src={주문투척자} alt="주문투척자" />
        </SilverTile>
      );
    case "주문투척자6":
    case "주문투척자7":
      return (
        <GoldTile>
          <Synergy src={주문투척자} alt="주문투척자" />
        </GoldTile>
      );
    case "주문투척자8":
    case "주문투척자9":
    case "주문투척자10":
    case "주문투척자11":
      return (
        <PlatinumTile>
          <Synergy src={주문투척자} alt="주문투척자" />
        </PlatinumTile>
      );

    case "타락1":
      return (
        <GoldTile>
          <Synergy src={타락} alt="타락" />
        </GoldTile>
      );

    case "특등사수2":
    case "특등사수3":
      return (
        <BronzeTile>
          <Synergy src={특등사수} alt="특등사수" />
        </BronzeTile>
      );
    case "특등사수4":
    case "특등사수5":
    case "특등사수6":
    case "특등사수7":
      return (
        <GoldTile>
          <Synergy src={특등사수} alt="특등사수" />
        </GoldTile>
      );

    case "해커2":
      return (
        <BronzeTile>
          <Synergy src={해커} alt="해커" />
        </BronzeTile>
      );
    case "해커3":
      return (
        <SilverTile>
          <Synergy src={해커} alt="해커" />
        </SilverTile>
      );
    case "해커4":
    case "해커5":
    case "해커6":
    case "해커7":
      return (
        <GoldTile>
          <Synergy src={해커} alt="해커" />
        </GoldTile>
      );

    default:
      break;
  }
}

const DarkTile = styled.div`
  background: url(${암흑타일}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const BronzeTile = styled.div`
  background: url(${브론즈타일}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const SilverTile = styled.div`
  background: url(${실버타일}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const GoldTile = styled.div`
  background: url(${골드타일}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const PlatinumTile = styled.div`
  background: url(${플래티넘타일}) center/cover no-repeat;
  width: 26px;
  height: 26px;
  position: relative;
`;

const Synergy = styled.img`
  position: absolute;
  top: 18%;
  left: 18%;
  height: 16px;
  width: 16px;
  object-fit: cover;
  object-position: center;
`;
