import * as S from "../../style/styleTrack";
import Watch from '../../img/icon/watch.svg';

function Content_Title(){
    return(
<S.ContentTitleDiv>
<S.PlaylistTitleColDiv>Трек</S.PlaylistTitleColDiv>
<S.PlaylistTitleColDiv2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColDiv2>
<S.PlaylistTitleColDiv3>АЛЬБОМ</S.PlaylistTitleColDiv3>
<S.PlaylistTitleColDiv4>
   <S.PlayListTitleImage  src={Watch} alt="" />
</S.PlaylistTitleColDiv4>
</S.ContentTitleDiv>
    )
}
export default Content_Title