import { useSelector } from 'react-redux'
import note from '../../../img/icon/note.svg'
import FavoriteButtons from '../FavoriteButtons/FavoriteButtons'
import { useGetTrackByIdQuery } from '../../../api/musicApi'
import { Skeleton } from '../../TrackSkeletons/styles'
import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme"

export default function Track() {
    const trackId = useSelector((state) => state.player.id)
    const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId)
    const { theme } = useThemeContext();

    return (
        <S.TrackWrapper>
            <S.TrackContainer>
                <S.PlayImageWrapper style={{backgroundColor:theme.colorA}}>
                    <S.PlayIconImage src={note} alt="music" />
                </S.PlayImageWrapper>
                {isSuccess && (
                    <>
                        <S.TrackName>
                        <S.TrackPlayLink style={{color:theme.color}} href={data.track_file}>
                                {data.name}
                            </S.TrackPlayLink>
                        </S.TrackName>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink style={{color:theme.color}} href={data.track_file}>
                                {data.author}
                            </S.TrackAuthorLink>
                        </S.TrackAuthor>
                    </>
                )}
                {isLoading && (
                    <>
                        <S.TrackName>
                            <Skeleton />
                        </S.TrackName>
                        <S.TrackAuthor>
                            <Skeleton />
                        </S.TrackAuthor>
                    </>
                )}
            </S.TrackContainer>
            <FavoriteButtons />
        </S.TrackWrapper>
    )
}
