import styled from "styled-components";
export const ContainerDiv = styled.div`
  width: 1920px;
  height: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;
// App.js
export const MainDiv = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
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
export const NotFoundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
`