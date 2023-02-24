import { Routes, Route } from "react-router-dom";
import  Login  from "../js/Login/Login";
// import MusicPlayer from "../js/MusicPlayer/MusicPlayer"
// import Bar from "../js/Track/Bar_Player"
// import Music from "../js/music"
import  Registration  from "../js/Registration/Registration";
import  NotFound  from "../js/NotFound/NotFound";
// import  Track  from "../js/Track/Track";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Cookies from "js-cookie";
import {ChangeThemeTrack} from "../js/DarkAndLightTheme/ThemeSwitcher"

function AppRoutes ()  {
  let token = Cookies.get("token")
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>} />
       <Route
        path="/Track"
        element={
          <ProtectedRoute isAllowed={Boolean(token)}>
            <ChangeThemeTrack/>
          </ProtectedRoute>
        } 
      /> 
      <Route path="*" element={<NotFound/>} /> 
    </Routes>
  )
      }
export default AppRoutes