import playlist1 from "../../img/playlist01.png";
import playlist2 from "../../img/playlist02.png";
import playlist3 from "../../img/playlist03.png";
import * as S from "../../style/styleTrack";
function Sidebar() {
  return (
    <div>
      <S.SideBarPersonalDiv>
        <S.SideBarPersonalNameP>Sergey.Ivanov</S.SideBarPersonalNameP>
        <S.SideBarAvatarDiv></S.SideBarAvatarDiv>
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
