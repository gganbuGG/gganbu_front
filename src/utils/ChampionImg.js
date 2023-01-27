import { style } from "@mui/system";
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
      return <Champion src={Alistar} alt="Alistar" />;
    case "애니":
      return <Champion src={Annie} alt="Annie" />;
    case "아펠리오스":
      return <Champion src={Aphelios} alt="Aphelios" />;
    case "애쉬":
      return <Champion src={Ashe} alt="Ashe" />;
    case "아우렐리온솔":
      return <Champion src={AurelionSol} alt="AurelionSol" />;
    case "벨베스":
      return <Champion src={Belveth} alt="Belveth" />;
    case "블리츠크랭크":
      return <Champion src={Blitzcrank} alt="Blitzcrank" />;
    case "카밀":
      return <Champion src={Camille} alt="Camille" />;
    case "초가스":
      return <Champion src={Chogath} alt="Chogath" />;
    case "드레이븐":
      return <Champion src={Draven} alt="Draven" />;
    case "에코":
      return <Champion src={Ekko} alt="Ekko" />;
    case "이즈리얼":
      return <Champion src={Ezreal} alt="Ezreal" />;
    case "피들스틱":
      return <Champion src={Fiddlesticks} alt="Fiddlesticks" />;
    case "피오라":
      return <Champion src={Fiora} alt="Fiora" />;
    case "갈리오":
      return <Champion src={Galio} alt="Galio" />;
    case "갱플랭크":
      return <Champion src={Gangplank} alt="Gangplank" />;
    case "잔나":
      return <Champion src={Janna} alt="Janna" />;
    case "잭스":
      return <Champion src={Jax} alt="Jax" />;
    case "징크스":
      return <Champion src={Jinx} alt="Jinx" />;
    case "카이사":
      return <Champion src={Kaisa} alt="Kaisa" />;
    case "케일":
      return <Champion src={Kayle} alt="Kayle" />;
    case "르블랑":
      return <Champion src={Leblanc} alt="Leblanc" />;
    case "리신":
      return <Champion src={LeeSin} alt="LeeSin" />;
    case "레오나":
      return <Champion src={Leona} alt="Leona" />;
    case "룰루":
      return <Champion src={Lulu} alt="Lulu" />;
    case "럭스":
      return <Champion src={Lux} alt="Lux" />;
    case "말파이트":
      return <Champion src={Malphite} alt="Malphite" />;
    case "미스포츈":
      return <Champion src={MissFortune} alt="MissFortune" />;
    case "모데카이저":
      return <Champion src={Mordekaiser} alt="Mordekaiser" />;
    case "나서스":
      return <Champion src={Nasus} alt="Nasus" />;
    case "닐라":
      return <Champion src={Nilah} alt="Nilah" />;
    case "누누":
      return <Champion src={Nunu} alt="Nunu" />;
    case "뽀삐":
      return <Champion src={Poppy} alt="Poppy" />;
    case "람머스":
      return <Champion src={Rammus} alt="Rammus" />;
    case "렐":
      return <Champion src={Rell} alt="Rell" />;
    case "레넥톤":
      return <Champion src={Renekton} alt="Renekton" />;
    case "리븐":
      return <Champion src={Riven} alt="Riven" />;
    case "사미라":
      return <Champion src={Samira} alt="Samira" />;
    case "세주아니":
      return <Champion src={Sejuani} alt="Sejuani" />;
    case "세나":
      return <Champion src={Senna} alt="Senna" />;
    case "세트":
      return <Champion src={Sett} alt="Sett" />;
    case "시비르":
      return <Champion src={Sivir} alt="Sivir" />;
    case "소나":
      return <Champion src={Sona} alt="Sona" />;
    case "소라카":
      return <Champion src={Soraka} alt="Soraka" />;
    case "사일러스":
      return <Champion src={Sylas} alt="Sylas" />;
    case "신드라":
      return <Champion src={Syndra} alt="Syndra" />;
    case "탈리야":
      return <Champion src={Taliyah} alt="Taliyah" />;
    case "탈론":
      return <Champion src={Talon} alt="Talon" />;
    case "우르곳":
      return <Champion src={Urgot} alt="Urgot" />;
    case "베인":
      return <Champion src={Vayne} alt="Vayne" />;
    case "벨코즈":
      return <Champion src={Velkoz} alt="Velkoz" />;
    case "바이":
      return <Champion src={Vi} alt="Vi" />;
    case "비에고":
      return <Champion src={Viego} alt="Viego" />;
    case "오공":
      return <Champion src={Wukong} alt="Wukong" />;
    case "야스오":
      return <Champion src={Yasuo} alt="Yasuo" />;
    case "유미":
      return <Champion src={Yuumi} alt="Yuumi" />;
    case "자크":
      return <Champion src={Zac} alt="Zac" />;
    case "제드":
      return <Champion src={Zed} alt="Zed" />;
    case "조이":
      return <Champion src={Zoe} alt="Zoe" />;

    default:
      break;
  }
}

const Champion = styled.img`
  margin-right: 15px;
  height: 60px;
  width: 60px;
  border: 3px solid blue;
  border-radius: 10px;
`;
