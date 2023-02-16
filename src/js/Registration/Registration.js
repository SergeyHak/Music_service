import * as S from "../../style/styleRegistration";
import logo from "../../img/LogoBlack.png"
function Registration(){
    return(
        <S.MainDiv>
        <S.LoginDiv>
            <S.LogoDiv>
            <S.LogoImg src={logo} alt="logo" />
                </S.LogoDiv>
                <S.LogPassDiv>
                    <S.LoginInput type="text" placeholder="Логин"/>
                    <S.PasswordInput type="text" placeholder="Пароль" />
                    <S.AgainPasswordInput type="text" placeholder="Повторите пароль"/>
                </S.LogPassDiv>
                <S.ButtonsDiv>
                    <S.EnterButton>Зарегистрироваться</S.EnterButton>
                </S.ButtonsDiv>
            </S.LoginDiv>
        </S.MainDiv>
    )
}
export default Registration