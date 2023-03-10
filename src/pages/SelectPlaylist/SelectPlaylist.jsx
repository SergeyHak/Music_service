import { useParams } from 'react-router-dom'
import Search from '../../components/Search/Search'
import SelectPlaylistContent from '../../components/Playlist/SelectPlaylistContent/SelectPlaylistContent'
import watch from '../../img/icon/watch.svg'
import * as S from './styles'
import { useThemeContext } from "../../components/DarkAndLightTheme/Styledtheme"

export default function SelectPlaylist() {
    const playlistArr = ['Плейлист дня', '100 танцевальных хитов', 'Инди заряд']

    const params = useParams()
    const playlistId = params.id
    const { theme } = useThemeContext();

    return (
        <div>
            <S.CenterBlock>
                <S.CenterBlockContent>
                    <Search />
                    <S.CenterBlockTitle style={{color:theme.color}}>
                        {playlistArr[playlistId - 1]}
                    </S.CenterBlockTitle >
                    <S.TitleWrapper>
                        <S.TitleTrack>ТРЕК</S.TitleTrack>
                        <S.TitleAuthor>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
                        <S.TitleAlbum>АЛЬБОМ</S.TitleAlbum>
                        <S.TitleTime>
                            <S.WatchIcon src={watch} alt="time" />
                        </S.TitleTime>
                    </S.TitleWrapper>
                    <SelectPlaylistContent playlistId={playlistId} />
                </S.CenterBlockContent>
            </S.CenterBlock>
        </div>
    )
}
