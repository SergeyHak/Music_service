import * as S from "../../style/styleTrack";
import Prev from "../../img/icon/prev.svg";
import Play from "../../img/icon/play.svg";
import Next from "../../img/icon/next.svg";
import Repeat from "../../img/icon/repeat.svg";
import Shuffle from "../../img/icon/shuffle.svg";
import muz from "../../Bobby_Marleni_-_Dropin.mp3";
import { useRef, useState } from "react";
import { AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Volume from "../../img/icon/volume.svg";
import Like from "../../img/icon/like.svg";
import DisLike from "../../img/icon/dislike.svg";
import Note from "../../img/icon/note.svg";
import { useEffect } from "react";
import useSound from "use-sound";
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"

function Bar__Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const {theme}  = useThemeContext()


  // const handleStart = () => {
  //   audioRef.current.play();
  //   setIsPlaying(true);
  // };

  // const handleStop = () => {
  //   audioRef.current.pause();
  //   setIsPlaying(false);
  // };

  // const togglePlay = isPlaying ? handleStop : handleStart;

  const [seconds, setSeconds] = useState([]);
  const [play, { pause, duration, sound }] = useSound([muz]);

  const togglePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <>
      <S.BarDiv style={{backgroundColor:theme.background}}>
        <S.BarContentDiv>
          {/* <S.BarPlayerProgressDiv></S.BarPlayerProgressDiv> */}
          <S.TimeLIneInput
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
          <S.BarPlayerBlockDiv>
            <S.BarPlayerDiv>
              <audio controls ref={audioRef} style={{ display: "none" }}>
                <source src={muz} type="audio/mpeg" />
              </audio>
              <S.PlayerControls>
                <S.PlayerBtnPrevDiv>
                  <S.PlayerBtnPrevImage src={Prev} alt="prev" />
                </S.PlayerBtnPrevDiv>
                {!isPlaying ? (
                  <S.PlayerBtnPlayDiv>
                    <S.PlayerBtnPlayImage
                      src={Play}
                      alt="play"
                      onClick={togglePlay}
                    />
                  </S.PlayerBtnPlayDiv>
                ) : (
                  <S.PauseButton onClick={togglePlay}>
                    <IconContext.Provider
                      value={{ size: "3em", color: "grey" }}
                    >
                      <AiFillPauseCircle />
                    </IconContext.Provider>
                  </S.PauseButton>
                )}
                <S.PlayerBtnNextDiv>
                  <S.PlayerBtnNextImage src={Next} alt="next" />
                </S.PlayerBtnNextDiv>
                <S.PlayerBtnRepeatDiv>
                  <S.PlayerBtnRepeatImage src={Repeat} alt="repeat" />
                </S.PlayerBtnRepeatDiv>
                <S.PlayerBtnShuffleDiv>
                  <S.PlayerBtnShuffleImage src={Shuffle} alt="shuffle" />
                </S.PlayerBtnShuffleDiv>
              </S.PlayerControls>

              <S.PlayerTrackPlayDiv>
                <S.TrackPlayContainDiv>
                  <S.TrackPlayImageDiv style={{ background:theme.backgroundNote}}>
                    <S.TrackPlayImage src={Note} alt="music" />
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
                    <S.TrackPlayLikeImage src={Like} alt="like" />
                  </S.TrackPlayLike>
                  <S.TrackPlayDisableDiv>
                    <S.TrackPlayDisableImage src={DisLike} alt="dislike" />
                  </S.TrackPlayDisableDiv>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlayDiv>
            </S.BarPlayerDiv>

            <S.BarVolumeBlockDiv>
              <S.VolumeContentDiv>
                <S.VolumeImageDiv>
                  <S.TrackTitleIconImage src={Volume} alt="Volume" />
                </S.VolumeImageDiv>
                <S.VolumeProgressDiv>
                  <S.VolumeProgressLineInput type="range" name="range" />
                </S.VolumeProgressDiv>
              </S.VolumeContentDiv>
            </S.BarVolumeBlockDiv>
          </S.BarPlayerBlockDiv>
        </S.BarContentDiv>
      </S.BarDiv>
    </>
  );
}
export default Bar__Player;
