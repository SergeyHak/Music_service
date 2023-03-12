import { Outlet } from 'react-router-dom'
import Navigation from '../../MenuNavigation/Navigation'
import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";

export default function NavLayout() {
    const { theme } = useThemeContext();

    return (
        <S.LayoutWrapper>
            <S.LayoutContainer
              style={{ backgroundColor: theme.background}}>
                <S.Main>
                    <Navigation />
                    <Outlet />
                </S.Main>
            </S.LayoutContainer>
        </S.LayoutWrapper>
    )
}
