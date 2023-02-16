import logo from "../../img/logo.png";
import { useState } from 'react'
import * as S from "../../style/styleTrack";
function Menu() {
  const [nav, setNav] = useState(false);
  return (
    <S.MainNavNav>
      <S.NavLogoDiv>
        <S.LogoImg src={logo} alt="logo" />
      </S.NavLogoDiv>
      <S.NavBurgerDiv onClick={() => setNav(!nav)} >
        <S.BurgerLineSpan></S.BurgerLineSpan>
        <S.BurgerLineSpan></S.BurgerLineSpan>
        <S.BurgerLineSpan></S.BurgerLineSpan>
      </S.NavBurgerDiv>     
      <S.NavMenuDiv className={nav ? "active" : ""}  onClick = {() =>setNav(false)}>      
      {/* className={isMenuOpen ? 'active' : ''} aria-label="Открыть главное меню" onClick={clickHandler} */}
    {/* > */}
      {/* const Component = (props) => {
    const [rotate, setRotate] = useState(0);
    return (
      <img onClick = {()=>setRotate(180)} style = {{transform:`rotate(${rotate})`}}></img>
      )
    }  */}
        < S.MenuListUll>
          <S.MenuItemLi>
            <S.MenuLinkA href="http://" >
              Главное
            </S.MenuLinkA>
          </S.MenuItemLi>
          <S.MenuItemsLi>
            <S.MenuLinkA href="http://" >
              Мой плейлист
            </S.MenuLinkA>
          </S.MenuItemsLi>
          <S.MenuItemsLi>
            <S.MenuLinkA href="http://" >
              Войти
            </S.MenuLinkA>
          </S.MenuItemsLi>
        </S.MenuListUll>
      </S.NavMenuDiv>
    </S.MainNavNav>
  );
}
export default Menu;
