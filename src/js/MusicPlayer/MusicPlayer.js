import qala from "../../Bobby_Marleni_-_Dropin.mp3"; // импорт музыки
import { useEffect, useState } from "react";
import "../../css/musicPlayer.css"
import useSound from "use-sound";
import {  AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Prev from '../../img/icon/prev.svg';
import Play from '../../img/icon/play.svg';
import Next from '../../img/icon/next.svg';
import * as S from "../../style/styleTrack";
import Repeat from '../../img/icon/repeat.svg';
import Shuffle from '../../img/icon/shuffle.svg';

function Bar__Player() {
  const [isPlaying, setIsPlaying] = useState(false);
 
  const [seconds, setSeconds] = useState([]);
  const [play, { pause, duration, sound }] = useSound([qala]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <S.PlayerControls>    
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      
      <S.PlayerBtnPrevDiv>
        <S.PlayerBtnPrevImage src = {Prev} alt="prev"/>
      </S.PlayerBtnPrevDiv>
        {!isPlaying ? (
          <S.PlayerBtnPlayDiv>
          <S.PlayerBtnPlayImage src = {Play} alt="play" onClick={playingButton}/>
        </S.PlayerBtnPlayDiv>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "2em", color: "grey" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
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

