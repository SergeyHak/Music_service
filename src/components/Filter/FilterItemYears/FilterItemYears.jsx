import { useDispatch } from 'react-redux'
import { filterByYear } from '../../../store/slices/filterSlice'
import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";

export default function FilterItemYears() {
    const dispatch = useDispatch()

    const onYearFilter = (e) => {
        dispatch(filterByYear(e.target.value))
    }
    const { isDark } = useThemeContext();


    return (
        <S.FilterItemsYearWrapper>
            <S.FilterItemsYearLabel htmlFor="year-filter">
                <input
                    id="year-filter-new"
                    name="year-filter"
                    type="radio"
                    value="newest"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel isDark={isDark} htmlFor="year-filter-new">
                    Более новые
                </S.FilterYearLabel>
                <input
                    id="year-filter-old"
                    name="year-filter"
                    type="radio"
                    value="oldest"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel isDark={isDark} htmlFor="year-filter-old">
                    Более старые
                </S.FilterYearLabel>
                <input
                    id="year-filter-default"
                    name="year-filter"
                    type="radio"
                    value="default"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel isDark={isDark} htmlFor="year-filter-default">
                    Любые
                </S.FilterYearLabel>
            </S.FilterItemsYearLabel>
        </S.FilterItemsYearWrapper>
    )
}
