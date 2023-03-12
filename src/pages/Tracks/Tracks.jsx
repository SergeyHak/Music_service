import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter/Filter'
import Playlist from '../../components/Playlist/Playlist/Playlist'
import Sidebar from '../../components/Sidebar/Sidebar'
import watch from '../../img/icon/watch.svg'
import * as S from './styles'
import { useThemeContext } from "../../components/DarkAndLightTheme/Styledtheme";


export default function Tracks() {
    const { theme } = useThemeContext();

    return (
        <>
            <S.CenterBlock>
                <S.CenterBlockContent>
                    <Search />
                    <S.CenterBlockTitle style={{color:theme.color  }}>Треки</S.CenterBlockTitle>
                    <Filter />
                    <S.TitleWrapper>
                        <S.TitleTrack style={{color:theme.color  }}>ТРЕК</S.TitleTrack>
                        <S.TitleAuthor style={{color:theme.color  }}>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
                        <S.TitleAlbum style={{color:theme.color  }}>АЛЬБОМ</S.TitleAlbum>
                        <S.TitleTime>
                            <S.WatchIcon  src={watch} alt="time" />
                        </S.TitleTime>
                    </S.TitleWrapper>
                    <Playlist />
                </S.CenterBlockContent>
            </S.CenterBlock>
            <Sidebar />
        </>
    )
}
