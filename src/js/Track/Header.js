import { useState } from "react";
import * as S from "../../style/styleTrack";
import Search from '../../img/icon/search.svg';
import { useEffect } from "react";
// import { themes } from "../DarkAndLightTheme/Styledtheme";
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"

function Header() {
  const [nav, setNav] = useState(false);
  const [year, setYear] = useState(false);
  const [genre, setGenre] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const {theme}  = useThemeContext()

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch(`https://painassasin.online/catalog/track/all/`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
  return (
    <div>
      <S.CenterBlockSearch >
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
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilterDiv>
        <S.FilterTitleDiv>Искать по:</S.FilterTitleDiv>
        <S.FilterButtonDiv onClick={() => setNav(!nav) > setYear(false) > setGenre(false)}
        style = {{border:theme.borderHeader}}
          >исполнителю </S.FilterButtonDiv>
        <S.FilterButtonDiv onClick={() => setYear(!year) > setNav(false) > setGenre(false)}
         style = {{border:theme.borderHeader}}
          >году выпуска </S.FilterButtonDiv>
        <S.FilterButtonDiv onClick={() => setGenre(!genre) > setNav(false) > setYear(false)}
         style = {{border:theme.borderHeader}}
          >жанру</S.FilterButtonDiv>
        <S.AuthorDiv className={nav ? "active" : " "} style={{backgroundColor:theme.backgroundAuthorDiv}}>
          <S.MenuListUl>
            {items.map(item => (
            <S.HeaderMenuItemLi key={item}>
            {item.author} 
            </S.HeaderMenuItemLi>
            ))}           
          </S.MenuListUl>
        </S.AuthorDiv>
        <S.YearDiv className={year ? "active": " "} style={{backgroundColor:theme.backgroundAuthorDiv}}>
          <S.MenuListUl>
            {items.map(item => (
          <S.HeaderMenuItemLi className="menu__item" key={item}>
            {item.release_date} 
          </S.HeaderMenuItemLi>
        ))}
          </S.MenuListUl>
        </S.YearDiv>
        <S.GenreDiv className={genre ? "active" : " "}  style={{backgroundColor:theme.backgroundAuthorDiv}}  >
          <S.MenuListUl>
            {items.map(item => (
          <S.HeaderMenuItemLi className="menu__item" key={item}>
            {item.genre} 
          </S.HeaderMenuItemLi>
         ))}
          </S.MenuListUl>
        </S.GenreDiv>
      </S.CenterBlockFilterDiv>
    </div>
  );
}
}
export default Header;
