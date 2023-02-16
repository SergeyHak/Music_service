import * as S from "../../style/styleTrack"
import Volume from '../../img/icon/volume.svg';

function Bar_Volume(){
    return(
<S.BarVolumeBlockDiv>
           <S.VolumeContentDiv>
                <S.VolumeImageDiv>
                 <S.TrackTitleIconImage src={Volume} alt="Volume" />                      
                </S.VolumeImageDiv>
                <S.VolumeProgressDiv>
                    <S.VolumeProgressLineInput type="range" name="range"/>
                </S.VolumeProgressDiv>                
           </S.VolumeContentDiv>
        </S.BarVolumeBlockDiv>
    )
}
export default Bar_Volume