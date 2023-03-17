import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";

export default function FilterItem({ value, onClickFunction }) {
    const { isDark } = useThemeContext();

    return (
        <S.FilterItemsLabel htmlFor="filter" >
            <S.FilterItem               
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <S.FilterLabel   isDark={isDark} htmlFor={value} >{value} </S.FilterLabel>
        </S.FilterItemsLabel>
    )
}
