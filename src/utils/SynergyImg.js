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
          <DarkTile>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <BronzeTile>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </BronzeTile>
        );
      } else if (event >= 6) {
        return (
          <GoldTile>
            <Synergy src={기계유망주} alt="기계유망주" />;
          </GoldTile>
        );
      }
      break;

    case "동물특공대":
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <BronzeTile>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </BronzeTile>
        );
      } else if (event >= 5 && event < 7) {
        return (
          <GoldTile>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </GoldTile>
        );
      } else if (event >= 7) {
        return (
          <PlatinumTile>
            <Synergy src={동물특공대} alt="동물특공대" />;
          </PlatinumTile>
        );
      }
      break;

    case "레이저단":
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={레이저단} alt="레이저단" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <BronzeTile>
            <Synergy src={레이저단} alt="레이저단" />;
          </BronzeTile>
        );
      } else if (event >= 6 && event < 9) {
        return (
          <GoldTile>
            <Synergy src={레이저단} alt="레이저단" />;
          </GoldTile>
        );
      } else if (event >= 7) {
        return (
          <PlatinumTile>
            <Synergy src={레이저단} alt="레이저단" />;
          </PlatinumTile>
        );
      }
      break;

    case "메카: 프라임":
      // return (
      //   <SynergyBox src={브론즈타일} alt="브론즈">
      //     <Synergy src={메카프라임} alt="메카프라임" />
      //   </SynergyBox>
      // );
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <BronzeTile>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </BronzeTile>
        );
      } else if (event >= 5) {
        return (
          <GoldTile>
            <Synergy src={메카프라임} alt="메카프라임" />;
          </GoldTile>
        );
      }
      break;

    case "민간인":
      if (event === 1) {
        return (
          <BronzeTile>
            <Synergy src={민간인} alt="민간인" />;
          </BronzeTile>
        );
      } else if (event === 2) {
        return (
          <SilverTile>
            <Synergy src={민간인} alt="민간인" />;
          </SilverTile>
        );
      } else if (event === 3) {
        return (
          <GoldTile>
            <Synergy src={민간인} alt="민간인" />;
          </GoldTile>
        );
      }
      break;

    case "별 수호자":
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={별수호자} alt="별수호자" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <BronzeTile>
            <Synergy src={별수호자} alt="별수호자" />;
          </BronzeTile>
        );
      } else if (event >= 5 && event < 7) {
        return (
          <SilverTile>
            <Synergy src={별수호자} alt="별수호자" />;
          </SilverTile>
        );
      } else if (event >= 7 && event < 9) {
        return (
          <GoldTile>
            <Synergy src={별수호자} alt="별수호자" />;
          </GoldTile>
        );
      } else if (event >= 9) {
        return (
          <PlatinumTile>
            <Synergy src={별수호자} alt="별수호자" />;
          </PlatinumTile>
        );
      }
      break;

    case "병기고":
      return (
        <GoldTile>
          <Synergy src={병기고} alt="병기고" />;
        </GoldTile>
      );

    case "우세":
      if (event < 3) {
        <DarkTile>
          <Synergy src={우세} alt="우세" />;
        </DarkTile>;
      } else if (event >= 3) {
        <GoldTile>
          <Synergy src={우세} alt="우세" />;
        </GoldTile>;
      }
      break;

    case "위협":
      return (
        <GoldTile>
          <Synergy src={위협} alt="위협" />;
        </GoldTile>
      );

    case "자동방어체계":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <GoldTile>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </GoldTile>
        );
      } else if (event >= 6) {
        return (
          <PlatinumTile>
            <Synergy src={자동방어체계} alt="자동방어체계" />;
          </PlatinumTile>
        );
      }
      break;
    case "지하세계":
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={지하세계} alt="지하세계" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 5) {
        return (
          <BronzeTile>
            <Synergy src={지하세계} alt="지하세계" />;
          </BronzeTile>
        );
      } else if (event >= 5) {
        return (
          <GoldTile>
            <Synergy src={지하세계} alt="지하세계" />;
          </GoldTile>
        );
      }
      break;
    case "황소부대":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={황소부대} alt="황소부대" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={황소부대} alt="황소부대" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={황소부대} alt="황소부대" />;
          </SilverTile>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <GoldTile>
            <Synergy src={황소부대} alt="황소부대" />;
          </GoldTile>
        );
      } else if (event >= 8) {
        return (
          <PlatinumTile>
            <Synergy src={황소부대} alt="황소부대" />;
          </PlatinumTile>
        );
      }
      break;
    case "결투가":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={결투가} alt="결투가" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={결투가} alt="결투가" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={결투가} alt="결투가" />;
          </SilverTile>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <GoldTile>
            <Synergy src={결투가} alt="결투가" />;
          </GoldTile>
        );
      } else if (event >= 8) {
        return (
          <PlatinumTile>
            <Synergy src={결투가} alt="결투가" />;
          </PlatinumTile>
        );
      }
      break;
    case "기상캐스터":
      return (
        <GoldTile>
          <Synergy src={기상캐스터} alt="기상캐스터" />;
        </GoldTile>
      );
    case "마스코트":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={마스코트} alt="마스코트" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={마스코트} alt="마스코트" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={마스코트} alt="마스코트" />;
          </SilverTile>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <GoldTile>
            <Synergy src={마스코트} alt="마스코트" />;
          </GoldTile>
        );
      } else if (event >= 8) {
        return (
          <PlatinumTile>
            <Synergy src={마스코트} alt="마스코트" />;
          </PlatinumTile>
        );
      }
      break;
    case "무법자":
      if (event < 3) {
        return (
          <DarkTile>
            <Synergy src={무법자} alt="무법자" />;
          </DarkTile>
        );
      } else if (event >= 3 && event < 6) {
        return (
          <BronzeTile>
            <Synergy src={무법자} alt="무법자" />;
          </BronzeTile>
        );
      } else if (event >= 6) {
        return (
          <GoldTile>
            <Synergy src={무법자} alt="무법자" />;
          </GoldTile>
        );
      }
      break;
    case "방패대":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={방패대} alt="방패대" />;
          </DarkTile>
        );
      } else if (event === 2) {
        return (
          <BronzeTile>
            <Synergy src={방패대} alt="방패대" />;
          </BronzeTile>
        );
      } else if (event === 3) {
        return (
          <SilverTile>
            <Synergy src={방패대} alt="방패대" />;
          </SilverTile>
        );
      } else if (event === 4) {
        return (
          <GoldTile>
            <Synergy src={방패대} alt="방패대" />;
          </GoldTile>
        );
      } else if (event >= 5) {
        return (
          <PlatinumTile>
            <Synergy src={방패대} alt="방패대" />;
          </PlatinumTile>
        );
      }
      break;
    case "선의":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={선의} alt="선의" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={선의} alt="선의" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={선의} alt="선의" />;
          </SilverTile>
        );
      } else if (event >= 6) {
        return (
          <GoldTile>
            <Synergy src={선의} alt="선의" />;
          </GoldTile>
        );
      }
      break;
    case "싸움꾼":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </SilverTile>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <GoldTile>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </GoldTile>
        );
      } else if (event >= 8) {
        return (
          <PlatinumTile>
            <Synergy src={싸움꾼} alt="싸움꾼" />;
          </PlatinumTile>
        );
      }
      break;
    case "엄호대":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={엄호대} alt="엄호대" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={엄호대} alt="엄호대" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <GoldTile>
            <Synergy src={엄호대} alt="엄호대" />;
          </GoldTile>
        );
      } else if (event >= 6) {
        return (
          <PlatinumTile>
            <Synergy src={엄호대} alt="엄호대" />;
          </PlatinumTile>
        );
      }
      break;

    case "에이스":
      if (event === 1) {
        <BronzeTile>
          <Synergy src={에이스} alt="에이스" />;
        </BronzeTile>;
      } else if (event === 2 || event === 3) {
        <DarkTile>
          <Synergy src={에이스} alt="에이스" />;
        </DarkTile>;
      } else if (event >= 4) {
        <GoldTile>
          <Synergy src={에이스} alt="에이스" />;
        </GoldTile>;
      }
      break;

    case "익살꾼":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </DarkTile>
        );
      } else if (event === 2) {
        return (
          <BronzeTile>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </BronzeTile>
        );
      } else if (event >= 3) {
        return (
          <GoldTile>
            <Synergy src={익살꾼} alt="익살꾼" />;
          </GoldTile>
        );
      }
      break;

    case "정찰단":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={정찰단} alt="정찰단" />;
          </DarkTile>
        );
      } else if (event === 2) {
        return (
          <BronzeTile>
            <Synergy src={정찰단} alt="정찰단" />;
          </BronzeTile>
        );
      } else if (event === 3) {
        return (
          <SilverTile>
            <Synergy src={정찰단} alt="정찰단" />;
          </SilverTile>
        );
      } else if (event >= 4) {
        return (
          <GoldTile>
            <Synergy src={정찰단} alt="정찰단" />;
          </GoldTile>
        );
      }
      break;
    case "주문투척자":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </BronzeTile>
        );
      } else if (event >= 4 && event < 6) {
        return (
          <SilverTile>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </SilverTile>
        );
      } else if (event >= 6 && event < 8) {
        return (
          <GoldTile>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </GoldTile>
        );
      } else if (event >= 8) {
        return (
          <PlatinumTile>
            <Synergy src={주문투척자} alt="주문투척자" />;
          </PlatinumTile>
        );
      }
      break;
    case "타락":
      return (
        <GoldTile>
          <Synergy src={타락} alt="타락" />;
        </GoldTile>
      );
    case "특등사수":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={특등사수} alt="특등사수" />;
          </DarkTile>
        );
      } else if (event >= 2 && event < 4) {
        return (
          <BronzeTile>
            <Synergy src={특등사수} alt="특등사수" />;
          </BronzeTile>
        );
      } else if (event >= 4) {
        return (
          <GoldTile>
            <Synergy src={특등사수} alt="특등사수" />;
          </GoldTile>
        );
      }
      break;
    case "해커":
      if (event < 2) {
        return (
          <DarkTile>
            <Synergy src={해커} alt="해커" />;
          </DarkTile>
        );
      } else if (event === 2) {
        return (
          <BronzeTile>
            <Synergy src={해커} alt="해커" />;
          </BronzeTile>
        );
      } else if (event === 3) {
        return (
          <SilverTile>
            <Synergy src={해커} alt="해커" />;
          </SilverTile>
        );
      } else if (event >= 4) {
        return (
          <GoldTile>
            <Synergy src={해커} alt="해커" />;
          </GoldTile>
        );
      }
      break;
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
  top: 10%;
  left: 12%;
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: center;
`;
