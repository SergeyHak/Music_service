import * as S from "../../style/styleTrack";
import Note from '../../img/icon/note.svg';
import Like from '../../img/icon/like.svg';
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"



function PlayList(){
    const {theme}  = useThemeContext()

    return(
        <>
        <S.PlayListItemDiv>
<S.PlayListTrack>
    <S.TrackTitle>
        <S.TrackTitleImage style={{ background:theme.backgroundNote}}>           
                <S.TrackTitleIconImage src={Note} alt=""  />
        </S.TrackTitleImage>
        <S.TrackTitleTextDiv>
            <S.TrackTitleLinkA href="http://" style={{ color:theme.color}}>Guilt <span className="track__title-span" ></span></S.TrackTitleLinkA>
        </S.TrackTitleTextDiv>
    </S.TrackTitle>
    <S.TrackAuthor>
        <S.TrackAuthorLinkA href="http://" style={{ color:theme.color}}>Nero</S.TrackAuthorLinkA>
    </S.TrackAuthor>
    <S.TrackAlbumDiv>
        <S.TrackAlbumLink href="http://" style={{ color:theme.colorA}}>Welcome Reality</S.TrackAlbumLink>
    </S.TrackAlbumDiv>
    <S.TrackTimeDiv> 
        <S.TrackTimeImage src={Like} alt=""/>             
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        <S.TrackTimeTextSpan style={{ color:theme.colorTime}}>4:44</S.TrackTimeTextSpan>
    </S.TrackTimeDiv>
</S.PlayListTrack>
</S.PlayListItemDiv> 
  </>
    )    
}
export default PlayList