import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogout } from '../../store/slices/authSlice'
import * as S from './styles'
import logo from '../../img/logo.png'
import logoBlack from '../../img/LogoBlack.png'
import ThemeDark from '../../img/icon/ThemeImg.svg'
import ThemeLight from '../../img/icon/ThemeImgLight.svg'
import { useThemeContext, } from "../DarkAndLightTheme/Styledtheme";



export default function Navigation() {
    const [menuShown, setMenuShown] = useState(false)

    const { toggleTheme,theme,isDark } = useThemeContext();
    console.log(isDark)

    const burgerClickHandler = () => setMenuShown(!menuShown)

    const dispatch = useDispatch()

    const [changeTheme, setChangeTheme] = useState(false);
    const [changeLogo, setChangeLogo] = useState(false);

    // const { theme } = useThemeContext();

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
      function ChangeTheme() {
        toggleThemes()
        toggleTheme()
        toggleLogos()
      }
    const onLogout = () => {
        dispatch(setLogout())
        document.cookie = 'token=; max-age=-1'
        document.cookie = 'username=; max-age=-1'
    }

    return (
      
        <S.Navigation  style={{backgroundColor:theme.backgroundLeftBlock}}>
            <NavLink to="/tracks">
            {!changeLogo ?( <div>
          <S.LogoNav src={logo} alt="logo" />
        </div>):(  <div>
          <S.LogoNav src={logoBlack} alt="logo" />
        </div>)}      
            </NavLink>
            <S.Burger onClick={burgerClickHandler}>
                {menuShown ? (
                    <>
                        <S.BurgerClose style={{ backgroundColor: theme.backgroundSpanMenu }}/>
                        <S.BurgerClose style={{ backgroundColor: theme.backgroundSpanMenu }}/>
                        <S.BurgerClose style={{ backgroundColor: theme.backgroundSpanMenu }} />
                    </>
                ) : (
                    <>
                        <S.BurgerLine style={{ backgroundColor: theme.backgroundSpanMenu }}/>
                        <S.BurgerLine style={{ backgroundColor: theme.backgroundSpanMenu }}/>
                        <S.BurgerLine style={{ backgroundColor: theme.backgroundSpanMenu }}/>
                    </>
                )}
            </S.Burger>
            <S.Menu style={{ display: menuShown ? 'block' : 'none' }}>
                <S.MenuList>
                    <NavLink to="/tracks">
                        <S.MenuItem style={{ color: theme.color }}>Главная</S.MenuItem>
                    </NavLink>
                    <NavLink to="/my_playlist">
                        <S.MenuItem style={{ color: theme.color }}>Мой плейлист</S.MenuItem>
                    </NavLink>
                    <NavLink to="/login" onClick={onLogout}>
                        <S.MenuItem style={{ color: theme.color }}>Выйти</S.MenuItem>
                    </NavLink>
                </S.MenuList>
            </S.Menu>
            {!changeTheme ? (
    <S.ThemeDiv onClick={ChangeTheme}>
      <S.ThemeImg src={ThemeDark} alt="logo"/>
    </S.ThemeDiv>
  ) : (
    <S.ThemeDiv onClick={ChangeTheme}>
      <S.ThemeImg src={ThemeLight} alt="logo"/>
    </S.ThemeDiv>
  )}
        </S.Navigation>
      
       
    )
}
