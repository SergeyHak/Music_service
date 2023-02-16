import * as S from "../../style/styleTrack";
import Prev from '../../img/icon/prev.svg';
import Play from '../../img/icon/play.svg';
import Next from '../../img/icon/next.svg';
import Repeat from '../../img/icon/repeat.svg';
import Shuffle from '../../img/icon/shuffle.svg';

function Bar__Player() {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrevDiv>
        <S.PlayerBtnPrevImage src = {Prev} alt="prev"/>
      </S.PlayerBtnPrevDiv>
      <S.PlayerBtnPlayDiv>
        <S.PlayerBtnPlayImage src = {Play} alt="play"/>
      </S.PlayerBtnPlayDiv>
      <S.PlayerBtnNextDiv>
        <S.PlayerBtnNextImage src ={Next} alt="next"/>
      </S.PlayerBtnNextDiv>
      <S.PlayerBtnRepeatDiv>
        <S.PlayerBtnRepeatImage src = {Repeat} alt="repeat"/>
      </S.PlayerBtnRepeatDiv>
      <S.PlayerBtnShuffleDiv>
        <S.PlayerBtnShuffleImage src = {Shuffle} alt="shuffle"/>
      </S.PlayerBtnShuffleDiv>
    </S.PlayerControls>
  );
}
export default Bar__Player;
