import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";

export default function Categories({ text, isActive, count }) {
    const { theme } = useThemeContext();

    return (
        <S.FilterButton style={{ border: theme.borderHeader }}isActive={isActive}>
            <p>{text}</p>
            <S.FilterButtonCount isActive={isActive}>
                {count}
            </S.FilterButtonCount>
        </S.FilterButton>
    )
}
