import * as S from "../../style/styleTrack.js";
import Like from '../../img/icon/like.svg';
import DisLike from '../../img/icon/dislike.svg';
import Note from '../../img/icon/note.svg';


function Player_Track() {
  return (
    <S.PlayerTrackPlayDiv>
      <S.TrackPlayContainDiv>
        <S.TrackPlayImageDiv>
          <S.TrackPlayImage src={Note} alt="music"/>
        </S.TrackPlayImageDiv>
        <div>
        <S.TrackPlayAuthorDiv>
          <S.TrackPlayAuthorLinkA href="http://">
            Ты та...
          </S.TrackPlayAuthorLinkA>
        </S.TrackPlayAuthorDiv>
        <S.TrackPlayAlbumDiv>
          <S.TrackPlayAlbumLinkA href="http://">
            Баста
          </S.TrackPlayAlbumLinkA>
        </S.TrackPlayAlbumDiv>
        </div>
      </S.TrackPlayContainDiv>
      <S.TrackPlayLikeDis>
        <S.TrackPlayLike>
          <S.TrackPlayLikeImage src={Like} alt="like"/>
        </S.TrackPlayLike>
        <S.TrackPlayDisableDiv>
          <S.TrackPlayDisableImage src={DisLike} alt="dislike"/>
        </S.TrackPlayDisableDiv>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlayDiv>
  );
}
export default Player_Track