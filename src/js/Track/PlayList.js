import * as S from "../../style/styleTrack";
import Note from '../../img/icon/note.svg';
import Like from '../../img/icon/like.svg';


function PlayList(){
    return(
        <>
        <S.PlayListItemDiv>
<S.PlayListTrack>
    <S.TrackTitle>
        <S.TrackTitleImage>           
                <S.TrackTitleIconImage src={Note} alt="" />
        </S.TrackTitleImage>
        <S.TrackTitleTextDiv>
            <S.TrackTitleLinkA href="http://">Guilt <span className="track__title-span"></span></S.TrackTitleLinkA>
        </S.TrackTitleTextDiv>
    </S.TrackTitle>
    <S.TrackAuthor>
        <S.TrackAuthorLinkA href="http://">Nero</S.TrackAuthorLinkA>
    </S.TrackAuthor>
    <S.TrackAlbumDiv>
        <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
    </S.TrackAlbumDiv>
    <S.TrackTimeDiv> 
        <S.TrackTimeImage src={Like} alt=""/>             
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        <S.TrackTimeTextSpan>4:44</S.TrackTimeTextSpan>
    </S.TrackTimeDiv>
</S.PlayListTrack>
</S.PlayListItemDiv> 
  </>
    )    
}
export default PlayList