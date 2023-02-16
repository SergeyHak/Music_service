import Menu from "../../js/Track/Menu.js";
import Bar__Player from "../../js/Track/Bar_Player.js";
import Bar_Volume from "../../js/Track/Bar_Volume.js";
import Player_Track from "../../js/Track/Player_Track.js";
import * as S from "../../style/styleNotFound";
import Search from '../../img/icon/search.svg';


function NotFound() { 
  return (
    <>
      <S.MainDiv>       
        <S.ContainerDiv>
          <S.Main>
            {Menu()}
            <S.MinCentBlockDiv>                   
      <S.CenterBlockSearch>
        <img src={Search} alt="" />
        <S.SearchSvg>
          <use href=""></use>
        </S.SearchSvg>
        <S.SearchTextInput
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterBlockSearch>    
            </S.MinCentBlockDiv>
          </S.Main>
          <S.NotFoundDiv>
            <h2>NOT FOUND 404</h2>
          </S.NotFoundDiv>
          <S.BarDiv>
            <S.BarContentDiv>
              <S.BarPlayerBlockDiv>
                <S.BarPlayerDiv>
                  {Bar__Player()}
                  {Player_Track()}
                </S.BarPlayerDiv>
                {Bar_Volume()}
              </S.BarPlayerBlockDiv>
            </S.BarContentDiv>
          </S.BarDiv>
          <footer></footer>
        </S.ContainerDiv>
      </S.MainDiv>
    </>
  );
}
export default NotFound;
