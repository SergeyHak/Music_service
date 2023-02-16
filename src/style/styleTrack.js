import styled from "styled-components";
// App.js
export const MainDiv = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
export const ContainerDiv = styled.div`
  /* max-width: 1920px; */
  width: 2100px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;
export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const MinCentBlockDiv = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;
export const MainCentblockContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentPlaylistDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 179px;
`;
export const BarDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;
export const BarContentDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const BarPlayerProgressDiv = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;
export const BarPlayerBlockDiv = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const BarPlayerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
// Bar_Player.js
export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 0 27px 0 31px; */
  padding-left: 50px;
  padding-right: 32px;
  gap: 32px;
`;
export const PlayerBtnPrevDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export const PlayerBtnPrevImage = styled.img`
  width: 15px;
  height: 14px;
`;
export const PlayerBtnPlayDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export const PlayerBtnPlayImage = styled.img`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;
export const PlayerBtnNextDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const PlayerBtnNextImage = styled.img`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;
export const PlayerBtnRepeatDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export const PlayerBtnRepeatImage = styled.img`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const PlayerBtnShuffleDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export const PlayerBtnShuffleImage = styled.img`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
// Bar_Volume
export const BarVolumeBlockDiv = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`;
export const VolumeContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;
export const VolumeImageDiv = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
export const VolumeImage = styled.img`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
export const VolumeProgressDiv = styled.div`
  width: 109px;
`;
export const VolumeProgressLineInput = styled.input`
  width: 109px;
`;
// Content_Title
export const ContentTitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
export const PlaylistTitleColDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 475px;
`;
export const PlaylistTitleColDiv2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 370px;
`;
export const PlaylistTitleColDiv3 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 270px;
`;
export const PlaylistTitleColDiv4 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 60px;
  text-align: end;
`;
export const PlayListTitleImage = styled.img`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
// Player__Track
export const PlayerTrackPlayDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TrackPlayContainDiv = styled.div`
  display: flex;
`;
export const TrackPlayImageDiv = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`;
export const TrackPlayImage = styled.img`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackPlayAuthorDiv = styled.div`
  grid-area: author;
  min-width: 49px;
`;
export const TrackPlayAuthorLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;
export const TrackPlayAlbumDiv = styled.div`
  grid-area: album;
  min-width: 49px;
`;
export const TrackPlayAlbumLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;
export const TrackPlayLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`;
export const TrackPlayLike = styled.div`
  padding: 5px;
`;
export const TrackPlayLikeImage = styled.img`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const TrackPlayDisableDiv = styled.div`
  margin-left: 28.5px;
`;
export const TrackPlayDisableImage = styled.img`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;
//Playlist
export const PlayListItemDiv = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;
export const PlayListTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`;
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;
export const TrackTitleIconImage = styled.img`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackTitleTextDiv = styled.div`
  /* & :hover{
  color: blue; */
  /* } */
`;
export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`;
export const TrackTitleLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const TrackAuthorLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;
export const TrackAlbumDiv = styled.div`
  width: 245px;
`;
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
export const TrackTimeDiv = styled.div``;
export const TrackTimeImage = styled.img`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;
export const TrackTimeTextSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
//Header.js
export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
export const SearchTextInput = styled.input`
  /* webkit-box-flex: 100; */
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
export const CenterBlockFilterDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
export const FilterTitleDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const FilterButtonDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    color: #ba55d3;
    border-color: #ba55d3;
  }
`;
export const Author = styled.div`
  position: absolute;
  margin-left: 70px;
  margin-top: 350px;
  background-color: rgb(49, 46, 46);
  width: 180px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: rotateX(90deg);
  transition-duration: 0.1s; */
  overflow: auto;
  display: none;
`;
export const AuthorActive = styled.div`
  /* transform: rotateX(0deg);
  transition-duration: 0.2s; */
  display: block;
`;
export const MenuListUl = styled.ul`
  padding: 18px 0 10px 0;
`;
export const HeaderMenuItemLi = styled.li`
 padding: 5px 0;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    color: #ad61ff;
    border-bottom: 1px solid #ad61ff;
  }
`;

export const AuthorDiv  =styled.div`
position: absolute;
  margin-left: 70px;
  margin-top: 350px;
  background-color: rgb(49, 46, 46);
  width: 180px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: rotateX(90deg);
  transition-duration: 0.1s; */
  overflow: auto;
  display: none;
  &.active{
    /* transform: rotateX(0deg);
  transition-duration: 0.2s; */
  display: block;
  }
`
export const YearDiv = styled.div`
position: absolute;
  margin-left: 220px;
  margin-top: 350px;
  background-color: rgb(49, 46, 46);
  width: 180px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: rotateX(90deg);
  transition-duration: 0.1s; */
  overflow: auto;
  display: none;
  &.active{
    /* transform: rotateX(0deg);
  transition-duration: 0.2s; */
  display: block;
  }
`
export const GenreDiv = styled.div`
 position: absolute;
  margin-left: 340px;
  margin-top: 350px;
  background-color: rgb(49, 46, 46);
  width: 180px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: rotateX(90deg);
  transition-duration: 0.1s; */
  overflow: auto;
  display: none;
  &.active{
    /* transform: rotateX(0deg);
  transition-duration: 0.2s; */
  display: block;
  }
`
//Menu.js
export const MainNavNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;
export const NavLogoDiv = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const LogoImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
export const NavBurgerDiv = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BurgerLineSpan = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
export const MenuListUll = styled.ul`
  padding: 18px 0 10px 0;
`;
export const MenuItemLi = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  cursor: pointer;
  width: 100px;
  &:hover {
    color: #ad61ff;
    border-bottom: 1px solid #ad61ff;
  }
`;
export const MenuLinkA = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const MenuItemsLi = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    color: #ad61ff;
    border-bottom: 1px solid #ad61ff;
  }
`;
export const NavMenuDiv = styled.div`
display: block;
  visibility: visible;
  position: absolute;
  /* left: -100%;   
  transition: left 1s; */
  transform: rotateY(90deg);
  transition-duration: 0.1s;
  &.active{
     /* left:5%; */
  transform: rotateY(0deg);
  transition-duration: 0.2s;
  }

`

//Sidebar.js
export const SideBarPersonalDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
  margin-right: 90px;
`;
export const SideBarPersonalNameP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;
export const SideBarAvatarDiv = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`;
export const SideBarBlockDiv = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 90px;
  margin-top: 100px;
`;
export const SideBarListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideBarItemDiv = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const SideBarLinkA = styled.a`
  width: 100%;
  height: 100%;
`;
export const SideBarImage = styled.img`
  width: 100%;
  height: auto;
`;
//Skeleton
export const Skeleton = styled.div`
  margin-left: -170px;
  margin-top: -50px;
`;
//SkeletonMenu
export const SkeletMenu = styled.div`
  width: 400px;
  margin-top: 380px;
`;
