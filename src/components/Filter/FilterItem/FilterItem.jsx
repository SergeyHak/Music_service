import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";

export default function FilterItem({ value, onClickFunction }) {
    const { theme } = useThemeContext();

    return (
        <S.FilterItemsLabel htmlFor="filter">
            <S.FilterItem 
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <S.FilterLabel  htmlFor={value} style={{color: theme.color }}>{value}  </S.FilterLabel>
        </S.FilterItemsLabel>
    )
}
