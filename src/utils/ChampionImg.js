import styled from "styled-components";
import Alistar from "../images/Champions/Alistar.jpg";
import Annie from "../images/Champions/Annie.jpg";
import Aphelios from "../images/Champions/Aphelios.jpg";
import Ashe from "../images/Champions/Ashe.jpg";
import AurelionSol from "../images/Champions/AurelionSol.jpg";
import Belveth from "../images/Champions/Belveth.jpg";
import Blitzcrank from "../images/Champions/Blitzcrank.jpg";
import Camille from "../images/Champions/Camille.jpg";
import Chogath from "../images/Champions/Chogath.jpg";
import Draven from "../images/Champions/Draven.jpg";
import Ekko from "../images/Champions/Ekko.jpg";
import Ezreal from "../images/Champions/Ezreal.jpg";
import Fiddlesticks from "../images/Champions/Fiddlesticks.jpg";
import Fiora from "../images/Champions/Fiora.jpg";
import Galio from "../images/Champions/Galio.jpg";
import Gangplank from "../images/Champions/Gangplank.jpg";
import Janna from "../images/Champions/Janna.jpg";
import Jax from "../images/Champions/Jax.jpg";
import Jinx from "../images/Champions/Jinx.jpg";
import Kaisa from "../images/Champions/Kaisa.jpg";
import Kayle from "../images/Champions/Kayle.jpg";
import Leblanc from "../images/Champions/Leblanc.jpg";
import LeeSin from "../images/Champions/LeeSin.jpg";
import Leona from "../images/Champions/Leona.jpg";
import Lulu from "../images/Champions/Lulu.jpg";
import Lux from "../images/Champions/Lux.jpg";
import Malphite from "../images/Champions/Malphite.jpg";
import MissFortune from "../images/Champions/MissFortune.jpg";
import Mordekaiser from "../images/Champions/Mordekaiser.jpg";
import Nasus from "../images/Champions/Nasus.jpg";
import Nilah from "../images/Champions/Nilah.jpg";
import Nunu from "../images/Champions/Nunu.jpg";
import Poppy from "../images/Champions/Poppy.jpg";
import Rammus from "../images/Champions/Rammus.jpg";
import Rell from "../images/Champions/Rell.jpg";
import Renekton from "../images/Champions/Renekton.jpg";
import Riven from "../images/Champions/Riven.jpg";
import Samira from "../images/Champions/Samira.jpg";
import Sejuani from "../images/Champions/Sejuani.jpg";
import Senna from "../images/Champions/Senna.jpg";
import Sett from "../images/Champions/Sett.jpg";
import Sivir from "../images/Champions/Sivir.jpg";
import Sona from "../images/Champions/Sona.jpg";
import Soraka from "../images/Champions/Soraka.jpg";
import Sylas from "../images/Champions/Sylas.jpg";
import Syndra from "../images/Champions/Syndra.jpg";
import Taliyah from "../images/Champions/Taliyah.jpg";
import Talon from "../images/Champions/Talon.jpg";
import Urgot from "../images/Champions/Urgot.jpg";
import Vayne from "../images/Champions/Vayne.jpg";
import Velkoz from "../images/Champions/Velkoz.jpg";
import Vi from "../images/Champions/Vi.jpg";
import Viego from "../images/Champions/Viego.jpg";
import Wukong from "../images/Champions/Wukong.jpg";
import Yasuo from "../images/Champions/Yasuo.jpg";
import Yuumi from "../images/Champions/Yuumi.jpg";
import Zac from "../images/Champions/Zac.jpg";
import Zed from "../images/Champions/Zed.jpg";
import Zoe from "../images/Champions/Zoe.jpg";

export default function ChampionImg(event) {
  switch (event) {
    case "알리스타":
      return <Champion3 src={Alistar} alt="Alistar" />;
    case "애니":
      return <Champion2 src={Annie} alt="Annie" />;
    case "아펠리오스":
      return <Champion5 src={Aphelios} alt="Aphelios" />;
    case "애쉬":
      return <Champion1 src={Ashe} alt="Ashe" />;
    case "아우렐리온 솔":
      return <Champion4 src={AurelionSol} alt="AurelionSol" />;
    case "벨베스":
      return <Champion4 src={Belveth} alt="Belveth" />;
    case "블리츠크랭크":
      return <Champion1 src={Blitzcrank} alt="Blitzcrank" />;
    case "카밀":
      return <Champion2 src={Camille} alt="Camille" />;
    case "초가스":
      return <Champion3 src={Chogath} alt="Chogath" />;
    case "드레이븐":
      return <Champion2 src={Draven} alt="Draven" />;
    case "에코":
      return <Champion4 src={Ekko} alt="Ekko" />;
    case "이즈리얼":
      return <Champion2 src={Ezreal} alt="Ezreal" />;
    case "피들스틱":
      return <Champion5 src={Fiddlesticks} alt="Fiddlesticks" />;
    case "피오라":
      return <Champion2 src={Fiora} alt="Fiora" />;
    case "갈리오":
      return <Champion1 src={Galio} alt="Galio" />;
    case "갱플랭크":
      return <Champion1 src={Gangplank} alt="Gangplank" />;
    case "잔나":
      return <Champion5 src={Janna} alt="Janna" />;
    case "잭스":
      return <Champion3 src={Jax} alt="Jax" />;
    case "징크스":
      return <Champion2 src={Jinx} alt="Jinx" />;
    case "카이사":
      return <Champion3 src={Kaisa} alt="Kaisa" />;
    case "케일":
      return <Champion1 src={Kayle} alt="Kayle" />;
    case "르블랑":
      return <Champion3 src={Leblanc} alt="Leblanc" />;
    case "리 신":
      return <Champion2 src={LeeSin} alt="LeeSin" />;
    case "레오나":
      return <Champion5 src={Leona} alt="Leona" />;
    case "룰루":
      return <Champion1 src={Lulu} alt="Lulu" />;
    case "럭스":
      return <Champion1 src={Lux} alt="Lux" />;
    case "말파이트":
      return <Champion2 src={Malphite} alt="Malphite" />;
    case "미스 포츈":
      return <Champion4 src={MissFortune} alt="MissFortune" />;
    case "모데카이저":
      return <Champion5 src={Mordekaiser} alt="Mordekaiser" />;
    case "나서스":
      return <Champion1 src={Nasus} alt="Nasus" />;
    case "닐라":
      return <Champion3 src={Nilah} alt="Nilah" />;
    case "누누와 윌럼프":
      return <Champion5 src={Nunu} alt="Nunu" />;
    case "뽀삐":
      return <Champion1 src={Poppy} alt="Poppy" />;
    case "람머스":
      return <Champion3 src={Rammus} alt="Rammus" />;
    case "렐":
      return <Champion2 src={Rell} alt="Rell" />;
    case "레넥톤":
      return <Champion1 src={Renekton} alt="Renekton" />;
    case "리븐":
      return <Champion3 src={Riven} alt="Riven" />;
    case "사미라":
      return <Champion4 src={Samira} alt="Samira" />;
    case "세주아니":
      return <Champion4 src={Sejuani} alt="Sejuani" />;
    case "세나":
      return <Champion3 src={Senna} alt="Senna" />;
    case "세트":
      return <Champion4 src={Sett} alt="Sett" />;
    case "시비르":
      return <Champion2 src={Sivir} alt="Sivir" />;
    case "소나":
      return <Champion3 src={Sona} alt="Sona" />;
    case "소라카":
      return <Champion4 src={Soraka} alt="Soraka" />;
    case "사일러스":
      return <Champion1 src={Sylas} alt="Sylas" />;
    case "신드라":
      return <Champion5 src={Syndra} alt="Syndra" />;
    case "탈리야":
      return <Champion4 src={Taliyah} alt="Taliyah" />;
    case "탈론":
      return <Champion1 src={Talon} alt="Talon" />;
    case "우르곳":
      return <Champion5 src={Urgot} alt="Urgot" />;
    case "베인":
      return <Champion3 src={Vayne} alt="Vayne" />;
    case "벨코즈":
      return <Champion3 src={Velkoz} alt="Velkoz" />;
    case "바이":
      return <Champion2 src={Vi} alt="Vi" />;
    case "비에고":
      return <Champion4 src={Viego} alt="Viego" />;
    case "오공":
      return <Champion1 src={Wukong} alt="Wukong" />;
    case "야스오":
      return <Champion2 src={Yasuo} alt="Yasuo" />;
    case "유미":
      return <Champion2 src={Yuumi} alt="Yuumi" />;
    case "자크":
      return <Champion4 src={Zac} alt="Zac" />;
    case "제드":
      return <Champion4 src={Zed} alt="Zed" />;
    case "조이":
      return <Champion3 src={Zoe} alt="Zoe" />;

    default:
      break;
  }
}

const Champion1 = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid var(--cost1-color);
  border-radius: 10px;
`;

const Champion2 = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid var(--cost2-color);
  border-radius: 10px;
`;

const Champion3 = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid var(--cost3-color);
  border-radius: 10px;
`;

const Champion4 = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid var(--cost4-color);
  border-radius: 10px;
`;

const Champion5 = styled.img`
  position: relative;
  margin-right: 15px;
  height: 65px;
  width: 65px;
  border: 3px solid var(--cost5-color);
  border-radius: 10px;
`;
