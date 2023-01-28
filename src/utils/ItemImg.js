import styled from "styled-components";
import 자동방어체계상징 from "../images/items/자동방어체계 상징.png";
import 동물특공대상징 from "../images/items/동물특공대 상징.png";
import 보석건틀릿 from "../images/items/보석 건틀릿.jpg";
import 피바라기 from "../images/items/피바라기.png";
import 푸른파수꾼 from "../images/items/푸른 파수꾼.png";
import 덤불조끼 from "../images/items/덤불조끼.png";
import 힘의성배 from "../images/items/힘의 성배.png";
import 용의발톱 from "../images/items/용의 발톱.png";
import 결투가상징 from "../images/items/결투가 상징.png";
import 수호자의맹세 from "../images/items/수호자의 맹세.png";
import 전략가의왕관 from "../images/items/전략가의 왕관.png";
import 거인학살자 from "../images/items/거인학살자.png";
import 방패파괴자 from "../images/items/방패파괴자.png";
import 밤의끝자락 from "../images/items/밤의 끝자락.png";
import 구인수의격노검 from "../images/items/구인수의 격노검.jpg";
import 정의의손길 from "../images/items/정의의 손길.jpg";
import 선의상징 from "../images/items/선의 상징.png";
import 마법공학총검 from "../images/items/마법공학 총검.png";
import 무한의대검 from "../images/items/무한의 대검.png";
import 레이저단상징 from "../images/items/레이저단 상징.png";
import 이온충격기 from "../images/items/이온충격기.png";
import 가고일돌갑옷 from "../images/items/가고일 돌갑옷.png";
import 최후의속삭임 from "../images/items/최후의 속삭임.png";
import 강철의솔라리펜던트 from "../images/items/강철의 솔라리 펜던트.png";
import 죽음의검 from "../images/items/죽음의 검.png";
import 대천사의지팡이 from "../images/items/대천사의 지팡이.png";
import 마스코트상징 from "../images/items/마스코트 상징.png";
import 모렐로노미콘 from "../images/items/모렐로노미콘.png";
import 황소부대상징 from "../images/items/황소부대 상징.png";
import 수은 from "../images/items/수은.jpg";
import 라바돈의죽음모자 from "../images/items/라바돈의 죽음모자.png";
import 고속연사포 from "../images/items/고속 연사포.png";
import 구원 from "../images/items/구원.png";
import 무법자상징 from "../images/items/무법자 상징.png";
import 루난의허리케인 from "../images/items/루난의 허리케인.png";
import 침묵의장막 from "../images/items/침묵의 장막.png";
import 쇼진의창 from "../images/items/쇼진의 창.png";
import 스태틱의단검 from "../images/items/스태틱의 단검.png";
import 태양불꽃망토 from "../images/items/태양불꽃 망토.png";
import 도적의장갑 from "../images/items/도적의 장갑.png";
import 도적의장갑X from "../images/items/X.jpg";
import 거인의결의 from "../images/items/거인의 결의.png";
import 워모그의갑옷 from "../images/items/워모그의 갑옷.png";
import 지크의전령 from "../images/items/지크의 전령.png";
import 서풍 from "../images/items/서풍.png";
import 즈롯차원문 from "../images/items/즈롯 차원문.png";

export default function ItemImg(event) {
  switch (event) {
    case "자동방어체계 상징":
      return <Item src={자동방어체계상징} alt="자동방어체계상징" />;
    case "동물특공대 상징":
      return <Item src={동물특공대상징} alt="동물특공대상징" />;
    case "보석 건틀릿":
      return <Item src={보석건틀릿} alt="보석건틀릿" />;
    case "피바라기":
      return <Item src={피바라기} alt="피바라기" />;
    case "푸른 파수꾼":
      return <Item src={푸른파수꾼} alt="푸른파수꾼" />;
    case "덤불조끼":
      return <Item src={덤불조끼} alt="덤불조끼" />;
    case "힘의 성배":
      return <Item src={힘의성배} alt="힘의성배" />;
    case "용의 발톱":
      return <Item src={용의발톱} alt="용의발톱" />;
    case "결투가 상징":
      return <Item src={결투가상징} alt="결투가상징" />;
    case "수호자의 맹세":
      return <Item src={수호자의맹세} alt="수호자의맹세" />;
    case "전략가의 왕관":
      return <Item src={전략가의왕관} alt="전략가의왕관" />;
    case "거인학살자":
      return <Item src={거인학살자} alt="거인학살자" />;
    case "방패파괴자":
      return <Item src={방패파괴자} alt="방패파괴자" />;
    case "밤의 끝자락":
      return <Item src={밤의끝자락} alt="밤의끝자락" />;
    case "구인수의 격노검":
      return <Item src={구인수의격노검} alt="구인수의격노검" />;
    case "정의의 손길":
      return <Item src={정의의손길} alt="정의의손길" />;
    case "선의 상징":
      return <Item src={선의상징} alt="선의상징" />;
    case "마법공학 총검":
      return <Item src={마법공학총검} alt="마법공학총검" />;
    case "무한의 대검":
      return <Item src={무한의대검} alt="무한의대검" />;
    case "레이저단 상징":
      return <Item src={레이저단상징} alt="레이저단상징" />;
    case "이온충격기":
      return <Item src={이온충격기} alt="이온충격기" />;
    case "가고일 돌갑옷":
      return <Item src={가고일돌갑옷} alt="가고일돌갑옷" />;
    case "최후의 속삭임":
      return <Item src={최후의속삭임} alt="최후의속삭임" />;
    case "강철의 솔라리 펜던트":
      return <Item src={강철의솔라리펜던트} alt="강철의솔라리펜던트" />;
    case "죽음의 검":
      return <Item src={죽음의검} alt="죽음의검" />;
    case "대천사의 지팡이":
      return <Item src={대천사의지팡이} alt="대천사의지팡이" />;
    case "마스코트 상징":
      return <Item src={마스코트상징} alt="마스코트상징" />;
    case "모렐로노미콘":
      return <Item src={모렐로노미콘} alt="모렐로노미콘" />;
    case "황소부대 상징":
      return <Item src={황소부대상징} alt="황소부대상징" />;
    case "수은":
      return <Item src={수은} alt="수은" />;
    case "라바돈의 죽음모자":
      return <Item src={라바돈의죽음모자} alt="라바돈의죽음모자" />;
    case "고속 연사포":
      return <Item src={고속연사포} alt="고속연사포" />;
    case "구원":
      return <Item src={구원} alt="구원" />;
    case "무법자 상징":
      return <Item src={무법자상징} alt="무법자상징" />;
    case "루난의 허리케인":
      return <Item src={루난의허리케인} alt="루난의허리케인" />;
    case "침묵의 장막":
      return <Item src={침묵의장막} alt="침묵의장막" />;
    case "쇼진의 창":
      return <Item src={쇼진의창} alt="쇼진의창" />;
    case "스태틱의 단검":
      return <Item src={스태틱의단검} alt="스태틱의단검" />;
    case "태양불꽃 망토":
      return <Item src={태양불꽃망토} alt="태양불꽃망토" />;
    case "도적의 장갑":
      return <Item src={도적의장갑} alt="도적의장갑" />;
    case "도적의 장갑(업데이트 필요)":
      return <Item src={도적의장갑X} alt="Empty Bag" />;
    case "거인의 결의":
      return <Item src={거인의결의} alt="거인의결의" />;
    case "워모그의 갑옷":
      return <Item src={워모그의갑옷} alt="워모그의갑옷" />;
    case "지크의 전령":
      return <Item src={지크의전령} alt="지크의전령" />;
    case "서풍":
      return <Item src={서풍} alt="서풍" />;
    case "즈롯 차원문":
      return <Item src={즈롯차원문} alt="즈롯차원문" />;

    default:
      break;
  }
}

const Item = styled.img`
  margin-right: 15px;
  height: 60px;
  width: 60px;
  border: 3px solid black;
  border-radius: 10px;
`;
