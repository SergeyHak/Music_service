import logo from "../../img/logo.png";
import logoBlack from "../../img/LogoBlack.png"
import ThemeImgDark from "../../img/icon/ThemeImg.svg";
import ThemeImgLight from "../../img/icon/ThemeImgLight.svg";
import { useState } from "react";
import * as S from "../../style/styleTrack";
import { useThemeContext } from "../DarkAndLightTheme/Styledtheme";

function Menu() {
  const [nav, setNav] = useState(false);
  const { toggleTheme } = useThemeContext();
  const { theme } = useThemeContext();
  const [changeTheme, setChangeTheme] = useState(false);
  const [changeLogo, setChangeLogo] = useState(false);

  const toggleThemes = () => {
    if (changeTheme) {
      setChangeTheme(false);
    } else {
      setChangeTheme(true);
    }
  };
  const toggleLogos = () => {
    if (changeLogo) {
      setChangeLogo(false);
    } else {
      setChangeLogo(true);
    }
  };

  return (
    <>
      <S.MainNavNav
        style={{ backgroundColor: theme.backgroundMenu, color: theme.color }}>
          {!changeLogo ?( <S.NavLogoDiv>
          <S.LogoImg src={logo} alt="logo" />
        </S.NavLogoDiv>):(  <S.NavLogoDiv>
          <S.LogoImg src={logoBlack} alt="logo" />
        </S.NavLogoDiv>)}      
        <S.NavBurgerDiv onClick={() => setNav(!nav)}>
          <S.BurgerLineSpan style={{ backgroundColor: theme.backgroundSpanMenu }}></S.BurgerLineSpan>
          <S.BurgerLineSpan style={{ backgroundColor: theme.backgroundSpanMenu }}></S.BurgerLineSpan>
          <S.BurgerLineSpan style={{ backgroundColor: theme.backgroundSpanMenu }}></S.BurgerLineSpan>
        </S.NavBurgerDiv>
        <S.NavMenuDiv
          className={nav ? "active" : ""}
          onClick={() => setNav(false)}
        >
          {/* className={isMenuOpen ? 'active' : ''} aria-label="Открыть главное меню" onClick={clickHandler} */}
          {/* > */}
          {/* const Component = (props) => {
    const [rotate, setRotate] = useState(0);
    return (
      <img onClick = {()=>setRotate(180)} style = {{transform:`rotate(${rotate})`}}></img>
      )
    }  */}
          <S.MenuListUll>
            <S.MenuItemLi>
              <S.MenuLinkA href="http://"style={{ color: theme.color }}>Главное</S.MenuLinkA>
            </S.MenuItemLi>
            <S.MenuItemsLi>
              <S.MenuLinkA href="http://"style={{ color: theme.color }}>Мой плейлист</S.MenuLinkA>
            </S.MenuItemsLi>
            <S.MenuItemsLi>
              <S.MenuLinkA href="http://"style={{ color: theme.color }}>Войти</S.MenuLinkA>
            </S.MenuItemsLi>
          </S.MenuListUll>
        </S.NavMenuDiv>
        {!changeTheme ? (
          <div onClick={toggleLogos}>
          <S.ThemeDiv onClick={toggleTheme}>
            <img src={ThemeImgDark} alt="logo" onClick={toggleThemes}/>
          </S.ThemeDiv>
          </div>
        ) : (
          <div onClick={toggleLogos}>
          <S.ThemeDiv onClick={toggleTheme}>
            <img src={ThemeImgLight} alt="logo" onClick={toggleThemes} />
          </S.ThemeDiv>
          </div>
        )}
      </S.MainNavNav>
    </>
  );
}
export default Menu;
