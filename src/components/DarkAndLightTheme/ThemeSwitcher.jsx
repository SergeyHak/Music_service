import {useState} from "react"
import NavLaout from "../../components/Layouts/NavLayout/NavLayout"
import { ThemeContext, themes } from "./Styledtheme"

export const  ChangeThemeTrack= () => {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);
    const [isDark, setIsDark] = useState(true) 
    const toggleTheme = () => {
      if (currentTheme === themes.dark) {
        setCurrentTheme(themes.light);
        setIsDark(false);
        return;
      }
  
      setCurrentTheme(themes.dark);
      setIsDark(true);
    };
  
    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, isDark }}>        
          <NavLaout/>
      </ThemeContext.Provider>
    );
  };