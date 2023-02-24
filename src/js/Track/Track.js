import Menu from "./Menu.js";
import Header from "./Header.js";
import Content_Title from "./Content_Title.js";
import PlayList from "./PlayList.js";
import Content from "./Content.js";
import Sidebar from "./Sidebar.js";
import Bar__Player from "./Bar_Player.js";
// import Bar_Volume from "./Bar_Volume.js";
// import Player_Track from "./Player_Track.js";
import Skeleton from "./Skeleton.js";
import SkeletMenu from "./SkeletonMenu.js";
import { useState, useEffect } from "react";
import * as S from "../../style/styleTrack";
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"

function Track() {
  const [loading, setLoading] = useState(false);
  const {theme}  = useThemeContext()
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <S.MainDiv>     
        <S.ContainerDiv style={{backgroundColor: theme.background, color:theme.color}}>
          <S.Main>
            {Menu()}
            <S.MinCentBlockDiv>
              {Header()}
              <S.MainCentblockContentDiv>
                {Content_Title()}              
                <S.ContentPlaylistDiv>
                  {loading && <Skeleton />}
                  {!loading && <PlayList />}
                  {!loading && <Content />}
                </S.ContentPlaylistDiv>
              </S.MainCentblockContentDiv>
            </S.MinCentBlockDiv>
            {loading && <SkeletMenu />}
            {!loading && <Sidebar />}
          </S.Main>
          {/* <S.BarDiv>
            <S.BarContentDiv>
              <S.BarPlayerProgressDiv></S.BarPlayerProgressDiv>
              <S.BarPlayerBlockDiv>
                <S.BarPlayerDiv> */}
                  {Bar__Player()}
                  {/* {Player_Track()}
                </S.BarPlayerDiv>
                {Bar_Volume()}
              </S.BarPlayerBlockDiv>
            </S.BarContentDiv> */}
          {/* </S.BarDiv> */}
          <footer></footer>
        </S.ContainerDiv>
      </S.MainDiv>   
    </>
  );
}
export default Track;
