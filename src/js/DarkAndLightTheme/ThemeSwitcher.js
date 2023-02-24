import {useState} from "react"
import Track from "../Track/Track"
import { ThemeContext, themes } from "./Styledtheme.js"

export const  ChangeThemeTrack= () => {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);
  
    const toggleTheme = () => {
      if (currentTheme === themes.dark) {
        setCurrentTheme(themes.light);
        return;
      }
  
      setCurrentTheme(themes.dark);
    };
  
    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>        
          <Track />
      </ThemeContext.Provider>

    );
  };