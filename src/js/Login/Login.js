import * as S from "../../style/styleLogin";
import { useState } from "react";
import Cookies from 'js-cookie'
import logo from "../../img/LogoBlack.png"
import {useNavigate} from "react-router-dom"
function Login(){
const navigate = useNavigate()
const ButtonEnter = () => {
const userLogin = textlogin;
const userPass = textpass;
if (userLogin === "555" && userPass ==="555") {
    Cookies.set("token", "555"); 
    navigate("/Track",{replace:true});
} else {
    alert("неправильный логин или пароль")
}
}
const[textlogin, settextlogin] = useState('');
const[textpass, settextpass] = useState('');
    return(
<S.MainDiv>
    <S.LoginDiv>
        <S.LogoDiv>
        <S.LogoImg src={logo} alt="logo" />
            </S.LogoDiv>
            <S.LogPassDiv>
                <S.LoginInput type="text" placeholder="Логин" value={textlogin} onInput={(e)=> settextlogin(e.target.value) }/>
                <S.PasswordInput type="text" placeholder="Пароль" value={textpass} onInput={(e)=> settextpass(e.target.value) } />
            </S.LogPassDiv>
            <S.ButtonsDiv>
                <S.EnterButton onClick= {ButtonEnter} >Войти</S.EnterButton>
                <S.RegistrationButton>Зарегистрироваться</S.RegistrationButton>
            </S.ButtonsDiv>
        </S.LoginDiv>
    </S.MainDiv>
    )
}
export default Login