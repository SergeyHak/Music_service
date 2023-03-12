import { useDispatch } from 'react-redux'
import { search } from '../../store/slices/searchSlice'
import searchIcon from '../../img/icon/search.svg'
import searchIconWhite from '../../img/icon/searchBlack.svg'
import * as S from './styles'
import { useThemeContext } from "../DarkAndLightTheme/Styledtheme";



export default function Search() {
    const dispatch = useDispatch()
    const {isDark } = useThemeContext();
    const { theme } = useThemeContext();

    const onChangeHandler = (e) => {
        dispatch(search(e.target.value))
    }    
    return (
        <S.SearchBlock>
             <S.SearchIcon  src={isDark ? searchIcon : searchIconWhite} alt="search" />            
            <S.SearchInput style={{color:theme.color}}
                onChange={onChangeHandler}
                type="search"
                placeholder="Поиск"
                name="search"
                isDark={isDark}
            />
        </S.SearchBlock>
    )
}
