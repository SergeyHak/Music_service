/* eslint-disable no-param-reassign */
import { useState } from 'react'
import VolumeIcon from '../../../img/icon/volume.svg'
import VolumeOffIcon from '../../../img/icon/volumeOff.svg'
import VolumeIconBlack from '../../../img/icon/volumeBlack.svg'
import VolumeOffIconBlack from '../../../img/icon/volumeOffBlack.svg'
import * as S from './styles'
import { useThemeContext } from "../../DarkAndLightTheme/Styledtheme";


export default function Volume({ track }) {
    const [isVolumeOn, setIsVolumeOn] = useState(true)
    const [volumeValue, setVolumeValue] = useState(0.2)
    const [prevVolumeValue, setPrevVolumeValue] = useState(0)
    const {isDark } = useThemeContext();

    track.volume = volumeValue

    const onVolumeChange = (e) => {
        if (!isVolumeOn) {
            setIsVolumeOn(true)
        }
        setVolumeValue(Number(e.target.value))
    }

    const onVolumeToggle = () => {
        setIsVolumeOn(!isVolumeOn)
        if (isVolumeOn) {
            setPrevVolumeValue(volumeValue)
            setVolumeValue(0)
        } else {
            setVolumeValue(prevVolumeValue)
        }
    }
    // src={isDark ? searchIcon : searchIconWhite} 
    return (
        <S.VolumeWrapper>
            <S.VolumeContent>
                <S.ImageWrapper>
                    <S.VolumeIcon onClick={() => onVolumeToggle()}>
                        {isDark ?(<img src={isVolumeOn ? VolumeIcon : VolumeOffIcon} alt="volume" />):
                        (<img src={isVolumeOn ? VolumeIconBlack : VolumeOffIconBlack} alt="volume" />)}
                    </S.VolumeIcon>
                </S.ImageWrapper>
                <S.ProgressWrapper>
                    <S.ProgressLine
                        isDark = {isDark}
                        type="range"
                        name="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volumeValue}
                        onChange={(e) => onVolumeChange(e)}
                    />
                </S.ProgressWrapper>
            </S.VolumeContent>
        </S.VolumeWrapper>
    )
}
