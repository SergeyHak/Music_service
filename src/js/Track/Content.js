import * as S from "../../style/styleTrack";
import Note from "../../img/icon/note.svg";
import Like from "../../img/icon/like.svg";
import {useThemeContext} from "../DarkAndLightTheme/Styledtheme"


function Content() {
  const {theme}  = useThemeContext()

  return (
    <>
      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://" style={{ color:theme.color}}>
                Elektro <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://" style={{ color:theme.color}}>
              Dynoro, Outwork, Mr. Gee
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://" style={{ color:theme.colorA}}>Elektro</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan style={{ color:theme.colorTime}}>2:22</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                I’m Fire <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://" style={{ color:theme.color}}>Ali Bakgor</S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>I’m Fire</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan style={{ color:theme.colorTime}}>2:22</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Non Stop<span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>
              Стоункат, Psychopath
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>Non Stop</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>4:12</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Run Run<span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>
              Jaded, Will Clarke, AR/CO
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>Run Run</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>2:54</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Eyes on Fire <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>
              Blue Foundation, Zeds Dead
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>Eyes on Fire</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>5:20</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Mucho Bien <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>
              HYBIT, Mr. Black, Offer Nissim, Hi Profile
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>Mucho Bien</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>3:41</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Knives n Cherries <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>minthaze</S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>Captivating</S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>1:48</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                How Deep Is Your Love{" "}
                <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>
              Calvin Harris, Disciples
            </S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.coloA}}>
              How Deep Is Your Love
            </S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>3:32</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>

      <S.PlayListItemDiv>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImage style={{ background:theme.backgroundNote}}>
              <S.TrackTitleIconImage src={Note} alt="" />
            </S.TrackTitleImage>
            <S.TrackTitleTextDiv>
              <S.TrackTitleLinkA href="http://"  style={{ color:theme.color}}>
                Morena <span className="track__title-span"></span>
              </S.TrackTitleLinkA>
            </S.TrackTitleTextDiv>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLinkA href="http://"  style={{ color:theme.color}}>Tom Boxer</S.TrackAuthorLinkA>
          </S.TrackAuthor>
          <S.TrackAlbumDiv>
            <S.TrackAlbumLink href="http://"  style={{ color:theme.colorA}}>
              Soundz Made in Romania
            </S.TrackAlbumLink>
          </S.TrackAlbumDiv>
          <S.TrackTimeDiv>
            <S.TrackTimeImage src={Like} alt="" />

            <S.TrackTimeTextSpan  style={{ color:theme.colorTime}}>3:36</S.TrackTimeTextSpan>
          </S.TrackTimeDiv>
        </S.PlayListTrack>
      </S.PlayListItemDiv>
    </>
  );
}
export default Content;
