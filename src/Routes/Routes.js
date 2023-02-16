import { Routes, Route } from "react-router-dom";
import  Login  from "../js/Login/Login";
import  Registration  from "../js/Registration/Registration";
import  NotFound  from "../js/NotFound/NotFound";
import  Track  from "../js/Track/Track";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Cookies from "js-cookie";

function AppRoutes ()  {
  let token = Cookies.get("token")
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
       <Route
        path="/Track"
        element={
          <ProtectedRoute isAllowed={Boolean(token)}>
            <Track />
          </ProtectedRoute>
        } 
      /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
      }
export default AppRoutes