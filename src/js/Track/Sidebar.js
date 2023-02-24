import playlist1 from "../../img/playlist01.png";
import playlist2 from "../../img/playlist02.png";
import playlist3 from "../../img/playlist03.png";
import Out from "../../img/icon/out.png"
import * as S from "../../style/styleTrack";
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"

function Sidebar() {
  const {theme}  = useThemeContext()

  return (
    <div>
      <S.SideBarPersonalDiv>
        <S.SideBarPersonalNameP style={{color:theme.color}}>Sergey.Ivanov</S.SideBarPersonalNameP>
        <S.SideBarAvatarDiv>
          <img src={Out} alt="" />
        </S.SideBarAvatarDiv>
      </S.SideBarPersonalDiv>
      <S.SideBarBlockDiv>
        <S.SideBarListDiv>
          <S.SideBarItemDiv>
            <S.SideBarLinkA href="#">
              <S.SideBarImage
                src={playlist1}
                alt="day's playlist"
              />
            </S.SideBarLinkA>
          </S.SideBarItemDiv>
          <S.SideBarItemDiv>
            <S.SideBarLinkA href="#">
              <S.SideBarImage
                src={playlist2}
                alt="day's playlist"
              />
            </S.SideBarLinkA>
          </S.SideBarItemDiv>
          <S.SideBarItemDiv>
            <S.SideBarLinkA href="#">
              <S.SideBarImage
                src={playlist3}
                alt="day's playlist"
              />
            </S.SideBarLinkA>
          </S.SideBarItemDiv>
        </S.SideBarListDiv>
      </S.SideBarBlockDiv>
    </div>
  );
}
export default Sidebar;
